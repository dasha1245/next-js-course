import css from './EventSummary.module.css';

function EventSummary(props) {
  const { title } = props;

  return (
    <section className={css.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;