import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'promote', label: 'На повышение' },
    { name: 'bonus', label: 'Премированные' },
    { name: 'more1000', label: 'с З/П выше 1000$' },
    { name: 'less1000', label: 'с З/П ниже 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const activeButton = props.filter === name;
    const activeButtonClass = activeButton ? 'btn-light' : 'btn-outline-light';
    
    return (
      <button 
        className={`btn ${activeButtonClass}`} 
        type="button" 
        key={name}
        onClick={() => props.onFilterSelect(name)}
        >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;
