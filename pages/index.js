import EventsList from "@/components/events/EventsList";
import {getFeaturedEvents} from "../helper/api-utils";
function HomePage ({featuredEvents}) {
    return <div>
        <EventsList items={featuredEvents}/>
    </div>
}

export default HomePage

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            featuredEvents
        },
        revalidate: 1800
    }
}