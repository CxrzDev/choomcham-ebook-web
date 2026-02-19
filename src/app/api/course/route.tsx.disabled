import { getDocs, query, collection, orderBy } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

class Course {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    // static courseConverter: any

    constructor(id: string, title: string, description: string, imageUrl: string, price: any) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
    }

    // Firestore data converter
    static courseConverter = {
        toFirestore: (course: { id: any; title: any; description: any; imageUrl: any, price: any }) => {
            return {
                id: course.description,
                title: course.title,
                description: course.description,
                imageUrl: course.imageUrl,
                price: course.price,
            };
        },
        fromFirestore: (snapshot: { data: (arg0: any) => any }, options: any) => {
            const data = snapshot.data(options);
            return new Course(data.id, data.title, data.description, data.imageUrl, data.price);
        }
    };
}


async function getContentData() {
    const querySnapshot = await getDocs(query(collection(db, "course"), orderBy("id", "asc")));
    const data: Course[] = [];

    querySnapshot.forEach((doc) => {
        data.push(Course.courseConverter.fromFirestore(doc, ""));
        // console.log("DATA : ",doc.data())
    });

    return data;
}


export async function GET(req: Request) {
    const data = await getContentData();

    return Response.json({
        msg: "Get Course Successfully!"
        , data
    })
}