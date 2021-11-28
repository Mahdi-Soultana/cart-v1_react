import styled from "styled-components";
export const CartItemStyled = styled.article`
  display: grid;
  grid-template-columns: 100px 1fr 60px;
  grid-auto-rows: 100px;
  column-gap: 4rem;
  border-bottom: 1px #cccccc solid;
  padding: 2rem 0;
  .img-container {
    background: #333333;
    box-shadow: -3px 4px 4px #757575;
  }
  .item,
  .item {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-flow: column wrap;
    &-control {
      align-items: center;
      &-amount {
        font-size: 2rem;
        font-weight: 300;
      }
    }
    &-desc {
      h4 {
        font-size: 3rem;
        font-weight: 300;
      }
      h5 {
        font-size: 2rem;
        margin: 0 1rem 1rem;
      }
      button {
        width: 70px;
        background-color: #a43aeb;
        border: 3px solid #a43aeb;
        color: white;
        &:hover {
          background-color: white;
          border-radius: 10em;
          border: 3px solid #a43aeb;
          color: #333;
        }
      }
    }
  }
`;
