import {Fragment} from "react";
import {useRouter} from "next/router";

import {getAllEvents} from "@/data";
import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/EventsSearch";

function EventsPage () {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month){
        const fullUrl = `/events/${year}/${month}`
        router.push(fullUrl)
    }
    return <Fragment>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventsList items={events}/>
    </Fragment>
}

export default EventsPage