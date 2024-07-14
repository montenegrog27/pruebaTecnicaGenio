"use client"
import { useEffect, useState } from 'react';
import PostList from '../components/PostList';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fernandafamiliar.soy/wp-json/wp/v2/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  return (
  //   <div className="container mx-auto px-4 py-8">
  //     <h1 className="text-4xl font-bold mb-4 text-gray-800">Blog</h1>
  //     {loading ? (
  //       <div className="text-center text-gray-600">Loading...</div>
  //     ) : (
  //       posts.length > 0 ? (
  //         <PostList posts={posts} />
  //       ) : (
  //         <div className="text-center text-gray-600">No posts found</div>
  //       )
  //     )}
  //   </div>
  <div className="bg-gray-100 min-h-screen">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8 text-gray-800">Explora nuestro Blog</h1>
    {loading ? (
      <div className="text-center text-gray-600">Cargando...</div>
    ) : (
      posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <div className="text-center text-gray-600">No se encontraron posts</div>
      )
    )}
  </div>
</div>

  );
}
