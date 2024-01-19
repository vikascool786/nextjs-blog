import PostHeader from "./post-header";
import classes from './post-content.module.css';
import Markdown from 'react-markdown'
import Image from "next/image";

// const DUMMY_POSTS = {
//     slug: 'getting-started-with-blog-1',
//     title: 'first blog 1',
//     image: 'dummy.jfif',
//     content: '# this is first post',
//     date: '2024-02-22',
// };

export default function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/${post.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <Markdown
                components={{
                    img: (props) => (
                        <Image src={props.src} alt={props.alt} width={600} height={200} />
                    ),
                }}>
                {post.content}
            </Markdown>

        </article>
    )
}
