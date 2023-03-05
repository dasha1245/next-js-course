import {Fragment} from "react";
import {useRouter} from "next/router";

import {getAllEvents} from "../../helper/api-utils";
import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/EventsSearch";

function EventsPage ({events}) {
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

export async function getStaticProps() {
    const events = await getAllEvents();
    return{
        props: {
            events
        },
        revalidate: 60
    }
}
export default EventsPage