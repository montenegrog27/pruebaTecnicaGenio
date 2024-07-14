export async function fetchPosts() {
    const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts');
    const data = await res.json();
    return data;
  }
  
  export async function fetchPost(id) {
    const res = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/${id}`);
    const data = await res.json();
    return data;
  }
  