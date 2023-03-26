import { useContext } from 'react';

import css from './Notification.module.css';
import NotificationContext from '../../store/notification-context';

function Notification(props) {
    const notificationCtx = useContext(NotificationContext);

    const { title, message, status } = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = css.success;
    }

    if (status === 'error') {
        statusClasses = css.error;
    }

    if (status === 'pending') {
        statusClasses = css.pending;
    }

    const activeClasses = `${css.notification} ${statusClasses}`;

    return (
        <div className={activeClasses} onClick={notificationCtx.hideNotification}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default Notification;