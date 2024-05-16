import "./employees-list-item.css";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase } = this.state;

    let classNames = "list-group-item d-flex justify-content-between like";
    if (increase) {
      classNames += "  increase";
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
