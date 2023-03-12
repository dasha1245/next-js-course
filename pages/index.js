import EventsList from "@/components/events/EventsList";
import {getFeaturedEvents} from "../helper/api-utils";
import NewsletterRegistration from "@/components/input/newsletter-registration";
function HomePage ({featuredEvents}) {
    return <div>
        <NewsletterRegistration/>
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