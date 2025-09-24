import Header from './components/Header';
import FiltersComponent from './components/Filters';
import HotelList from './components/HotelList';
import hotelsData from './lib/data';
import { Filters, Hotel } from './lib/types';

export default function Home({
  searchParams,
}: {
  searchParams: Filters;
}) {
  const filters: Filters = {
    dateFrom: searchParams.dateFrom || '',
    dateTo: searchParams.dateTo || '',
    country: searchParams.country || '',
    price: searchParams.price || '',
    size: searchParams.size || '',
  };

  const filterHotels = (hotel: Hotel) => {
    const { dateFrom, dateTo, country, price, size } = filters;

    // Size filter
    const sizePass =
      !size ||
      (size === 'Pequeño' && hotel.rooms <= 10) ||
      (size === 'Mediano' && hotel.rooms > 10 && hotel.rooms <= 20) ||
      (size === 'Grande' && hotel.rooms > 20);

    // Price filter
    const pricePass = !price || hotel.price === parseInt(price, 10);

    // Country filter
    const countryPass =
      !country ||
      hotel.country.toLowerCase().includes(country.toLowerCase());

    // Date filter
    const fromTime = dateFrom ? new Date(dateFrom).getTime() : 0;
    const toTime = dateTo ? new Date(dateTo).getTime() : 0;
    const datePass =
      !fromTime ||
      !toTime ||
      (hotel.availabilityFrom >= fromTime && hotel.availabilityTo <= toTime);

    return sizePass && pricePass && countryPass && datePass;
  };

  const filteredHotels = hotelsData.filter(filterHotels);

  return (
    <main>
      <Header filters={filters} />
      <FiltersComponent filters={filters} />
      <HotelList filteredHotels={filteredHotels} filters={filters} />
    </main>
  );
}
