import React from "react";
import "../style/style.css";
import Card from "./Card.js";
import WholeData from "../data";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    let filtersState = this.props.filters;
    const { name, value } = event.target;
    filtersState[name] = value;

    this.props.onFilterChange(filtersState);
  }

  size(info) {
    if (this.props.filters.size === "Pequeño") {
      return info.rooms <= 10;
    } else if (this.props.filters.size === "Mediano") {
      return info.rooms <= 20 && info.rooms > 10;
    } else if (this.props.filters.size === "Grande") {
      return info.rooms > 20;
    } else {
      return true;
    }
  }

  price(info) {
    if (this.props.filters.price === "1") {
      return info.price === 1;
    } else if (this.props.filters.price === "2") {
      return info.price === 2;
    } else if (this.props.filters.price === "3") {
      return info.price === 3;
    } else if (this.props.filters.price === "4") {
      return info.price === 4;
    } else {
      return true;
    }
  }

  date(info) {
    const dateTo = new Date(this.props.filters.dateTo).getTime();
    const dateFrom = new Date(this.props.filters.dateFrom).getTime();
    if (
      this.props.filters.dateFrom === "" ||
      this.props.filters.dateTo === ""
    ) {
      return true;
    }
    return dateFrom <= info.availabilityFrom && dateTo <= info.availabilityTo;
  }

  render() {
    let filteredInfo = WholeData.filter((info) => {
      return (
        info.country.indexOf(this.props.filters.country) !== -1 &&
        this.size(info) &&
        this.price(info) &&
        this.date(info)
      );
    });
    return (
      <div>
        <form className="filters" onSubmit={this.props.resetFilters}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                <i className="fas fa-sign-in-alt"></i>
              </span>
            </div>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlSelect1"
              name="dateFrom"
              value={this.props.filters.dateFrom}
              onChange={this.updateState}
            />
          </div>
          <div className="input-group dateTo">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupPrepend2">
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </div>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlSelect1"
              name="dateTo"
              value={this.props.filters.dateTo}
              onChange={this.updateState}
            />
          </div>
          <div className="input-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={this.props.filters.country}
              onChange={this.updateState}
              name="country"
            >
              <option value="">Todos los Paises </option>
              <option value="Argentina"> Argentina </option>
              <option value="Brasil"> Brasil </option>
              <option value="Chile"> Chile </option>
              <option value="Uruguay"> Uruguay </option>
            </select>
          </div>
          <div className="input-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={this.props.filters.size}
              name="size"
              onChange={this.updateState}
            >
              <option value="">Todos los Tamaños </option>
              <option value="Pequeño"> Hotel Pequeño </option>
              <option value="Mediano"> Hotel Mediano </option>
              <option value="Grande"> Hotel Grande </option>
            </select>
          </div>
          <div className="input-group">
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              value={this.props.filters.price}
              name="price"
              onChange={this.updateState}
            >
              <option value=""> Cualquier Precio </option>
              <option value="1"> $ </option>
              <option value="2"> $$ </option>
              <option value="3"> $$$ </option>
              <option value="4"> $$$$ </option>
            </select>
          </div>
          <div className="input-group">
            <button className="form-control resetFilters">
              Limpiar Filtros
            </button>
          </div>
        </form>
        {this.props.filters.dateFrom > this.props.filters.dateTo &&
        this.props.filters.dateFrom !== "" &&
        this.props.filters.dateTo !== "" ? (
          <div className="wrongMessage">
            <h1 className="display-4 wrongDates">¡Atención!</h1>
            <p className="lead p wrongDates">
              La fecha de salida debe ser posterior a la de entrada. Por favor,
              intente de nuevo.
            </p>
          </div>
        ) : (
          <div className="cards">
            {filteredInfo.length !== 0 ? (
              filteredInfo.map((data, index) => {
                return <Card key={index} {...data} />;
              })
            ) : (
              <div className="coincidence-msg">
                <h1 className="display-4">No hay coincidencias</h1>
                <p className="lead p">Por favor, intenta de nuevo</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Filters;
