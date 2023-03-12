import css from './newsletter-registration.module.css';
import {useRef, useContext} from "react";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
    const emailInputRef = useRef();
    const notificationCtx = useContext(NotificationContext);
    function registrationHandler(event) {
        event.preventDefault();

        const userEmail = emailInputRef.current.value;
        notificationCtx.showNotification({
            title: 'Signing up...',
            message: 'Registering for newsletter.',
            status: 'pending'
        })

        if (!userEmail){
            return <h1>This input field is required!</h1>
        }

        const requestBody = {
            email: userEmail
        }

        fetch('/api/newsletter-registration', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if(response.ok){
                    return response.json()
                }

                return response.json().then(data => {
                    throw  new Error(data.message || 'Something went wrong...')
                })
            })
            .then(data => {
                notificationCtx.showNotification({
                    title: 'Success!',
                    message: 'Successfully register for the newsletter!',
                    status: 'success'
                })
            })
            .catch(error => {
                notificationCtx.showNotification({
                    title: 'Error!',
                    message: error.message || 'Something went wrong...',
                    status: 'error'
                })
            })
    }

    return (
        <section className={css.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={css.control}>
                    <input
                        type='email'
                        id='email'
                        placeholder='Your email'
                        aria-label='Your email'
                        ref={emailInputRef}
                    />
                    <button>Register</button>
                </div>
            </form>
        </section>
    );
}

export default NewsletterRegistration;