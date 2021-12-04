import styled from 'styled-components';

export const StyledGroup = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 30px;
`;

export const StyledTitle = styled.h1`
   font-size: 26px;
   margin-bottom: 22px;
   cursor: pointer;
   transition: transform 0.2s;
   &:hover {
      transform: scale(1.01);
   }
`;

export const StyledItems = styled.div`
   display: flex;
   justify-content: space-between;
`;
