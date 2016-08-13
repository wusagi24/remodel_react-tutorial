import React, { Component } from 'react';
import Comment from './comment';

class CommentList extends Component {
    render() {
        return (
            <div className="commnetList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *author* comment</Comment>
            </div>
        );
    };
}

export default CommentList;
