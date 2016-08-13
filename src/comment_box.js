import React, { Component } from 'react';
import CommentList from './comment_list';
import CommentForm from './comment_form';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>
                <CommentForm />
            </div>
        );
    };
}

export default CommentBox;
