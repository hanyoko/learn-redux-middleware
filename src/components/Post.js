import React from 'react';

const Post = ({post}) => {
    const { title, desc } = post;
    return (
        <div>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Post;