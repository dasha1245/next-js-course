import Link from "next/link";

import css from './MainHeader.module.css'

function MainHeader() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <Link href={'/'}>SomeEventsHere</Link>
            </div>
            <nav className={css.navigation}>
                <ul>
                    <li className={css.li}>
                        <Link href={'/events'}>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader