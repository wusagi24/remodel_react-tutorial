import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Comment extends Component {
    render() {
        let md = new Remarkable();
        return (
            <div className="commnet">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {md.render(this.props.children.toString())}
            </div>
        );
    }
}

export default Comment;
