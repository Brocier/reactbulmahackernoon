import React from 'react'
import * as Markdown from 'react-markdown'

const BlogItem = (props) => {
  return (
    <div className="box content">
      <h1>{props.title}</h1>
      <Markdown source={props.content}/>
    </div>
  );
};

export default BlogItem;