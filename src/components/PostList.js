import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    return (
        <ul>
            {posts.map(post=><Link to={`/${post.id}`} key={post.id}><li>
                {post.title}
            </li></Link>)}
        </ul>
    );
};

export default PostList;