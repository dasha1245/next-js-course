import css from './newsletter-registration.module.css';
import {useRef} from "react";

function NewsletterRegistration() {
    const emailInputRef = useRef();
    function registrationHandler(event) {
        event.preventDefault();
        const userEmail = emailInputRef.current.value;

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
            .then(response => response.json())
            .then(data => console.log(data))
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