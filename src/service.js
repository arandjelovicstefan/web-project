import axios from 'axios';

export const getAllSectionItems = () => {
   return axios.get('http://localhost:3006/sections');
};

export const getAllShopItems = () => {
   return axios.get('http://localhost:3006/shopItems');
};

export const getSectionShopItems = nr => {
   return axios.get(`http://localhost:3006/shopItems/${nr}`);
};

export const addSectionShopItem = (nr, item) => {
   return axios.patch(`http://localhost:3006/shopItems/${nr}`, item);
};
