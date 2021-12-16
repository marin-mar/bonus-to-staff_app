import './app-info.scss';

const AppInfo = (props) => {
  const { totalStaff, bonusStaff } = props;

	return (
    <div className="app__info">
      <h1 className="app__title">Учет сотрудников в компании N</h1>
      <h2 className="app__subtitle">Общее число сотрудников: {totalStaff}</h2>
      <h2 className="app__subtitle">Премию в этом месяце получают: {bonusStaff}</h2>
    </div>
  );
}

export default AppInfo;