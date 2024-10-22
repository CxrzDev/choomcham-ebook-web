'use client'
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import Head from 'next/head';


const videos = [
    { id: '1', src: 'https://www.youtube.com/embed/dcVFxqyxACI?si=A6HAhtVsSUap2dtz', description: 'name' },
    { id: '2', src: 'https://www.youtube.com/embed/c6Xxcyflb3o?si=db6h-ZqKwgDGcc7', description: 'name' },
    { id: '3', src: 'https://www.youtube.com/embed/apSobqg8BKQ?si=lt2L_MmNOwLF1uxm', description: 'name' },
];

function Blog() {
    const [blogs, setBlogs] = useState<any[]>([]); // Initialize blogs as an empty array
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch blogs from API on component mount
        async function fetchBlogs() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_baseUrl}/api/articles`);
                if (!res.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const result = await res.json();
                setLoading(false);
                setBlogs(result.articles); // Set the blogs data in state
            } catch (err: any) {
                console.error("Error fetching blogs:", err);
                setError(err.message); // Set error message
            }
        }

        fetchBlogs();
    }, []); // Empty dependency array means this effect runs once after initial render

    if (error) {
        return <p>Error loading blogs: {error}</p>;
    }

    return (
        <>
            <Head>
                <title>ChoomCham Branding - Blogs & Videos</title>
                <meta name="description" content="Explore branding blogs, marketing tips, and informative videos on branding and business strategy. Stay updated with the latest events and activities." />
                <meta name="keywords" content="branding, marketing, business, blogs, events, videos" />

                {/* Open Graph (OG) Meta Tags for social media */}
                <meta property="og:title" content="ChoomCham Branding - Blogs & Videos" />
                <meta property="og:description" content="Learn all about branding with our marketing blogs and insightful videos. Join our events and stay informed!" />
                <meta property="og:image" content="/images/cover6.png" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_baseUrl}/blog`} />
                <meta property="og:type" content="website" />
            </Head>
            <div className="bg-[--dark-blue] sm:p-32 p-10 text-white">
                <div>ชุ่มฉ่ำ แบรนดิ้ง</div>
                <div className="mb-10">
                    <h1 className="text-3xl sm:text-5xl thai pb-5">Blog สำหรับ admin</h1>
                    <div className="text-md thai py-3 px-3 w-80 text-center bg-[#D33666] rounded-full">
                        ADMIN
                    </div>
                    <br />
                </div>
            </div>


            <div className="px-10 py-20 bg-[--light-blue]">
                <h4 className="py-10 px-5 text-xl font-bold">ACITIVITY & EVENT</h4>
                <div className="grid sm:grid-cols-3 gap-10">
                    {blogs.length > 0 ? (
                        blogs.map((blog: any) => (
                            <Link href={`/admin/article/editor/${blog.id}`} key={blog.id}>
                                <Card className="py-4 group h-[350px]">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                        <p className="text-tiny uppercase font-bold ring-1 ring-zinc-400 px-2 rounded-full">
                                            {blog.category || "Uncategorized"}
                                        </p>
                                        <h4 className="font-bold text-large py-2">{blog.title || "ไม่มีหัวข้อ"}</h4>
                                    </CardHeader>
                                    <CardBody className="overflow-hidden py-2">
                                        <div className="w-full bg-black overflow-hidden rounded-xl relative">
                                            <div className="text-center text-xl font-bold absolute z-10 w-full group-hover:top-[45%] top-[50%] duration-150 opacity-0 group-hover:opacity-95 left-[25%]">
                                                <div className="w-1/2 drop-shadow-md text-white border rounded-[20px]">แก้ไข</div>
                                            </div>
                                            <Image
                                                alt="Card background"
                                                className="object-cover rounded-xl duration-150 group-hover:scale-110 scale-105 relative z-0 group-hover:blur-sm"
                                                src={blog.imageURL || "/images/cover6.png"}
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Link>
                        ))
                    ) : loading ? <div className="flex  items-center justify-center w-[90vw]">
                        <div className="flex flex-col items-center gap-5"><span className="px-10 loading loading-ring loading-lg">

                        </span>
                            <div className="w-full text-center">Data transfering</div>

                        </div>
                    </div> : (
                        <p>No blogs found.</p>
                    )}
                </div>
            </div>

           
        </>
    );
}

export default Blog;
