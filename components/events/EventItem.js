import css from './EventItem.module.css';

import Button from "@/components/ui/Button";
import DateIcon from "@/components/icons/date-icon";
import AddressIcon from "@/components/icons/address-icon";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";

function EventItem(props) {
    const {item: {title, image, date, location, id}} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const formattedLocation = location.replace(', ', '\n');
    const explorerUrl = `/events/${id}`;

    return <li className={css.item}>
        <img src={image} alt="event_image"/>
        <div className={css.content}>

            <div>
                <h2>{title}</h2>
                <div className={css.date}>
                    <DateIcon/>
                    <time>{humanReadableDate}</time>
                </div>

                <div className={css.address}>
                    <AddressIcon/>
                    {formattedLocation}
                </div>
            </div>
            <div className={css.actions}>
                <Button link={explorerUrl}>
                    <span>Explore Event</span>
                    <span className={css.icon}><ArrowRightIcon/></span>
                </Button>
            </div>

        </div>

    </li>
}

export default EventItem