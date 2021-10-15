import axios from 'axios';

export const getAllSectionItems = () => {
   return axios.get('https://web-project-itbootcamp.herokuapp.com/sections');
};

export const getAllShopItems = () => {
   return axios.get('https://web-project-itbootcamp.herokuapp.com/shopItems');
};
