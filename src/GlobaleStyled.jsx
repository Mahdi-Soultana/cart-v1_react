import { createGlobalStyle } from "styled-components";
export const GlobaleStyles = createGlobalStyle`
             *,*::after,*::before{
                 box-sizing: border-box;
                 margin: 0;
                 padding: 0;
             }
             html{
                 font-size:62.5%;
             }

             body{
                 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                 background-color: #efefef;
                 -webkit-font-smoothing: antialiased;
                 -moz-osx-font-smoothing: grayscale;
             }
             img{
                  width:100%;
                  height:100%;
                  display:inline-block;
                  vertical-align: center;
                  object-fit: cover;
             }
             ul {
                  list-style: none;
             }
             a {
                  text-decoration: none;
                  color: inherit;
             }
             .container{
                  width:100%;
                  max-width:1100px;
                  margin:0 auto;
             }
             button{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width:50px;
                  height:30px;
                  border-radius: 10em;
                  background-color: white;
                  border: 2px solid  #a43aeb;
                  font-size: 1.3rem;
                  font-weight:bold;
                  cursor: pointer;
                    &:hover{

                         background-color: #a43aeb;
                         border-radius: 10em;
                         border: 2px solid white;
                         color: white;
                    }
               }
      `;
