import React, { Fragment, Component } from 'react';
import CommentCard from './CommentCard';
import Spinner from './Spinner';

export default class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            hasLoaded: false
        };
    }

    async componentWillMount() {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/comments');
            let commentList = await response.json();
            this.setState({
                commentList,
                hasLoaded: true
            });
        } catch (error) {
            console.log(`Fetch failed: ${error}`);
        }
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            {this.state.commentList.map((comment) => {
                                return <CommentCard key={comment.id} comment={comment} />
                            })}
                        </div>
                    </div>
                </Fragment>
            );
        } else {
            return (
                <Spinner />
            );
        }
    }
};