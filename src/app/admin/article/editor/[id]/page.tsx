'use client'
import React, { useEffect, useState } from 'react';
import ArticleEditor from '@/app/components/ArticlesEditor';
import Loading from '@/app/components/loading';

function Page({ params }: any) {

  const articleId = params.id;
  const [Blog, setBlog] = useState();
  async function fetchBlogs() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_baseUrl}/api/articles/${articleId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch articles");
      }
      const result = await res.json();
      setBlog(result)
      // alert("successfully")
      console.log(result);
    } catch (err: any) {
      console.error("Error fetching blogs:", err);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return <div className="min-h-screen flex items-center">
    {Blog ? <ArticleEditor data={Blog}  /> :<div className="w-full"> <Loading/></div>}
  </div>
}
export default Page;
