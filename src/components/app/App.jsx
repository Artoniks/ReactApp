import "./App.css";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {
  const data = [
    { name: "John.S", salary: 7000, increase: false },
    { name: "Artem", salary: 5000, increase: false },
    { name: "Sanya", salary: 3000, increase: true },
  ];

  return (
    <div className="App">
      <AppHeader />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
