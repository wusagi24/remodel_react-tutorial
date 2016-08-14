import React, { Component } from 'react';

class CommentForm extends Component {
    render() {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say someting..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
}

export default CommentForm;
