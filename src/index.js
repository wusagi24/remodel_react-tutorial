import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './comment_box'

let data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *author* comment"}
];

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
