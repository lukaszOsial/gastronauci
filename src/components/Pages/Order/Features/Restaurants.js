import React, { useState } from "react";
import { restaurantsData } from "../../../../data";
import {
	Filters,
	FiltersTitle,
	FiltersSubtitle,
	FilterButton,
	RestaurantsSection,
	RestaurantsList,
	ItemImg,
	ItemName,
	RestaurantItem,
	RestaurantDescription,
	ItemAddress,
  ClearItem
} from "./RestaurantsStyle";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { GiDonerKebab } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";

export const Restaurants = () => {
  
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const filterRestaurants=(categoryItem)=>{
    const result = restaurantsData.filter((currentData)=>{
      return currentData.category === categoryItem;
    });
    setRestaurants(result);
  }
	return (
		<RestaurantsSection>
			<Filters>
				<FiltersTitle>Filtry</FiltersTitle>
				<FiltersSubtitle>
          Typ kuchni
          <ClearItem onClick={() => setRestaurants(restaurantsData)}>
            <TiDeleteOutline 
              style={{
                color: "var(--primary)",
                marginLeft: "5",
              }}
              size={25}
            />
            <p>Wyczyść</p>
          </ClearItem>
        </FiltersSubtitle>
				<FilterButton 
          onClick={() => {filterRestaurants('burger')}}
        >
					<FaHamburger
						style={{
							color: "var(--primary)",
							marginRight: "5",
              position: "relative",
              top: "3",
						}}
            size={20}
					/>
					Burgery
				</FilterButton>
				<FilterButton onClick={() => filterRestaurants('pizza')}>
					<FaPizzaSlice
						style={{
							color: "var(--primary)",
							marginRight: "5",
              position: "relative",
              top: "3",
						}}
						size={20}
					/>
					Pizza
				</FilterButton>
				<FilterButton onClick={() => filterRestaurants('kebab')}>
					<GiDonerKebab
						style={{
							color: "var(--primary)",
							marginRight: "5",
              position: "relative",
              top: "3",
						}}
						size={20}
					/>
					Kebab
				</FilterButton>
			</Filters>
			<RestaurantsList>
      {restaurants.map((restaurantsItem)=>{
          const { id, address, name, img } = restaurantsItem;
          return(
          <RestaurantItem key={id}>
          <ItemImg src={img} alt={""} />
          <RestaurantDescription>
            <ItemName>{name}</ItemName>
            <ItemAddress>
              <HiLocationMarker
                style={{
                  color: "var(--primary)",
                  marginRight: "5",
                }}
                size={20}
              />
              {address}
            </ItemAddress>
          </RestaurantDescription>
        </RestaurantItem>
          )
        })}
      </RestaurantsList>
		</RestaurantsSection>
	);

};
