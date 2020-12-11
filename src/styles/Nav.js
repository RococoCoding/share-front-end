import styled from "styled-components";

const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1% 3%;
  background-color: var(--darkest);
  color: var(--light);
  nav {
    width: 25%;
    padding-top: 0.3%;
    a {
      color: var(--light);
      font-size: 1.5rem;
      padding: 0 4%;
      border-left: 1px solid var(--light);
    }
    a:hover {
      color: var(--whitish);
    }
    a:nth-child(1) {
      border-left: none;
    }
  }
  .logo {
    font-size: 2rem;
    letter-spacing: 0.4rem;
  }
`

export default StyledNav;
