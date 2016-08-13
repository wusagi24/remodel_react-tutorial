import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './comment_list';
import CommentForm from './comment_form';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false
        })
        .done((data) => {
            this.setState({data: data});
        })
        .fail((xhr, status, err) => {
            console.error(this.props.url, status, err.toString());
        });
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
