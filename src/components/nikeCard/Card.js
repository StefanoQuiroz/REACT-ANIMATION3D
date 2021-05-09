import React from 'react';
import styled from 'styled-components';
import nikeAirborne from '../../images/air-jordan-transparent.png';
import {motion} from 'framer-motion';
import Details from './Details';


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
    justify-content: flex-end;
    padding: 1em 15px;
`;

const BottomContainer = styled.div`
    display:flex;
    flex: 0.8;
    padding: 0 1em 
`;

const Text = styled.h1`
    color: #fff;
    text-transform: uppercase;
    margin: 0;
    z-index: 10;
    font-size: 76px;
    font weight: 900;
`;

const ItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

//Motion div =>(motion)
const Item = styled(motion.div)`
    width: auto;
    height: 190px;
    z-index: 99;
    user-select: none;
    margin-top: 2em;
    margin-right: 3.5em;
    img {
        width: auto;
        height: 100%;
        user-select: none;
    }
    
`;

const Card = (props) => {
    return (
        <CardContainer>
           <TopContainer>
                <CircleWrapper>
                    <Circle/>
                </CircleWrapper>
                <ItemWrapper>
                    <Item style={{rotate : "-25deg"}}>
                        <img src={nikeAirborne} alt="tenis"/> 
                    </Item>
                </ItemWrapper>
                <Text>Nike AIR</Text>
           </TopContainer>
           <BottomContainer>
                <Details/>               
           </BottomContainer>
        </CardContainer>        
    );
}

export default Card;
