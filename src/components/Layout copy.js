"use client";
import { useEffect, useState } from "react";
import WOW from "wowjs";
import ApolloProvider from "@/context/ApolloProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { SuiWalletProvider } from "@razorlabs/wallet-kit";
import { ToastContainer, Bounce } from "react-toastify";
import "../styles/globals.css";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const hour = new Date().getHours();
      if (hour >= 18 || hour < 6) {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ApolloProvider>
      <SuiWalletProvider>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          transition={Bounce}
        />
        <Header />
        <HeroSection />
        {children}
        <Footer />
      </SuiWalletProvider>
    </ApolloProvider>
  );
}
