import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const TitleContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    padding: 20px;
`;

export const DetailsContainer = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`;

export const Details = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.span`

    color: black;
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const SearchInput = styled.input`
::placeholder {
    padding: 3px;
  }
    width: 50%;
    height: 25%;
    border: 1px solid #ccc;
    background-color: transparent;
    color: black;
    font-family: 'Poppins', sans-serif;
    border-radius: 5px;
    border-color: #E0E0E0;
`;

export const Icon = styled.img`
    width: 30px;
`;
