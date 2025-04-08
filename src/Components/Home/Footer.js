import { Box, Flex, HStack, Image, Link, Stack, Text, VStack, Divider, Icon } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaCog, FaClock } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Logo from "../../Images/logo.png";
import Version from "../../Version_show"



const CompanyFooter = () => {
  return (
    <Box bg="gray.800" _dark={{ bg: "gray.600" }}>
      <Stack direction={{ base: "column", lg: "row" }} w="full" justify="space-between" p={10}>
        <Flex justify="center">
          <Image
            src={Logo}
            alt="Logo"
            rounded="lg"
            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease' }}
            width={{ base: "60px", lg: "60px" }}
            height={{ base: "60px", lg: "60px" }}
            my={{ base: 2, lg: 0 }}
          />
        </Flex>
        <HStack alignItems="start" flex={1} justify="space-around" fontSize={{ base: "12px", md: "16px" }} color="white" _dark={{ color: "white" }} textAlign={{ base: "center", md: "left" }}>
          <Flex justify="start" direction="column">
            <Link href="../Login" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Painel de Administração</Link>
            <Link href="../Consulta" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Consultar chamados</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link href="../faq" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>FAQ</Link>
            <Link href="../Dowloads" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Central de Dowloads</Link>
          </Flex>
        </HStack>
        <HStack alignItems="start" flex={1} justify="space-around" fontSize={{ base: "12px", md: "16px" }} color="white" _dark={{ color: "white" }} textAlign={{ base: "center", md: "left" }}>
          <Flex justify="start" direction="column">
            <Link href="https://www.manduri.sp.gov.br/" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Site Prefeitura Municipal</Link>
            <Link href="https://www.manduri.sp.gov.br/webmail/" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>E-mail</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link href="https://anydesk.com/pt/downloads/thank-you?dv=win_exe" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Download Anydesk</Link>
            <Link href="https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.exe" isExternal _hover={{ color: "green.600", transform: "translateX(5px)", _dark: { color: "gray.600" } }}>Download RustDesk</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider w="95%" mx="auto" color="gray.200" _dark={{ color: "#F9FAFB" }} h="3.5px" />

      <VStack py={2}>
      <HStack justify="center" width="100%" spacing={0}>
    <HStack spacing={1}> {/* Espaço entre ícone e texto */}
        <Icon as={FaCog} color="white" />
        <Text fontSize="sm" color="white" _dark={{ color: "white" }}>
            Versão do sistema: 3.1.0 - 27/02/2025
        </Text>
    </HStack>

    <Text mx={4} color="white" _dark={{ color: "white" }}> {/* Espaço entre os textos */}
        | {/* Você pode usar um separador visual aqui */}
    </Text>

    <HStack spacing={1}> {/* Espaço entre ícone e texto */}
        <Icon as={FaClock} color="white" />
        <Text fontSize="sm" color="white" _dark={{ color: "white" }}>
        {Version.v}   
     </Text>
    </HStack>
</HStack>


        <Divider width="95%" color="gray.200" _dark={{ color: "#F9FAFB" }} />
        <Text textAlign="center" fontSize="sm" color="white" _hover={{ color: "green.600", _dark: { color: "gray.600" } }}>
          Desenvolvido por Marcelo <a href="https://github.com/Prefeitura-Municipal-de-Manduri/ITServiceDesk"> (Departamento de TI/CPD - Prefeitura de Manduri)</a> - &copy;Todos os direitos reservados.
        </Text>
      </VStack>

      <HStack justify="center">
        <Link href="https://www.facebook.com/prefeituramunicipaldemanduri/?locale=pt_BR" isExternal>
          <Icon
            color="white"
            _dark={{ color: "white" }}
            h="20px"
            w="20px"
            as={FaFacebookF}
            _hover={{ color: "green.600", _dark: { color: "gray.600" } }}
          />
        </Link>
        <Link href="https://www.manduri.sp.gov.br/" isExternal>
          <Icon
            color="white"
            _dark={{ color: "white" }}
            h="20px"
            w="20px"
            as={CgWebsite}
            _hover={{ color: "green.600", _dark: { color: "gray.600" } }}
          />
        </Link>
      </HStack>
    </Box>
  );
};

export default CompanyFooter;
