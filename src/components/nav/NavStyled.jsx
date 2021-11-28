import styled from "styled-components";
export const NavStyled = styled.nav`
  background: #a43aeb;
  padding: 1rem;
  .nav-center {
    text-transform: capitalize;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    > * {
      position: relative;
      span {
        position: absolute;
        top: -10px;
        left: -50px;
        width: 40px;
        height: 40px;
        background-color: #ffffff;
        color: #a43aeb;
        text-shadow: 0px 0px 1px #fffefe;
        font-size: 2rem;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        z-index: 2;
      }
    }
  }
`;
