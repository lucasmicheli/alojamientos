import Card from './Card';
import { Hotel, Filters } from '../lib/types';

interface HotelListProps {
  filteredHotels: Hotel[];
  filters: Filters;
}

export default function HotelList({ filteredHotels, filters }: HotelListProps) {
  const isDateError =
    filters.dateFrom &&
    filters.dateTo &&
    new Date(filters.dateFrom).getTime() > new Date(filters.dateTo).getTime();

  if (isDateError) {
    return (
      <div className="wrongMessage">
        <h1 className="display-4 wrongDates">¡Atención!</h1>
        <p className="lead p wrongDates">
          La fecha de salida debe ser posterior a la de entrada. Por favor,
          intente de nuevo.
        </p>
      </div>
    );
  }

  return (
    <div className="cards">
      {filteredHotels.length > 0 ? (
        filteredHotels.map((hotel) => (
          <Card key={hotel.slug} {...hotel} />
        ))
      ) : (
        <div className="coincidence-msg">
          <h1 className="display-4">No hay coincidencias</h1>
          <p className="lead p">Por favor, intenta de nuevo</p>
        </div>
      )}
    </div>
  );
}
