import React, { useState, useEffect } from "react";
import { ButtonGroup, Flex, IconButton, Table, Tbody, Box, Text,Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { BsCheck,BsFillTrashFill, BsCheckCircle, BsTools, BsFillExclamationTriangleFill} from "react-icons/bs";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import Styles from './List.module.css';
import IP from "../../Global_IP"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const List = () => {
  const [data, setData] = useState([]);
  const [pendingByMatheus, setPendingByMatheus] = useState(0);
  const [pendingByJoao, setPendingByJoao] = useState(0);
  const [completedByMatheus, setCompletedByMatheus] = useState(0);
  const [completedByJoao, setCompletedByJoao] = useState(0);
  // eslint-disable-next-line
  const [completedId, setCompletedId] = useState(null);
  const color1 = useColorModeValue("gray.400", "gray.400");
  const color2 = useColorModeValue("gray.400", "gray.400");

  useEffect(() => {
    axios.get(`http://${IP.ip}:3001/chamados`)
      .then(response => {
        const allData = response.data;
  
        // Filtro para remover os chamados de João Luiz na tabela
        const filteredData = allData.filter(item => item.tecnico !== "João Luiz");
  
        setData(filteredData.map((item, index) => ({
          ...item,
          position: index === 0 ? "Será atendido em breve" : `${index + 1}º`, 
        })));
  
        const criticalCount = allData.filter(item => item.prioridade === "critico").length;
        setCriticalCount(criticalCount);
  
        // Chamados pendentes por Matheus e João 
        const matheusPending = allData.filter(item => item.tecnico === "Marcelo" || "Matheus Marcelo" && !item.completed).length;
        const joaoPending = allData.filter(item => item.tecnico === "João Luiz" && !item.completed).length;

        setPendingByMatheus(matheusPending);
        setPendingByJoao(joaoPending);
      })
      .catch(error => {
        console.error('Erro ao obter dados do servidor:', error);
      });
  
    axios.get(`http://${IP.ip}:3001/finalizados`)
      .then(response => {
        // Filtro para contar os finalizados apenas de Matheus e João
        const matheusCompleted = response.data.filter(item => item.tecnico === "Matheus Marcelo" || "Marcelo").length;
        const joaoCompleted = response.data.filter(item => item.tecnico === "João Luiz").length;
  
        setCompletedByMatheus(matheusCompleted);
        setCompletedByJoao(joaoCompleted);
      })
      .catch(error => {
        console.error('Erro ao obter dados de atendimentos finalizados:', error);
      });
  }, []);
  
  
  const [criticalCount, setCriticalCount] = useState(0);

  const handleComplete = (id) => {
    const solution = window.prompt("Por favor, insira a solução do problema:");
  
    if (!solution) {
      alert("A solução é obrigatória!");
      return;
    }
  
    const item = data.find(item => item.id === id);
    if (!item) return;
  
    const itemWithSolution = { ...item, solution };
  
    // Envia para banco de finalizados
    axios.post(`http://${IP.ip}:3001/finalizados`, itemWithSolution)
      .then(response => {
        console.log('Chamado movido para finalizados:', response.data);
  
        // Remove do banco de chamados
        axios.delete(`http://${IP.ip}:3001/chamados/${id}`)
          .then(() => {
            console.log('Chamado removido da lista de chamados');
            setData(data.filter(item => item.id !== id));
  
            // Envia o email com a solução
            axios.post(`http://${IP.ip}:3002/enviar-solucao`, {
              nome: item.nome,
              email: item.email,
              tecnico: item.tecnico,
              solution: solution
            }).then(() => {
              alert('Chamado finalizado, e e-mail enviado ao solicitante com sucesso!');
            }).catch(err => {
              console.error('Erro ao enviar e-mail com solução:', err);
              alert('Chamado finalizado, mas falha ao enviar e-mail.');
            });
  
          })
          .catch(error => {
            console.error('Erro ao remover chamado:', error);
          });
      })
      .catch(error => {
        console.error('Erro ao mover chamado para finalizados:', error);
      });
  };
  
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Deseja realmente excluir este chamado?");
  
    if (confirmDelete) {
      axios.delete(`http://${IP.ip}:3001/chamados/${id}`)
        .then(response => {
          console.log('Chamado deletado:', response.data);
          setData(data.filter(item => item.id !== id));
        })
        .catch(error => {
          console.error('Erro ao deletar chamado:', error);
        });
    }
  };



  const header = ["ID", "Name", "E-mail address", "Type of problem", "Department",  "Description of the problem", "Priority","TI technical", "Queue","Actions"];
  const reversedData = [...data].reverse(); 

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >


<Flex mt="-10" flexDirection={{ base: "column", md: "row" }} justifyContent="flex-start" alignItems="flex-start">
  <Box mb={5} border="2px solid #E2E8F0" borderRadius="md" p={4} textAlign="center" flex="1" maxW={{ base: "100%", md: "350px" }} mr={{ base: 0, md: "20px" }}>
      <Text as="span" >Welcome, </Text>
      <Text as="span"fontWeight="bold">Marcelo! 👨🏻‍💻</Text>
    
  </Box>

  <Box mb={5} border="2px solid #E2E8F0" borderRadius="md" p={4} textAlign="center" flex="1" maxW={{ base: "100%", md: "350px" }} mr={{ base: 0, md: "20px" }}>
    <Text fontWeight="bold" mb={2}>Priority Queue:</Text>
    <Flex align="center" mt={2}>
      <BsFillExclamationTriangleFill />
      <Text ml={1} mr={1}>So-called critics: </Text>
      <Text color="orange.600">{criticalCount}</Text>

    </Flex>
  
  </Box>


  <Box mb={4} border="2px solid #E2E8F0" borderRadius="md" p={4} textAlign="center" flex="1" maxW={{ base: "100%", md: "300px" }} mr={{ base: 0, md: "20px" }}>
    <Text fontWeight="bold" mb={2}>Statistics technical Marcelo:</Text>
    <Flex align="center">
      <BsTools />
      <Text ml={1} mr={1}>Open calls:</Text>
      <Text color="red">{pendingByMatheus}</Text>
    </Flex>
    <Flex align="center" mt={2}>
      <BsCheckCircle />
      <Text ml={1} mr={0}>Terminated Calls:</Text>
      <Text color="blue">{completedByMatheus}</Text>
    </Flex>
  </Box>

  <Box mb={4} border="2px solid #E2E8F0" borderRadius="md" p={4} textAlign="center" flex="1" maxW={{ base: "100%", md: "300px" }}>
    <Text fontWeight="bold" mb={2}>Statistics technical <br/> João Luiz:</Text>
    <Flex align="center">
      <BsTools />
      <Text ml={1} mr={1}>Open calls:</Text>
      <Text color="red">{pendingByJoao}</Text>
    </Flex>
    <Flex align="center" mt={2}>
      <BsCheckCircle />
      <Text ml={1} mr={0}>Terminated Calls:</Text>
      <Text color="blue">{completedByJoao}</Text>
    </Flex>
  </Box>

  <Box mb={5} border="2px solid #E2E8F0" borderRadius="md" p={4} textAlign="center" flex="1" maxW={{ base: "100%", md: "350px" }}>
          <Text fontWeight="bold" mb={2}>Call Statistics:</Text>
          <BarChart width={320} height={150} data={[
            { name: 'Marcelo', chamadosAbertos: pendingByMatheus, chamadosFinalizados: completedByMatheus },
            { name: 'João Luiz', chamadosAbertos: pendingByJoao, chamadosFinalizados: completedByJoao },
          ]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Open_Calls" fill="#8884d8" />
            <Bar dataKey="Terminated_Calls" fill="#82ca9d" />
          </BarChart>
        </Box>

</Flex>




      



      <Table
        w="full"
        maxW="1200px" 
        mx="auto" 

        bg="white"
        _dark={{ bg: "gray.800" }}
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          td: { padding: "8px", fontSize: "sm" }, 

          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {reversedData.map((token, tid) => {
            const { data, ...otherData } = token;

            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
                className={token.id === completedId ? Styles.completed : ''}
              >
                {Object.keys(otherData).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: color1,
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        {x}
                      </Td>
                      <Td
                        color={"gray.500"}
                        fontSize="md"
                        fontWeight="hairline"
                      >
                        {otherData[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                {/* Ações */}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: color2,
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="green"
                      variant="outline"
                      icon={<BsCheck />}
                      aria-label="Delete"
                      onClick={() => handleComplete(token.id)}
                    />
                    <Popup position="left center" variant="solid" size="sm" spacing={3}  trigger={ 
                      <IconButton
                        colorScheme="blue"
                        icon={<FaInfoCircle />}
                        aria-label="Up"
                      />} >
                      <div>Data e hora do chamado: {token.data}</div>
                    </Popup>
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                      aria-label="Delete"
                      onClick={() => handleDelete(token.id)}
                    />
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
};

export default List;
