import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { ThemeProvider } from "next-themes";

import { darkTheme, lightTheme, GlobalStyles } from "../themeConfig";
import MobileHeader from "./MobileHeader";

export default function Page({ children }) {
  // const darkmode = useDarkMode(false);
  // const theme = darkmode.value ? darkTheme : lightTheme;

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <ThemeProvider attribute="class">
        <GlobalStyles />
        {/* <MobileHeader /> */}
        <Header />
        <main className="min-h-screen pt-safe-top mt-14 font-open">
          {children}
        </main>
        <Footer />
        <MobileNav />
      </ThemeProvider>
    </>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
