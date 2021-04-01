import React from "react";

export default function Card(props) {
  return (
    <div className="card" style={{ width: "25em" }} key={props.slug}>
      <img className="card-img-top" src={props.photo} alt={props.name} />
      <div className="card-body hotel-card">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text"> {props.description}</p>
        <div className="details">
          <div className="media">
            <i className="fas fa-map-marker mr-3"></i>
            <h5 className="mt-0">
              {props.city}, {props.country}
            </h5>
          </div>
          <div className="media">
            <div className="media mr-3">
              <i className="fas fa-bed mr-3"></i>
              <h5 className="mt-0">{props.rooms} Habitaciones</h5>
            </div>
            <div className="price">
              {Array.from({ length: props.price }).map((item, index) => (
                <i className="fas fa-dollar-sign" key={index}></i>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <a href="/FunctionNotWorking" className="btn btn-primary">
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}
