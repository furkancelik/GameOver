
import { Button, Container, Flex, Heading, Link, ButtonGroup } from "@chakra-ui/react";
import { ConnectWallet, } from "@thirdweb-dev/react";
import { Image } from '@chakra-ui/react'

export default function NavBar() {
    return (
        <Container maxW={"1200px"} py={4}>

            <Flex direction={"row"} justifyContent={"space-between"}>
            <Image boxSize={70} src='https://i.hizliresim.com/5q5goqw.png' alt='Gmover'/>

            <Flex direction={"row"} justifyContent={"space-between"}>
                <ButtonGroup variant='outline' spacing='20'>
                    <Button backgroundColor={"black"} color={"yellow"}>
                    <Link href={"/"} mx={5} >Play</Link>
                    </Button>


                    <Button backgroundColor={"black"} color={"yellow"}>
                    <Link href={"/shop"} mx={10} >Farmer Tools Market</Link>
                    </Button>
                </ButtonGroup>
            </Flex>


                <ConnectWallet/>
            </Flex>
        </Container>
    )
};
