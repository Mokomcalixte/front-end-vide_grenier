//import axios from 'axios';
import styled, { keyframes } from 'styled-components';
//import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header  from '../components/headerMenu';
import Items from '../components/fechtArticle';
import dessing from "../assets/images/dessing.jpg"

const Home = () => {
    const navigate = useNavigate(); 
   
    return (
        <div>
            <Header/>
            <HeaderFront>
                <HeaderContent>
                    <HeaderText>Êtes-vous prêts à organiser  <br /> vos placards?</HeaderText>
                    <HeaderButton onClick={() => navigate('/vends-tes-articles')}>Vends tes articles</HeaderButton>
                </HeaderContent>
            </HeaderFront>
            <Items/>
        </div>
    );
};

const slideInAndOut = keyframes`
    0%, 100% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(0);
    }
`;

const HeaderFront = styled.div`
    background-image: url(${dessing});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderContent = styled.div`
    background-color: white;
    height : 25vh;
    padding: 20px;
    border-radius: 5px;
    color: black;
    animation: ${slideInAndOut} 4s ease-out forwards;
`;

const HeaderText = styled.h2`
    margin-bottom: 10px;
`;

const HeaderButton = styled.a`
    padding: 8px;
    margin-top: 20px;
    background-color: green;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
        background-color: green;
        color: white;
    }
`;

export default Home;
