"use client";

import React from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { Filters as FiltersType } from "../lib/types";

interface FiltersProps {
  filters: FiltersType;
}

export default function FiltersComponent({ filters }: FiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    router.push(`?${params.toString()}`);
  };

  const resetFilters = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <form className="filters" onSubmit={resetFilters}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-sign-in"></i>
          </span>
        </div>
        <input
          type="date"
          className="form-control"
          name="dateFrom"
          value={filters.dateFrom}
          onChange={handleFilterChange}
        />
      </div>
      <div className="input-group dateTo">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-sign-out"></i>
          </span>
        </div>
        <input
          type="date"
          className="form-control"
          name="dateTo"
          value={filters.dateTo}
          onChange={handleFilterChange}
        />
      </div>
      <div className="input-group">
        <select
          className="form-control"
          value={filters.country}
          onChange={handleFilterChange}
          name="country"
        >
          <option value="">Todos los Paises</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
      <div className="input-group">
        <select
          className="form-control"
          value={filters.size}
          name="size"
          onChange={handleFilterChange}
        >
          <option value="">Todos los Tamaños</option>
          <option value="Pequeño">Hotel Pequeño</option>
          <option value="Mediano">Hotel Mediano</option>
          <option value="Grande">Hotel Grande</option>
        </select>
      </div>
      <div className="input-group">
        <select
          className="form-control"
          value={filters.price}
          name="price"
          onChange={handleFilterChange}
        >
          <option value="">Cualquier Precio</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <div className="input-group">
        <button type="submit" className="form-control resetFilters">
          Limpiar Filtros
        </button>
      </div>
    </form>
  );
}
