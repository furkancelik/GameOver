"use client";
import { useEffect } from "react";
import ApolloProvider from "@/context/ApolloProvider";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { SuiWalletProvider } from "@razorlabs/wallet-kit";
import "../styles/globals.css";
import { ToastContainer, Bounce } from "react-toastify";

export default function Layout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined" && document) {
      const hour = new Date().getHours();
      if (hour >= 18 || hour < 6) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

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
