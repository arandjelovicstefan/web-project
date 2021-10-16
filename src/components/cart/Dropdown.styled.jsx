import styled from 'styled-components';

export const StyledButton = styled.button`
   margin-top: auto;
   width: auto;
   height: 50px;
   line-height: 50px;
   font-size: 15px;
   background-color: black;
   color: white;
   border: none;
   cursor: pointer;
   display: flex;
   justify-content: center;

   &:hover {
      background-color: white;
      color: black;
      border-top: 1px solid black;
   }
`;

export const StyledEmptyCart = styled.div`
   margin: 50px auto;
   font-size: 20px;
`;
export const StyledDropdown = styled.div`
   position: absolute;
   right: 20px;
   top: 80px;
   width: 250px;
   height: 350px;
   display: flex;
   flex-direction: column;
   border: 2px solid black;
   background-color: white;
   z-index: 99;
`;
export const StyledCartItems = styled.div`
   height: 250px;
   display: flex;
   flex-direction: column;
   overflow: scroll;
`;
