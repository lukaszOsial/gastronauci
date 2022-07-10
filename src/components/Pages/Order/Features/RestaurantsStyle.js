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