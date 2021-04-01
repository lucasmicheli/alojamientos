import React from "react";
import "../style/style.css";

export default function Header(props) {
  return (
    <div className="jumbotron">
      <div className="header">
        <i className="fas fa-globe-americas"></i>
        <h1 className="title">Reserva de Alojamientos</h1>
      </div>
      <p className="lead">
        {" "}
        {props.filters.dateFrom
          ? `Búsqueda desde el ${new Date(props.filters.dateFrom)
              .toISOString()
              .slice(0, 10)} `
          : ""}
        {props.filters.dateTo
          ? `hasta el ${new Date(props.filters.dateTo)
              .toISOString()
              .slice(0, 10)} `
          : ""}
        {props.filters.country ? `en ${props.filters.country}, ` : ""}
        {props.filters.size ? `de ${props.filters.size} Tamaño, ` : ""}
        {props.filters.price
          ? `de ${Array.from({ length: props.filters.price })
              .map(() => "$")
              .join("")}`
          : ""}
      </p>
    </div>
  );
}
