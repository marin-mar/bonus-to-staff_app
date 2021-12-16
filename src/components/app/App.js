import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import StaffList from '../staff-list/staff-list';
import StaffAddForm from '../staff-add-form/staff-add-form';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Alex V.', salary: '1900', bonus: false, promote: true, id: 1 },
        { name: 'Drew F.', salary: '500', bonus: true, promote: false, id: 2 },
        { name: 'Mikele W.', salary: '1500', bonus: false, promote: false, id: 3 },
        { name: 'Ann D.', salary: '850', bonus: true, promote: true, id: 4 },
      ],
      nextId: 5,
      term: '',
      filter: 'all',
    };
  }

  onDeleteStaff = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((item) => item.id !== id),
    }));
  };

  onAddStaff = (name, salary) => {
    const newStaff = { name: name, salary: salary, bonus: false, promote: false, id: this.state.nextId };

    this.setState(({ data, nextId }) => {
      return {
        data: [...data, newStaff],
        nextId: nextId + 1,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchData = (data, term) => {
    if (term.length === 0) {
      return data;
    }

    return data.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  filterStaff = (data, filter) => {
    switch (filter) {
      case 'promote':
        return data.filter((item) => item.promote);
      case 'bonus':
        return data.filter((item) => item.bonus);
      case 'more1000':
        return data.filter(item => item.salary > 1000);
      case 'less1000':
        return data.filter(item => item.salary < 1000);
      default:
        return data;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { data, term, filter } = this.state;
    const totalStaff = this.state.data.length;
    const bonusStaff = this.state.data.filter((item) => item.bonus).length;
    const foundData = this.filterStaff(this.searchData(data, term), filter);

    return (
      <div className="app">
        <AppInfo totalStaff={totalStaff} bonusStaff={bonusStaff} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <StaffList data={foundData} onDelete={this.onDeleteStaff} onToggleProp={this.onToggleProp} />
        <StaffAddForm onAddStaff={this.onAddStaff} />
      </div>
    );
  }
}

export default App;
