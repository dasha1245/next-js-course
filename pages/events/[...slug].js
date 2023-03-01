import {useRouter} from "next/router";

import {getFilteredEvents} from "@/data";
import {Fragment} from "react";
import EventsList from "@/components/events/EventsList";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";

function FilteredPage() {
    const router = useRouter();
    const filterData = router.query.slug;

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
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link={'/events'}>Show All Events</Button>
            </div>
        </Fragment>
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
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
        <EventsList items={filteredEvents}/>
    </Fragment>
}

export default FilteredPage