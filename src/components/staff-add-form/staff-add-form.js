import { Component } from 'react';
import './staff-add-form.css';

class StaffAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: 0,
    };
  }

  onValueChange = (e) => {
    document.querySelector('[name="name"]').style.border = '';
    document.querySelector('[name="salary"]').style.border = '';

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) {
      if (this.state.name.length < 3 && this.state.salary) {
        document.querySelector('[name="name"]').style.border = '1px solid #800505';
      } else if (this.state.name.length > 3 && !this.state.salary) {
        document.querySelector('[name="salary"]').style.border = '1px solid #800505';
      } else {
        document.querySelector('[name="name"]').style.border = '1px solid #800505';
        document.querySelector('[name="salary"]').style.border = '1px solid #800505';
      }
      return;
    }
    this.props.onAddStaff(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: 0,
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Введите сотрудника"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Введите З/П сотрудника в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button type="submit" className="btn btn-outline-light" onClick={this.onSubmit}>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default StaffAddForm;
