import axios from 'axios';

export const getAllSectionItems = () => {
   return axios.get('http://localhost:3006/sections');
};

export const getAllShopItems = () => {
   return axios.get('http://localhost:3006/shopItems');
};
