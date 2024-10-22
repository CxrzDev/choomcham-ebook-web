'use client'
import React, { useState } from 'react';

import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Button } from '@nextui-org/react';
import Editor from './Editor';

const ArticleEditor = () => {
    const [title, setTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {

        const dateString = date;
        const dateObject = new Date(dateString);
        const firestoreTimestamp = Timestamp.fromDate(dateObject);

        const body = {
            title,
            imageURL,
            description,
            category,
            date: firestoreTimestamp
        }
        console.log(body)
        const response = await fetch(`${process.env.NEXT_PUBLIC_baseUrl}/api/articles`, {
            method: "POST",
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

        setTitle('');
        setImageURL('');
        setDescription('');
        setCategory('');
        setDate('');




    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Article</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-10 ">
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
                        <label className="block text-gray-700 mb-2">Category:</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
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
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full border border-gray-300 rounded px-2 py-1"
                        />
                    </div>
                </div>
                {/* <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Image URL:</label>
                    <input
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    />
                </div> */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description:</label>
                    {/* <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded px-2 py-1"
                    /> */}
                    <Editor markdown={''} onChange={setDescription}/>
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
