import {  useState } from "react";
import styled from 'styled-components';

const ArticleForm = ({ handleSubmit }) => {
    const [formArticle, setFormArticle] = useState({
        image: null,
        name: '',
        description: '',
        price: '',
        
    });


    const handleChanges = (e) => {
        if (e.target.name === "image") {
            setFormArticle({
                ...formArticle,
                [e.target.name]: e.target.files[0]
            });
        } else {
            setFormArticle({
                ...formArticle,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formArticle);
        setFormArticle({
            image: null,
            name: '',
            description: '',
            price: '', 
        });
    };

    return (
        <FormContainer>
            <FormTitle>Ajouter un Article</FormTitle>
            <StyledForm onSubmit={handleFormSubmit}>
                <InputField
                    type="file"
                    onChange={handleChanges}
                    name="image"
                    accept="image/*"
                />
                <InputField
                    type="text"
                    value={formArticle.name}
                    onChange={handleChanges}
                    name="name"
                    placeholder="article name"
                />
                <InputField
                    type="text"
                    value={formArticle.description}
                    onChange={handleChanges}
                    name="description"
                    placeholder="description de l article"
                />
                <InputField
                    type="text"
                    value={formArticle.price}
                    onChange={handleChanges}
                    name="price"
                    placeholder="Entrer le prix de l'article"
                />
               
                <SubmitButton type="submit">Ajouter un article</SubmitButton>
            </StyledForm>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormTitle = styled.h1`
    margin-bottom: 20px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 300px;
`;

const InputField = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const SubmitButton = styled.button`
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: darkgreen;
    }
`;
export default ArticleForm;