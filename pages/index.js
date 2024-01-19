import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-blog-1',
    title: 'first blog 1',
    image: 'dummy.jfif',
    excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
    date: '2024-02-22',
  },
  {
    slug: 'getting-started-with-blog-2',
    title: 'first blog 2',
    image: 'dummy.jfif',
    excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
    date: '2024-04-22',
  },
  {
    slug: 'getting-started-with-blog-3',
    title: 'first blog 3',
    image: 'dummy.jfif',
    excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
    date: '2024-03-22',
  },
  {
    slug: 'getting-started-with-blog-4',
    title: 'first blog 4',
    image: 'dummy.jfif',
    excerpt: 'it lorugm asflsa lurom lasflj fadslfj asfdl asdfsadlfas flnas dflha sf;lasjf;las ;asfsdkfsda sdfkjdfkdjfd ',
    date: '2024-01-22',
  },
];
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to Blog</title>
        <meta name='name' content='I post about web programming & web development' />
      </Head>
      <Hero />
      {/* <FeaturedPosts posts={DUMMY_POSTS} /> */}
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}


export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 60
  }
}
export default HomePage;