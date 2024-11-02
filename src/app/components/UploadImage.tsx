// components/ImageUpload.js
import React, { useState } from 'react';
import { storage } from '../api/config/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const ImageUpload = ({ onUploadComplete }:any) => {
    const [file, setFile] = useState<any>(null);
    const [preview, setPreview] = useState<any>(null);

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Create a preview URL for the selected image file
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setPreview(imageUrl);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const storageRef = ref(storage, `images/${file.name}`);

        try {
            // Upload the file
            await uploadBytes(storageRef, file);
            alert('File uploaded successfully!');

            // Get the download URL after the upload
            const url = await getDownloadURL(storageRef);
            // console.log('Download URL:', url);
            onUploadComplete(url); 

            // Clear the file and preview after upload
            setFile(null);
            setPreview(null);

            // Return the URL (if you need to use it outside this function)
            return url;
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Image</button>
            {preview && (
                <div>
                    {/* <h2>Image Preview:</h2> */}
                    <img src={preview} alt="Image Preview" style={{ width: '200px', height: 'auto', marginTop: '10px' }} />
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
