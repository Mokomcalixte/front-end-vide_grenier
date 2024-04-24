import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import AddToCartButton from "../addToCart";

const Items = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3005/items')
            .then(response => {
                const updatedArticles = response.data.data.map(article => ({
                    ...article,
                    image: article.image.replace(/\\/g, '/')
                }));
                setArticles(updatedArticles);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }, []);

    return (
        <ArticleListContainer>
            {articles.map((article, index) => (
                <ArticleList key={index}>
                    <div>
                        <ArticleImage src={`http://localhost:3005/${article.image}`} alt="Article" />
                    </div>
                    <div>{article ? article.name : "No name"}</div>
                    <div>{article ? article.description : "No description"}</div>
                    <div>{article ? article.price : "No price"}</div>
                    <AddToCartButton />
                </ArticleList>
            ))}
        </ArticleListContainer>
    );
};

const ArticleList = styled.div`
    border-color: red;
`;

const ArticleListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px; /* Ajouter de l'espace autour de la liste */

    gap: 20px; /* Espace entre chaque élément */
`;

const ArticleImage = styled.img`
    height: 400px; /* Définir la hauteur de l'image */
    width: 300px; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Ajouter une ombre autour de l'image */

`;
export default Items;
