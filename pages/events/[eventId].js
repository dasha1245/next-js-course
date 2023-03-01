import {Fragment} from "react";
import {useRouter} from "next/router";

import {getEventById} from "@/data";
import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";
import ErrorAlert from "@/components/ui/ErrorAlert";
import Button from "@/components/ui/Button";

function EventPage() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const selectedEvent = getEventById(eventId);


    if(!selectedEvent){
        return <Fragment>
            <ErrorAlert>
                <p>No event found.</p>
            </ErrorAlert>
        </Fragment>
    }
    const {title, description, date, location, image} = selectedEvent

    return <Fragment>
        <EventSummary title={title}/>
        <EventLogistics date={date}
                        address={location}
                        image={image}
                        imageAlt={title}
        />
        <EventContent>
            <p>{description}</p>
        </EventContent>
    </Fragment>
}

export default EventPage