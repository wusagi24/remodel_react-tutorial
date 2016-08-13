import React, { Component } from 'react';
import CommentList from './comment_list';
import CommentForm from './comment_form';

class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    };
}

export default CommentBox;
