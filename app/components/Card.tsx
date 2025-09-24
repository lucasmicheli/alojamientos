import Image from 'next/image';
import { Hotel } from '../lib/types';

export default function Card(props: Hotel) {
  return (
    <div className="card" style={{ width: "25em" }}>
      <Image
        className="card-img-top"
        src={props.photo}
        alt={props.name}
        width={400}
        height={300}
      />
      <div className="card-body hotel-card">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-text"> {props.description}</p>
        <div className="details">
          <div className="media">
            <i className="fa fa-map-marker mr-3"></i>
            <h5 className="mt-0">
              {props.city}, {props.country}
            </h5>
          </div>
          <div className="media">
            <div className="media mr-3">
              <i className="fa fa-bed mr-3"></i>
              <h5 className="mt-0">{props.rooms} Habitaciones</h5>
            </div>
            <div className="price">
              {Array.from({ length: props.price }).map((item, index) => (
                <i className="fa fa-dollar-sign" key={index}></i>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <a href="/#" className="btn btn-primary">
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
}
