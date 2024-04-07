import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdShoppingCart } from "react-icons/md";
import dessing from "../assets/images/dessing.jpg"


const Home = () => {
    const [articles, setArticles] = useState([]);

    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_GET)
            .then(response => {
                setArticles(response.data.data);
                console.log(response.data.data);
                
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, []);

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    const handleSignupClick = () => {
        navigate('/signup'); 
    };

    return (
        <div>
            <NavbarWrapper> 
                <h1>VIDE GRENIER </h1>
                <div>
                    <SearchBar type="text" placeholder="Rechercher..." />
                    <NavButton onClick={handleSignupClick}>Signup</NavButton>
                    <NavButton onClick={handleLoginClick}>Login</NavButton>
                    <NavButton onClick={() => navigate('/vends-tes-articles')}>Vends tes articles</NavButton>
                    <MdShoppingCart size={30} color="green" />
                </div>
            </NavbarWrapper>
            <Header>
                <HeaderContent>
                    <HeaderText>Êtes-vous prêts à organiser  <br /> vos placards?</HeaderText>
                    <HeaderButton onClick={() => navigate('/vends-tes-articles')}>Vends tes articles</HeaderButton>
                </HeaderContent>
            </Header>
        </div>
    );
};

const Header = styled.div`
    background-image: url(${dessing});
    background-size: cover;
    background-position: center;
    height: 400px;
    display: flex;
    
`;

const HeaderContent = styled.div`
    background-color: white;
    height : 25vh;
    padding: 20px;
    margin: 70px 0 0 80px;
    border-radius: 5px;
    color: black;
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


const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 1rem;
`;

const NavButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: transparent;
    border: 2px solid green;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;
    &:hover {
        background-color: green;
        color: white;
    }
`;

const SearchBar = styled.input`
    padding: 0.5rem 1rem;
    border: 2px solid green;
    border-radius: 5px;
    margin: 0 5px 0 39px;
`;

export default Home;
