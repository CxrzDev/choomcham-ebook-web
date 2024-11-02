// pages/ArticleEditor.js
'use client'
import React, { useEffect, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { button, Button } from '@nextui-org/react';
import Editor from './Editor';
import { storage } from '../api/config/firebaseConfig';// Ensure to import your Firebase storage configuration
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { X } from 'lucide-react';

const ArticleEditor = ({ data }: any) => {
    const [title, setTitle] = useState(data?.title || '');
    const [imageURL, setImageURL] = useState(data?.imageURL || '');
    const [description, setDescription] = useState(data?.description || '');
    const [category, setCategory] = useState(data?.category || '');
    const [date, setDate] = useState(data?.date || '');
    const [file, setFile] = useState<any>(null);
    const [preview, setPreview] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/uploadImage', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const data = await response.json();
           
            alert('File uploaded successfully! : ' + data.url);


            setFile(null);
            setPreview(null);
            return data.url
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault(); // Prevent default form submission
        setIsLoading(true); // Set loading state to true
        try {
           const imageURL = await handleUpload();
           setImageURL(imageURL);
           console.log(imageURL);
        }
        catch (error: any) {
            console.log(error)
            return;
        }
        if(file && !imageURL){
            console.log("IMAGE :",imageURL)
            setIsLoading(false);
            return alert("Create article fail.");}
        const dateString = date;
        const dateObject = new Date(dateString);
        const firestoreTimestamp = Timestamp.fromDate(dateObject);

        const body = {
            id: data?.id,
            title,
            imageURL,
            description,
            category,
            date: firestoreTimestamp,
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_baseUrl}/api/articles`, {
                method: data ? "PATCH" : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (response.status === 200) {
                alert('Create Articles successfully');
            } else {
                alert('Failed to create article. Please try again.');
            }
        } catch (error) {
            console.error('Error creating article:', error);
            alert('Error creating article');
            setIsLoading(false);
        } finally {
            setIsLoading(false); // Reset loading state
            // Clear form fields
            setTitle('');
            setImageURL('');
            setDescription('');
            setCategory('');
            setDate('');
        }
    };

    useEffect(() => {
        setTitle(data?.title || "");
        setDescription(data?.description || "");
        setImageURL(data?.imageURL || "");
        setCategory(data?.category || "");
        setDate(data?.date || "");
    }, [data]);

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Create a preview URL for the selected image file
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setPreview(imageUrl);
        }
    };

    const handleFileRemove = () => {
        setFile(null);
        setPreview(null);
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Article Editor</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Cover Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}

                    />
                    {preview && <button onClick={handleFileRemove}><X /></button>}

                    {preview && (
                        <div className="mt-2">

                            <img
                                src={preview}
                                alt="Image Preview"
                                style={{ width: '200px', height: 'auto', marginTop: '10px' }}
                            />
                        </div>
                    )}
                </div>
                <div className="flex gap-10 ">
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                        >
                            <option value="">Select a category</option>
                            <option value="Business">Business</option>
                            <option value="Branding">Branding</option>
                            <option value="Product">Product</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Date:</label>
                        <input
                            type="date"
                            value={date.seconds
                                ? new Date(date.seconds * 1000).toISOString().substring(0, 10)
                                : date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                    </div>
                </div>
                <div className="mb-4 flex gap-2 flex-wrap">
                    <label className="block text-gray-700 mb-2">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                    {/* Assuming Editor is a component for markdown editing */}
                    {description && <Editor markdown={description} onChange={setDescription} />}
                </div>

                <Button
                    isLoading={isLoading}
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2"
                >
                    Save Article
                </Button>
            </form>
        </div>
    );
};

export default ArticleEditor;
