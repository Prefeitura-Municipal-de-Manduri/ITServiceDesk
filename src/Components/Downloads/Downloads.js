import React from 'react';
import {  Box,  Heading,  Grid,  Text,  Link,  VStack,} from '@chakra-ui/react';

const DownloadScreen = () => {
  const sections = [
    {
      title: 'Leitores de PDF',
      items: [
        {
          name: 'Adobe Reader',
          link: 'https://get.adobe.com/uk/reader/download?os=Windows+10&name=Reader+2024.003.20112+Brazilian+Windows%2864Bit%29&lang=br&nativeOs=Linux+x86_64&accepted=&declined=&preInstalled=&site=otherversions',
          image: 'data:image/png;base64,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',
        },
        {
          name: 'Foxit Reader',
          link: 'https://www.foxit.com/downloads/#',
          image: 'data:image/jpeg;base64,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',
        },
        {
          name: 'SlimPDF Reader',
          link: 'https://cdn.investintech.com/download/InstallSlimPDFReader.exe',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQclkWQTYb8TZWGJheXYwOEf2HrUyKBuoN-Q&s',
        },
        {
          name: 'NitroPDF & eSign Software',
          link: '#',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqReYrLpgDaUr6PMGTvpebAKZPTG_o6iu_xA&s',
        }
      ],
    },
    {
      title: 'Navegadores',
      items: [
        {
          name: 'Brave Browser',
          link: 'https://laptop-updates.brave.com/latest/winx64',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOt4cVV4r-MDFVfyIEKq5YQQsAWCgMDUX9Q&s',
        },
        
        {
          name: 'Mozilla Firefox',
          link: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=pt-BR',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZAExS-ILRirIqIZJAmMsUoL-l3eop5XFxw&s',
        },
        {
          name: 'Google Chrome',
          link: '#',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png',
        },
        {
          name: 'Firefox Dev. Edition',
          link: 'https://download.mozilla.org/?product=firefox-devedition-latest-ssl&os=linux64&lang=en-US',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6gF7OFyZXn8QIKFR-96kfYJd_qoAIIy2_w&s',
        },
      ],
    },
    {
      title: 'Softwares de Conexão Remota',
      items: [
        {
          name: 'Anydesk',
          link: 'https://anydesk.com/pt/downloads/thank-you?dv=win_exe',
          image: 'https://img.utdstc.com/icon/8f5/b46/8f5b46f622e8cbb795acedbcfa4b331fbe145613742a9f577da92964d9e7d381:200',
        },
        {
          name: 'RustDesk',
          link: 'https://github.com/rustdesk/rustdesk/releases/download/1.2.3-2/rustdesk-1.2.3-2-x86_64.exe',
          image: 'https://pbs.twimg.com/profile_images/1622608309625966592/SJE_rVZV_400x400.jpg',
        },
        {
          name: 'Remmina',
          link: 'https://remmina.org/how-to-install-remmina/',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVL4TRdtwFSGNjEwQz5AwP4OMMQJpeO6YBdQ&s',
        },
        {
          name: 'TeamViewer',
          link: 'https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDg-P9Ff2LiN7sydBT2nnqocQpgSH0I5FTg&s',
        },
      ],
    },
    {
      title: 'Softwares de Cartão Digital',
      items: [
        {
          name: 'Token SafeSign  Wx64',
          link: 'https://www.signasafe.com.br/download/token-safesign-30124-windows-64bits/#',
          image: 'https://cdn-icons-png.flaticon.com/512/6472/6472048.png',
        },
        {
          name: 'Token AR SPLink',
          link: 'https://sci.linkcertificacao.com.br/download/midias/setup.exe',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oGmswL8F0nNibVtGDMtrgpbawjtZkx8oxA&s',
        },
      ],
    },
    {
      title: 'Antivírus',
      items: [
        {
          name: 'Kaspersky',
          link: 'https://www.kaspersky.com.br/',
          image: 'https://s2.glbimg.com/AiORv88lL2zSJeTzmrgkZQhwyIM=/620x430/e.glbimg.com/og/ed/f/original/2022/05/09/frpesbdxmaeyals.jpg',
        },
        {
          name: 'BitDefender',
          link: 'https://www.bitdefender.com/pt-br/',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNXXZLxmY354fC3yeuj6UNMKSMM_X5GqHZQ&s',
        },
      ],
    },
    
    {
      title: 'Digitalizadores',
      items: [
        {
          name: 'NAPS2',
          link: 'https://github.com/cyanfish/naps2/releases/download/v7.5.2/naps2-7.5.2-linux-x64.deb',
          image: 'https://www.naps2.com/images/scanner-large.png',
        },
        {
          name: 'HP Scan and Capture ',
          link: '#',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAot0eQd9HC7cKvSU3ZxmYRbpswVRmkATy5w&s',
        },
      ],
    },
  ];

  return (
    <Box 
      p={6} 
      bg="white" 
      color="black" 
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center" 
    >
      <Heading mb={6}>Central de Downloads</Heading>
      <Box width="100%" display="flex" flexDirection="column" alignItems="center">
        {sections.map((section, sectionIndex) => (
          <Box key={sectionIndex} mb={8} width="90%" maxWidth="1200px"> 
            <Heading size="md" mb={4} textAlign="center">{section.title}</Heading>
            <Grid 
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} 
              gap={6}
              justifyItems="center" 
            >
              {section.items.map((item, index) => (
                <Link key={index} href={item.link} isExternal>
                  <VStack 
                    p={5} 
                    bg="gray.100" 
                    borderRadius="md" 
                    boxShadow="md" 
                    align="center"
                    transition="background-color 0.2s"
                    _hover={{ bg: "gray.200" }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '80px', height: '80px', borderRadius: '8px', display: 'block', margin: '0 auto' }} // Centralizando a imagem
                    />
                    <Text fontSize="lg" fontWeight="bold" textAlign="center">{item.name}</Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">Clique para baixar</Text>
                  </VStack>
                </Link>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DownloadScreen;
