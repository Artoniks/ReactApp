import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="button-group">
      <button className="btn btn-light" type="button">
        All employees
      </button>
      <button className="btn btn-outline-light" type="button">
        {" "}
        employees to upp
      </button>
      <button className="btn btn-outline-light" type="button">
        {" "}
        more then 1000$
      </button>
    </div>
  );
};
export default AppFilter;
