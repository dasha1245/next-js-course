import {Fragment} from "react";

import {getEventById, getFeaturedEvents} from "../../helper/api-utils";
import EventSummary from "@/components/event-detail/EventSummary";
import EventLogistics from "@/components/event-detail/EventLogistics";
import EventContent from "@/components/event-detail/EventContent";
import Comments from "@/components/input/comments";

function EventPage({selectedEvent}) {

    if (!selectedEvent) {
        return <Fragment>
            <div className='center'>
                <p>Loading...</p>
            </div>
        </Fragment>
    }
    const {title, description, date, location, image, id} = selectedEvent

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
        <Comments eventId={id}/>
    </Fragment>
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map((event) => ({params: {eventId: event.id}}))
    return {
        paths: paths,
        fallback: true
    }
}

export default EventPage