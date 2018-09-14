import React from 'react';
import { Link } from 'react-router-dom';

const CommentCard = (props) => {
    const { email, body, id } = props.comment;
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{email}</h5>
                <p className="card-text">{body.substring(0, 20)} ...</p>
                <Link className="btn btn-primary mx-auto" to={`/comments/${id}`}>See Whole Comment!</Link>
            </div>
        </div>
    );
};

export default CommentCard;