import { Component } from "react";

import "./App.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John.S", salary: 7000, increase: false, id: 1 },
        { name: "Artem", salary: 5000, increase: false, id: 2 },
        { name: "Sanya", salary: 3000, increase: true, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      console.log(index);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
