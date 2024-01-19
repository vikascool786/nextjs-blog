import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name='content' content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </Fragment>
    )
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFilesNames = getPostsFiles();
    const slug = postFilesNames.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: slug.map(slug => ({ params: { slug: slug } })),
        fallback: 'blocking',
    }
}

export default PostDetailPage;