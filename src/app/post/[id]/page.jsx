"use client"
import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Post({ params }) {
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setPostDetail(data);
      })
      .catch(error => {
        console.error('Error fetching post detail:', error);
      });
  }, [params.id]);

  return (
    // <div className="container mx-auto px-4 py-8">
    //   {Object.keys(postDetail).length > 0 ? (
    //     <div>
    //       <h1 className="text-4xl font-bold mb-4 text-gray-800">{postDetail.title.rendered}</h1>
    //       <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: postDetail.content.rendered }} />
    //       <div className="mt-8 text-center">
    //     <Link href="/">
    //       <div className="bg-blue-500 w-[100px] hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-xl">
    //         Volver
    //       </div>
    //     </Link>
    //   </div>
    //     </div>
    //   ) : (
    //     <div className="text-center text-gray-600">Loading...</div>
    //   )}
    // </div>
<div className="bg-gray-100 min-h-screen">
  <div className="container mx-auto px-4 py-8">
    {Object.keys(postDetail).length > 0 ? (
      <div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">{postDetail.title.rendered}</h1>
        <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: postDetail.content.rendered }} />
        <div className="mt-8 text-center">
          <Link href="/">
            <div className="bg-blue-500 w-36 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-xl inline-block">
              Volver
            </div>
          </Link>
        </div>
      </div>
    ) : (
      <div className="text-center text-gray-600">Cargando...</div>
    )}
  </div>
</div>

  );
}
