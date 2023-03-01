import css from './LogisticsItem.module.css';

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={css.item}>
      <span className={css.icon}>
        <Icon />
      </span>
      <span className={css.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
