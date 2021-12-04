import axios from 'axios';

export const getAllSectionItems = () => {
   return axios.get('https://techstore-project.herokuapp.com/sections');
};

export const getAllShopItems = () => {
   return axios.get('https://techstore-project.herokuapp.com/shopItems');
};

export const getSectionShopItems = nr => {
   return axios.get(`https://techstore-project.herokuapp.com/shopItems/${nr}`);
};

export const addSectionShopItem = (nr, item) => {
   return axios.patch(`https://techstore-project.herokuapp.com/shopItems/${nr}`, item);
};
