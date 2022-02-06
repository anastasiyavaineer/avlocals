import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "#edededs",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#7B1F37",
  primary: "#7B1F37",
  highlight: "wheat",
  footer: "wheat",
  mobile: "whitesmoke",

  card: "whitesmoke",
  badgebg: "wheat",
  badgetext: "#363537",

  shadow: "rgba(0, 0, 0, 0.14)",
};

export const darkTheme = {
  body: "#151515",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#222",
  dimtext: "rgba(255, 255, 255, 0.75)",

  primary: "#301B3F",
  highlight: "gold",
  textglow: "#fff",
  footer: "#7B1F37",
  mobile: "#222",
  card: "#222",

  badgebg: "wheat",
  badgetext: "#363537",

  shadow: "rgba(255, 255, 255, 0.1)",
};

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
box-sizing: border-box
;
}
  body {
    /* background: ${({ theme }) => theme.body}; */
    /* color: ${({ theme }) => theme.text}; */
    /* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */

    -webkit-tap-highlight-color: transparent;


    overflow-x: hidden;
  }




  html {

        --red: #7B1F37;
        --maroon: #52013A;
        --grey: #3A3A3A;
        --gray: var(--grey);
        --black: #393939;
        --lightGrey: #e1e1e1;
        --lightGray: var(---lightGrey);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    }
   



  
`;
