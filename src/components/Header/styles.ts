import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  padding: 1.6rem;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08);
  border: none;
  border-radius: 30px;
`;

export const SearchButton = styled.button`
  background: ${props => props.theme["primary-500"]};
  box-shadow: 8px 4px 50px 2px rgba(9, 129, 74, 0.2);
  border-radius: 50%;
  border: none;
  padding: 1rem;
  color: ${props => props.theme.white};;

  > span {
    display: none;
  }
`;

