import AllPosts from "@/components/posts/all-post";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

// const DUMMY_POSTS = [
//     {
//       slug: 'getting-started-with-blog-1',
//       title: 'first blog 1',
//       image: 'dummy.jfif',
//       excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
//       date: '2024-02-22',
//     },
//     {
//       slug: 'getting-started-with-blog-2',
//       title: 'first blog 2',
//       image: 'dummy.jfif',
//       excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
//       date: '2024-04-22',
//     },
//     {
//       slug: 'getting-started-with-blog-3',
//       title: 'first blog 3',
//       image: 'dummy.jfif',
//       excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
//       date: '2024-03-22',
//     },
//     {
//       slug: 'getting-started-with-blog-4',
//       title: 'first blog 4',
//       image: 'dummy.jfif',
//       excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
//       date: '2024-01-22',
//     },
//   ];

function AllPostsPage(props) {
  return (
    // <AllPosts posts={DUMMY_POSTS} />
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='list of all blog posts' />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage;