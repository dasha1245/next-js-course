import {useEffect, useState} from 'react';

import CommentList from './coment-list';
import NewComment from './new-comment';
import css from './comments.module.css';

function Comments(props) {
    const { eventId } = props;

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);

    useEffect(()=> {
        if(showComments){
            fetch('/api/comments/'+ eventId)
                .then(value => value.json())
                .then(value => setComments(value.comments) )
        }
    }, [showComments])
    function toggleCommentsHandler() {
        setShowComments((prevStatus) => !prevStatus);
    }

    function addCommentHandler(commentData) {
        console.log(commentData)
        fetch(`/api/comments/${eventId}`, {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(value => value.json())
            .then(value => console.log(value))
    }

    return (
        <section className={css.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler} />}
            {showComments && <CommentList items={comments} />}
        </section>
    );
}

export default Comments;