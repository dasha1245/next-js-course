import {Fragment, useContext} from "react";

import MainHeader from "@/components/layout/MainHeader";
import Notification from "@/components/ui/Notification";
import NotificationContext from "@/store/notification-context";

function Layout(props) {
    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification
    return <Fragment>
        <MainHeader/>
        <main>
            {props.children}
        </main>
        {activeNotification && (
            <Notification
                title={activeNotification.title}
                status={activeNotification.status}
                message={activeNotification.message}
            />
        )}
    </Fragment>
}

export default Layout