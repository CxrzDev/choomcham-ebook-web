import { addDoc, collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

async function getContentData() {
    const querySnapshot = await getDocs(query(collection(db, "articles")));
    var data: any[] = [];

    querySnapshot.forEach((doc: any) => {
        data.push({
            id: doc.id,
            ...doc.data()
        });
        // console.log("DATA : ",doc.data())
    });

    return data;
}


export async function GET(res: Request) {

    const data = await getContentData();

    return Response.json({
        articles: data,

    });
}
export async function POST(res: Request) {
    const body = await res.json(); 
    const result = await addDoc(collection(db, 'articles'),{
        ...body,
    });

    return Response.json({"msg":body});
}
