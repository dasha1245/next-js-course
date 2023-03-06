import Image from "next/image";

import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './LogisticsItem';
import css from './EventLogistics.module.css';

function EventLogistics(props) {
  const { date, address, image, imageAlt, title } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={css.logistics}>
      <div className={css.image}>
        <Image src={`/${image}`} alt={title} width={450} height={160}/>
      </div>
      <ul className={css.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
