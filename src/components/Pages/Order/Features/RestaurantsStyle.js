import styled from "@emotion/styled";

export const RestaurantsSection = styled.div`
    max-width: 1300px;
    margin: 50px auto 0;
    display: flex;
`;

export const Filters = styled.div`
    width: 25%;
    max-width: 300px;
    border: 2px solid var(--primary);
    border-radius: 5px;
    height: 100%;
    margin-right: 50px;
`;

export const FiltersTitle = styled.h4`
    font-size: 25px;
    font-weight: 400;
    color: var(--white);
    background-color: var(--primary);
    padding: 0 10px;
`;

export const FiltersSubtitle = styled.h5`
    font-size: 20px;
    font-weight: 400;
    color: var(--gray-dark);
    border-bottom: 2px solid var(--primary);
    margin: 0 10px;
`;

export const FilterButton = styled.button`
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
    color: var(--gray-dark);
    border: 1px solid var(--gray);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px;
    background: none;
    &:hover{
        background-color: var(--gray-light);
    }
`;

export const RestaurantsList = styled.ul`
    width: 100%;
    
`;

export const RestaurantItem = styled.li`
    display: flex;
    border: 1px solid var(--gray-light);
    margin-bottom: 20px;
    border-radius: 5px;
`;

export const ItemImg = styled.img`
    max-width: 180px;
    max-height: 180px;
    padding: 10px;
    border-radius: 15px;
`;

export const RestaurantDescription = styled.div`
    
`;

export const ItemName = styled.h3`
    font-size: 30px;
    font-weight: 400;
    color: var(--black);
    padding: 0 10px;
`;

export const ItemAddress = styled.p`
    font-size: 20px;
    color: var(--black);
    padding: 0 10px;
`;

