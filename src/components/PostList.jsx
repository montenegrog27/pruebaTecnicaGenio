import PostItem from './PostItem';

export default function PostList({ posts }) {
  return (
    <ul className="divide-y divide-gray-200">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
}
