import fetch from 'node-fetch';
import { stringify } from 'postcss';
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json();
  return posts;
}

export async function getAllPostsIds() {
  const res = await fetch(new URL(apiUrl));
  const posts = res.json();

  return posts.map((post) => {
    return {
      params: {
        id: stringify(post.id),
      },
    };
  });
}
