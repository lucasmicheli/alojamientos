import { Filters } from '../lib/types';

export default function Header({ filters }: { filters: Filters }) {
  // The original code had a bug where it would crash if dateFrom or dateTo were invalid dates.
  // I will add a check to make sure the date is valid before calling toISOString.
  const dateFrom = filters.dateFrom && !isNaN(new Date(filters.dateFrom).getTime())
    ? `Búsqueda desde el ${new Date(filters.dateFrom).toISOString().slice(0, 10)} `
    : "";
  const dateTo = filters.dateTo && !isNaN(new Date(filters.dateTo).getTime())
    ? `hasta el ${new Date(filters.dateTo).toISOString().slice(0, 10)} `
    : "";

  return (
    <div className="jumbotron">
      <div className="header">
        <i className="fa fa-globe-americas" style={{fontSize: "3em"}}></i>
        <h1 className="title">Reserva de Alojamientos</h1>
      </div>
      <p className="lead">
        {dateFrom}
        {dateTo}
        {filters.country ? `en ${filters.country}, ` : ""}
        {filters.size ? `de ${filters.size} Tamaño, ` : ""}
        {filters.price
          ? `de ${Array.from({ length: parseInt(filters.price, 10) })
              .map(() => "$")
              .join("")}`
          : ""}
      </p>
    </div>
  );
}
