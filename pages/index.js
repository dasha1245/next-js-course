import EventsList from "@/components/events/EventsList";
import {getFeaturedEvents} from "../data";
function HomePage () {
    const featuredEvents = getFeaturedEvents();
    return <div>
        <EventsList items={featuredEvents}/>
    </div>
}

export default HomePage