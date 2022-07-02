import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const PartnershipFirstSection = styled.div`
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;
    &::before{
        content: "";
        background-image: url("/images/partnership2.png");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.4;
    }
`;

export const Title = styled.h1`
    position: relative;
    font-size: 55px;
    margin-bottom: 25px;
    
`;

export const Description = styled.p`
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: black;
    margin-bottom: 50px;
`;

export const LinkItem = styled(NavLink)`
    position: relative;
    text-decoration: none;
    font-weight: 500;
    border-radius: 5px;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    color: var(--white);
    padding: 15px 60px;
    &:hover{
        background-color: transparent;
        color: var(--primary);
    }
`;

export const PartnershipSecondSection = styled.div`
    display: flex;
    max-width: 1300px;
    text-align: center;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const Subtitle = styled.h2`
    font-size: 35px;
    margin-top: 50px;
    text-transform: uppercase;
    text-align: center;
`;

export const SectionItem = styled.div`
    width: calc(1300px / 3);
    padding: 25px;
`;

export const ItemSubtitle = styled.h3`
    padding: 10px 0;
    font-size: 22px;
    text-transform: uppercase`;
    
