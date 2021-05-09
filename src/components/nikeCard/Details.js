import React from 'react';
import styled from 'styled-components'

const DetailsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 6px 0 6px;
    line-height: 1.4;
`;

const MediumText = styled.span`
    font-size: 14px;
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

const Details = (props) => {
    return (
        <DetailsContainer>
            <SmallText>NIKE AIR</SmallText>
            <SpacedHorizontalContainer>
                <MediumText>JORDAN CLASSIC LIMITED</MediumText>
                <MediumText>CLP 173850.00</MediumText>
            </SpacedHorizontalContainer>
        </DetailsContainer>
    );
}

export default Details;
