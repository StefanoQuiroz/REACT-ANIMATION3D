import React from 'react';
import styled from 'styled-components'
import logo from '../../images/nike-logo.png';
const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 6px 0 6px;
    line-height: 1.4;
`;

const MediumText = styled.span`
    font-size: 11.5px;
    color: #fff;
    font-weight: 800;
    text-transform: uppercase;
`;

const SmallText = styled.span`
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BuyButton = styled.button`
    padding: 10px 16px;
    background-color: #fbbe01;
    color: #000;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    border: 3px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 290ms ease-in-out;
    border-radius: 8px;

    &:hover{
        background-color: transparent;
        color: #fff;
        border: 3px solid #fbbe01;
    }
`;

const Logo = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    img{
        width: auto;height: 13px;
    }

`;
const Details = (props) => {
    return (
        <DetailsContainer>
            <SmallText>NIKE AIR</SmallText>
            <SpacedHorizontalContainer>
                <MediumText>JORDAN CLASSIC LIMITED</MediumText>
                <MediumText>CLP 173850.00</MediumText>
                <MediumText>PEN 947.42</MediumText>
                <BuyButton>BUY</BuyButton>
            </SpacedHorizontalContainer>
            <Logo>
                <img src={logo} alt="logotipo" />
            </Logo>
        </DetailsContainer>
    );
}

export default Details;
