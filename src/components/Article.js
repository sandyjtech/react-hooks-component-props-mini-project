import React from 'react';
import blogData from "../data/blog";

function Article(props) {
  const articleList = blogData.posts.map(post =>       
    <article key={post.id}>
    <h3>{post.title}</h3>,
    <small>{post.date ? post.date : "January 1, 1970"}</small>,
    <p>{post.preview}</p>        
    </article>
      );
      
      return (
        <>{articleList}</>
      )
    }
export default Article;