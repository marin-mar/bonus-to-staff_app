import './staff-list-item.css';

const StaffListItem = (props) => {
  const { name, salary, onDelete, onToggleProp, bonus, promote } = props;

  let classNames = 'list-group-item d-flex justify-content-between';
  if (bonus) {
    classNames += ' bonus';
  }
  if (promote) {
    classNames += ' promote';
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleProp} data-toggle="promote">
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-bonus btn-sm">
          <i className="bi bi-arrow-up-circle-fill" onClick={onToggleProp} data-toggle="bonus"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="bi bi-trash-fill"></i>
        </button>
        <button type="button" className="btn-star btn-sm" onClick={onToggleProp} data-toggle="promote">
          <i className="bi bi-star-fill"></i>
        </button>
      </div>
    </li>
  );
};

export default StaffListItem;
