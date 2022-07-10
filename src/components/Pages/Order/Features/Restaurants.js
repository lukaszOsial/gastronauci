import React, { useEffect } from 'react';
import { loadData } from './restaurantsSlice';
import { Filters, FiltersTitle, FiltersSubtitle, FilterButton, RestaurantsSection } from './RestaurantsStyle';
import { FaHamburger } from 'react-icons/fa';
import { FaPizzaSlice } from 'react-icons/fa';
import { GiDonerKebab } from 'react-icons/gi';

export const Restaurants = ({ restaurants, dispatch }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  return (
    <RestaurantsSection>
      <Filters>
        <FiltersTitle>Filtry</FiltersTitle>
        <FiltersSubtitle>Typ kuchni</FiltersSubtitle>
        <FilterButton>
          <FaHamburger 
            style={{
              color: 'var(--primary)',
              marginRight: '5',
            }}
          />
          Burgery
          </FilterButton>
        <FilterButton>
          <FaPizzaSlice
            style={{
              color: 'var(--primary)',
              marginRight: '5',
            }} 
            size={20}
          />
          Pizza
        </FilterButton>
        <FilterButton>
          <GiDonerKebab 
            style={{
              color: 'var(--primary)',
              marginRight: '5',
            }}
            size={20}
          />
          Kebab
        </FilterButton>
      </Filters>
      <ul>{restaurants.map(showRestaurantsItem)}</ul>
    </RestaurantsSection>
  );

  function showRestaurantsItem(restaurantsItem) {
    const { address, name, img } = restaurantsItem;
    return(
      <li key={name}>
        <h3>{name}</h3>
        <h4>{address}</h4>
        <img src={img} alt={''} />
        <button>
          Zobacz menu
        </button>
      </li>
    );

}

};
