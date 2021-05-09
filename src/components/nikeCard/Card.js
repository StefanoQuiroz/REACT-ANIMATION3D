import React from 'react';
import styled from 'styled-components';
const CardContainer = styled.div`
    width: 285px;
    height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    box-shadow: 0 2px 10px 1px rgba(31,31,31,0.2);
    background-color: #1d1f21;
    color: #fff;
    position: relative;
    //cursor:grab;
`;
//Container - circle
 const CircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    //para el borde superior derecho
    border-top-right-radius: 25px;
`;

const Circle = styled.div`
    position: absolute;
    //Para hacer que el circulo sea mas grande que el card y además salga del marco derecho
    width: 350px;
    height: 350px;
    top: -4.2em;
    right: -10em;
    //z-index ? no es necesario, por definción lo trae adelante
    z-index: 5;
    background-color: #fbbe01;
    //circulo 50%
    border-radius:50%
`;

const NikeCard = (props) => {
    return (
        <CardContainer>
            <CircleWrapper>
                <Circle/>
            </CircleWrapper>
        </CardContainer>        
    );
}

export default NikeCard;
