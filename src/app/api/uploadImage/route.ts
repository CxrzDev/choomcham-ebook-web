// app/api/uploadImage/route.ts
import { NextResponse } from 'next/server';
import { storage } from '../config/firebaseConfig'; // Adjust the import path as necessary
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function POST(request: Request) {
    try {
        const data = await request.formData();
        const file = data.get('file') as File;

        // Ensure the file is included in the request
        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        // Create a reference to the storage location
        const storageRef = ref(storage, `articles/${file.name}`);

        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, file);

        // Get the download URL
        const url = await getDownloadURL(storageRef);

        // Respond with the download URL
        return NextResponse.json({ url });
    } catch (error) {
        console.error('Error uploading file:', error);
        return NextResponse.json({ error: 'Error uploading file' }, { status: 500 });
    }
}
