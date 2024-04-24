import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ArticleForm from '../components/articleForm';

const AddArticlePage = () => {
    const [isAdding, setIsAdding] = useState(false);
    const navigate = useNavigate(); 

    const handleAddArticle = async (formArticle) => {
        setIsAdding(true);
        try {
            const formData = new FormData();
            formData.append('image', formArticle.image);
            formData.append('name', formArticle.name);
            formData.append('description', formArticle.description);
            formData.append('price', formArticle.price);
            
            const response = await axios.post('http://localhost:3005/items', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Assurez-vous de définir le type de contenu
                },
            });
            console.log('Article added:', response.data);
            alert("L'article a été ajouté avec succès.");
            navigate('/home');
        } catch (error) {
            console.error('Error adding article:', error);
            alert("Une erreur s'est produite lors de l'ajout de l'article. Veuillez réessayer.");
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <div>
            <ArticleForm handleSubmit={handleAddArticle} />
            {isAdding && <p>Ajout en cours...</p>}
        </div>
    );
};

export default AddArticlePage;
