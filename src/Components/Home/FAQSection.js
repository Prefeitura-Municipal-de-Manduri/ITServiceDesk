import React from "react";
import {
  chakra,
  Box,
  Flex,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";

const Choc = () => {
  const FAQItem = ({ question, answer, icon }) => {
    return (
      <AccordionItem borderColor="gray.200" _dark={{ borderColor: "gray.700" }}>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            <Flex alignItems="center" minH={12}>
              <Flex
                shrink={0}
                alignItems="center"
                justifyContent="center"
                h={{ base: 8, md: 12 }}
                w={{ base: 8, md: 12 }}
                rounded="md"
                bg="brand.500"
                color="white"
              >
                <Icon
                  boxSize={{ base: 4, md: 6 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {icon}
                </Icon>
              </Flex>
              <Box ml={{ base: 2, md: 4 }}>
                <chakra.dt
                  fontSize="lg"
                  fontWeight="medium"
                  lineHeight="6"
                  color="gray.900"
                  _dark={{ color: "white" }}
                >
                  {question}
                </chakra.dt>
              </Box>
            </Flex>
          </Box>
          <AccordionIcon _dark={{ color: "white" }} />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.300" }}>
            {answer}
          </chakra.dd>
        </AccordionPanel>
      </AccordionItem>
    );
  };

  const textColor = useColorModeValue("gray.900", "gray.100");
  return (
    <Flex
      bg="gray.200"
      _dark={{ bg: "gray.600" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg={"white"}
        _dark={{ bg: "gray.900" }}
        rounded="xl"
        shadow="base"
        w="100%"
      >
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign="center">
            <chakra.h2
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="gray.900"
              _dark={{ color: "gray.100" }}
            >
                Tópicos de ajuda em destaque
        
            </chakra.h2>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color="gray.500"
              _dark={{ color: "gray.300" }}
            >
              Veja as perguntas frequentes:
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Accordion allowToggle defaultIndex={[0]}>
              
              
              
          
            
              <FAQItem
                question="Como baixar e enviar o código do AnyDesk?"
                answer="Para enviar o código do AnyDesk, primeiro baixe o aplicativo AnyDeslink: https://anydesk.com/pt/downloads/thank-you?dv=win_exe, .Após o download, clique com o lado direito do mouse sobre o programa, e clique em executar como administrador, quando aparecer o aviso de permissão, clique em SIM, após aberto, você verá um código remoto na tela principal. Copie esse código e envie-nos para lhe ajudar."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                }
              />
              <FAQItem
                question="Faz 24h que meu chamado não foi atendido,o que devo fazer?"
                answer="Se você não for atendido imediatamente, por favor, aguarde na fila. Nossa equipe está trabalhando para atender a todos o chamados rápido possível. Se preferir, você também pode entrar em contato conosco por e-mail para obter assistência adicional."
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                }
              />
            <FAQItem
                question="Quero alterar a senha de um e-mail que não tenho mais acesso."
                answer="Abra um chamado, solicitando uma nova senha para o e-mail, no campo 'seu email', adicione outro e-mail funcional do departamento, assim enviamos a nova senha para ele, ou entre em contato conosco pelo nosso ramal: 9207. "
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                }
              />

              
            </Accordion>
            <Box mt={6} textAlign="center">
              <Text
                fontSize="lg"
                color="gray.600"
                _dark={{ color: "gray.400" }}
                mb={2}
              >
                Tem mais dúvidas?
              </Text>
              <Link
                href="mailto:cpd@manduri.sp.gov.br"
                isExternal
                fontSize="lg"
                color="brand.600"
                _dark={{ color: "brand.400" }}
                fontWeight="medium"
                _hover={{
                  textDecoration: "none",
                }}
              >
                Contate-nos!
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Choc;