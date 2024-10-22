import { NextRequest, NextResponse } from 'next/server';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';



export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;


        // Check if `id` is provided
        if (!id) {
            return new NextResponse(JSON.stringify({ error: 'Article ID is required' }), { status: 400 });
        }

        // Reference the document with the specific ID
        const docRef = doc(db, "articles", id);

        // Fetch the document snapshot
        const docSnap = await getDoc(docRef);

        // Check if the document exists
        if (docSnap.exists()) {
            // Return the document data, including the ID
            return new NextResponse(JSON.stringify({ id: docSnap.id, ...docSnap.data() }), { status: 200 });
        } else {
            // Handle case where the document does not exist
            return new NextResponse(JSON.stringify({ error: "No such document!" }), { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching document:', error);
        return new NextResponse(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}

export async function PATCH(res: Request) {
    const { id } = await res.json();
    try {

        const ref = doc(db, 'articles', id);
        const docSnap = await getDoc(ref);

        if (docSnap.exists()) {
            const currentViews = docSnap.data()?.views ? parseInt(docSnap.data()?.views) : 0;
            const updatedViews = currentViews + 1; // Increment the views

            const result = await updateDoc(ref, {
                views: updatedViews,
            });
        }

        return Response.json({ "msg": "Successfully" });
    } catch (error) {
        return Response.json({ "msg": "not found content" });
    }


}
