import React, { Component } from 'react';

class SingleCommentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleComment: {}
        };
    }

    async componentWillMount() {
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/comments/${this.props.match.params.id}`);
            let singleComment = await response.json();
            this.setState({
                singleComment
            });
        } catch (error) {
            console.log(`Error fetching single comment: ${error}`);
        }
    }

    render() {
        const { name, email, body } = this.state.singleComment;
        return (
            <div className="card" style={{ margin: 'auto', width: "75%" }}>
                <h5 className="card-header">{name}</h5>
                <div className="card-body">
                    <h5 className="card-title">{email}</h5>
                    <p className="card-text">{body}</p>
                    <button className="btn btn-secondary" onClick={() => {console.log('omgwtfbbq'); this.props.history.replace('/comments')}}>Go Back to List</button>
                </div>
            </div>
        );
    }
};

export default SingleCommentCard;