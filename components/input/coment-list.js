import css from './comment-list.module.css';

function CommentList({items}) {
    return (
        <ul className={css.comments}>
            {items?.map((res) => (
                <li key={res._id}>
                    <p>{res.comment.text}</p>
                    <div>
                        By <address>{res.comment.name}</address>
                    </div>
                </li>)
            )}
        </ul>
    );
}

export default CommentList;