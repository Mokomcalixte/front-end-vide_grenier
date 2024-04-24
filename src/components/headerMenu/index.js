import React from "react";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    const navigate = useNavigate(); 
 
    const handleLoginClick = () => {
        navigate('/login'); 
    };

    const handleSignupClick = () => {
        navigate('/signup'); 
    };
    return(
       <NavbarWrapper>
                <h1>VIDE GRENIER </h1>
                <div>
                    <SearchBar type="text" placeholder="Rechercher..." />
                    <NavButton onClick={handleSignupClick}>Signup</NavButton>
                    <NavButton onClick={handleLoginClick}>Login</NavButton>
                    <NavButton onClick={() => navigate('/ajouter-articles')}>Ajouter les articles</NavButton>
                    <MdShoppingCart size={30} color="green" />
                </div>
       </NavbarWrapper> 
    );
};
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
const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 1rem;
`;
export default Header;