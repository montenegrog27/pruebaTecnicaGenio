export default function PostItem({ post }) {
  return (
    <li className="py-4">
      <a href={`/post/${post.id}`} className="block hover:bg-gray-50 rounded-lg p-4 transition duration-300 ease-in-out">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600">{post.title.rendered}</h2>
        <p className="text-gray-600 mt-2">{post.excerpt.rendered}</p>
      </a>
    </li>
  );
}
