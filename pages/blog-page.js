import Layout from '../components/Layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

export const Blog = ({ posts }) => {
  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {posts && posts.map((posts) => <Post key={posts.id} post={posts} />)}
      </ul>
    </Layout>
  );
};
export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
