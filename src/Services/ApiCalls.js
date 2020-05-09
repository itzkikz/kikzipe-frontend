import { API } from '../Config';


export const getCategories = () => fetch(`${API}/categories`, { method: 'GET' }).then((response) => response.json()).catch((err) => console.log(err));

export const getRecipe = (categoryId) => fetch(`${API}/recipe/${categoryId}`, { method: 'GET' }).then((response) => response.json()).catch((err) => console.log(err));
