import React, { useEffect } from "react";
import { loadData } from "./restaurantsSlice";
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
} from "./RestaurantsStyle";
import { FaHamburger } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { GiDonerKebab } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";

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
							color: "var(--primary)",
							marginRight: "5",
						}}
					/>
					Burgery
				</FilterButton>
				<FilterButton>
					<FaPizzaSlice
						style={{
							color: "var(--primary)",
							marginRight: "5",
						}}
						size={20}
					/>
					Pizza
				</FilterButton>
				<FilterButton>
					<GiDonerKebab
						style={{
							color: "var(--primary)",
							marginRight: "5",
						}}
						size={20}
					/>
					Kebab
				</FilterButton>
			</Filters>
			<RestaurantsList>
				{restaurants.map(showRestaurantsItems)}
			</RestaurantsList>
		</RestaurantsSection>
	);
  
	function showRestaurantsItems(restaurantsItem) {
		const { address, name, img } = restaurantsItem;
      return (
        <RestaurantItem key={name}>
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
      );
    
	}

  function showBurgerItems(restaurantsItem) {
		const { address, name, img, category } = restaurantsItem;
    if (category === 'burger'){
      return (
        <RestaurantItem key={name}>
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
      );
    }
	}

  function showPizzaItems(restaurantsItem) {
		const { address, name, img, category } = restaurantsItem;
    if (category === 'pizza'){
      return (
        <RestaurantItem key={name}>
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
      );
    }
	}

  function showKebabItems(restaurantsItem) {
		const { address, name, img, category } = restaurantsItem;
    if (category === 'kebab'){
      return (
        <RestaurantItem key={name}>
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
      );
    }
	}

};
