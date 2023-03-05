
import {getFilteredEvents} from "../../helper/api-utils";
import {Fragment} from "react";
import EventsList from "@/components/events/EventsList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";

function FilteredPage({hasError, events, filteredYear, filteredMonth}) {

    if (hasError) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link={'/events'}>Show All Events</Button>
            </div>
        </Fragment>
    }



    if (!events || events.length === 0) {
        return <Fragment>
            <ErrorAlert>
                <p>No events found for the chosen filter...</p>
            </ErrorAlert>
            <div className='center'>
                <Button link={'/events'}>Show All Events</Button>
            </div>
        </Fragment>
    }

    const date = new Date(filteredYear, filteredMonth - 1);

    return <Fragment>
        <ResultsTitle date={date}/>
        <EventsList items={events}/>
    </Fragment>
}

export async function getServerSideProps(context){
    const {slug} = context.params

    const filterData = slug;

    if (!filterData) {
        return <p>Loading...</p>
    }

    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    if (isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2030 ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return {
            props: {hasError: true}
        }
    }

    const filteredEvents = await getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    return {
        props: {
            events: filteredEvents,
            filteredYear,
            filteredMonth
        }
    }
}
export default FilteredPage