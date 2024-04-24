import React from 'react';
import styled from 'styled-components';

const AddToCartButton = ({ article }) => {
  

  return (
    <Button>Ajouter au panier</Button>
  );
};

const Button = styled.button`
  padding: 0.5rem 10px;
  background-color: grey;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  color: ${props=>props.theme.primaryColor};
`;

export default AddToCartButton;
