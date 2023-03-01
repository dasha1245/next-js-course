import EventItem from "@/components/events/EventItem";
import css from './EventList.module.css';
function EventsList (props) {
    const {items} = props
    return <ul className={css.list}>
        {items.map(item => <EventItem key={item.id} item={item}/>)}
    </ul>
}

export default EventsList