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

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-item: center;
    justify-conten: flex-end;
    padding: 1em 15px;
`;

const BottomContainer = styled.div`
    display:flex;
    flex: 0.8;
    padding: 0 1em 
`;


const Card = (props) => {
    return (
        <CardContainer>
           <TopContainer>
               Top
                <CircleWrapper>
                    <Circle/>
                </CircleWrapper>
           </TopContainer>
           <BottomContainer>
               Bottom
           </BottomContainer>
        </CardContainer>        
    );
}

export default Card;
