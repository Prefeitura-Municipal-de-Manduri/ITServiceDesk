import React from 'react';
import { ChakraProvider,  Box, extendTheme,} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Homepage from './Components/Home/Homepage'
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Chamado from './Components/Chamado/NovoChamado'
import FinalMain from './Components/Finalizados/FinalMain'
import Contato from './Components/Contato/Contato';
import Consulta from './Components/Consulta/ConsultaMain';
import Downloads from './Components/Downloads/Downloads';
import Dashboard_Math from './Components/Dashboard/Dashboard_Math';
import Dashboard_Jd from './Components/Dashboard/Dashboard_Jd';

import Dashboard_Admin from './Components/Dashboard/Dashboard_Admin';
import FAQSection from './Components/Home/FAQSection'








const isAuthenticated = () => {
  // Verifica se há um token de autenticação no localStorage
  return localStorage.getItem("token") !== null;
};

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};



const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });


function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
          <Box> 
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/consulta" element={<Consulta />} />
                <Route path="/faq" element={<FAQSection />} />




                <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />}/>
                <Route path="/dashboard_math" element={<ProtectedRoute element={<Dashboard_Math />} />}/>
                <Route path="/dashboard_jd" element={<ProtectedRoute element={<Dashboard_Jd />} />}/>

                <Route path="/dashboard_admin" element={<ProtectedRoute element={<Dashboard_Admin />} />}/>



                <Route path="*" element={<Navigate to="/login" />} />

                <Route path="/chamado" element={<Chamado/>} />
                <Route path="/downloads" element={<Downloads/>} />

                <Route path="/finalizados" element={<FinalMain/>} />




             </Routes>
            
          </Box>
      </ChakraProvider>

    </Router>
    

   
  );
}

export default App;
