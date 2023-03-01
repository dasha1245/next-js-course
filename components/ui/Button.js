import Link from "next/link";

import css from './Button.module.css';

function Button(props) {
    if (props.link) {
        return <Link href={props.link} className={css.btn}>
            {props.children}
        </Link>
    }

    return <button className={css.btn} onClick={props.onClick}>{props.children}</button>
}

export default Button