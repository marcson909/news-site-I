import React from 'react';

// 1. Display the `title` inside of an `<a>` tag.
// 2. When the `title` `<a>` tag is clicked, it should call `this.props.handleTitleClick(this.props.id);`. Will arrow functions be useful here?
// 3. Display the `created_date` in a `<p>` tag.


const ArticleTeaser = (props) => {

    return (
      <div>
        {/* eslint-disable-next-line */}
        <a 
        href="#" 
        onClick={() => props.handleTitleClick(props.id)}>
        {props.title}
        </a>
        <p>{props.created_date}</p>
      </div>
    )
  }


export default ArticleTeaser;
