import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { MovementEvm } from "@thirdweb-dev/chains";
import "../styles/globals.css";
import NavBar from "../components/NavBar";




function Gmover({Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider activeChain={MovementEvm}>
            <ChakraProvider>
                <NavBar />
                <Component {...pageProps} />
            </ChakraProvider>
        </ThirdwebProvider>
    );
}

export default Gmover;