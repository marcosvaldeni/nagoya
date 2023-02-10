import { MagnifyingGlass } from "phosphor-react";
import { HeaderContainer, SearchButton, SearchForm, SearchInput } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Nagoia</h1>

      <SearchForm action="">
        <SearchInput type="text" placeholder="Search" />
        <SearchButton type="submit">
          <MagnifyingGlass size={24} />
          <span>Search</span>
        </SearchButton>
      </SearchForm>

      <nav>
        <a href="">Sing in</a>
      </nav>
    </HeaderContainer>
  )
}