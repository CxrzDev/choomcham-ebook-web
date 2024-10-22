'use client'
import { motion, useScroll } from "framer-motion"
import { Eye } from "lucide-react";
import Head from 'next/head'
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown';


function Indicator() {
    const { scrollYProgress } = useScroll()

    return <motion.div style={{ scaleX: scrollYProgress }} className="bg-[#D33666] w-screen h-2" />
}

export default function Page({ params }: { params: { id: string } }) {
    const articleId = params?.id ?? "default-id";
    const [blog, setBlog] = useState<any>();

    useEffect(() => {
        // Fetch blogs from API on component mount
        async function fetchBlogs() {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_baseUrl}/api/articles/${articleId}`);

                const response = await fetch(`${process.env.NEXT_PUBLIC_baseUrl}/api/articles/${params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({id:params.id}),
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const result = await res.json();
                setBlog(result); // Set the blogs data in state
            } catch (err: any) {
                console.error("Error fetching blogs:", err);
            }
        }

        fetchBlogs();
    }, []);

    return <>
        <Head>
            <title>{articleId} - Branding Blog</title>
            <meta name="description" content="A detailed branding and marketing blog post" />
            <meta name="keywords" content="branding, marketing, blog, business" />
        </Head>

        <div className="fixed z-10 top-0 left-0 right-0"><Indicator /></div>

        <div className="py-5"></div>
        <div className="py-10">
            <div className="card-actions justify-center">
                <div className="badge p-5 text-black text-md hover:text-white ring-[#F2C762] cursor-pointer hover:bg-[#F2C762]">Bussiness</div>
                {/* <div className="badge p-5 text-black text-md hover:text-white ring-[#F2C762] cursor-pointer hover:bg-[#F2C762]">Products</div> */}
            </div>

            <div className="flex justify-center py-10">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a href="./" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Content
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <a href="./" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Blogs</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{articleId}</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="flex gap-2 justify-center">
                <Eye></Eye> {blog?.views || 0} views
            </div>
            <h1 className="sm:text-3xl md:text-5xl text-3xl text-center py-10"> {blog?.title}</h1>

            <div className="sm:px-48 px-10">
                <div className="rounded-xl overflow-hidden"><img src={blog?.imageURL || "/images/cover2.png"} alt="" /></div>
                {/* Blog content here */}
                <div className="py-10">
                    {blog?.description ? (
                        <ReactMarkdown>{blog.description}
                        </ReactMarkdown>
                    ) : (
                        <p>No description available</p>
                    )}
                </div>
            </div>
        </div>
    </>
}
