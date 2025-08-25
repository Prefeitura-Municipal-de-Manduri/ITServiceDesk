const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./auth');
const IP = require('../src/Global_IP');
  

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

/* =============================
   Rota original: Enviar novo chamado
   ============================= */
app.post('/chamados', (req, res) => {
  const { tecnico, nome, email, tipos, departamento, sobre } = req.body;

  const transporter = nodemailer.createTransport({
    host: config.provedor,
    port: 587,
    secure: false,
    auth: {
      user: config.email,
      pass: config.senha
    }
  });

  const mailOptions = {
    from: config.email,
    to: 'cpd@manduri.sp.gov.br',
    subject: `Novo Chamado Recebido - Responsável TI: ${tecnico}`,
    html: `
      <p>Um novo chamado foi recebido:</p>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Tipo de Solicitação:</strong> ${tipos}</p>
      <p><strong>Departamento:</strong> ${departamento}</p>
      <p><strong>Descrição do Problema:</strong> ${sobre}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o email:', error);
      res.status(500).send('Erro ao enviar o email');
    } else {
      console.log('Email enviado:', info.response);
      res.status(200).send('Chamado enviado com sucesso');
    }
  });
});

/* =============================
   Nova rota: Enviar solução para o cliente
   ============================= */
app.post('/enviar-solucao', (req, res) => {
  const { nome, email, tecnico, solution } = req.body;

  const transporter = nodemailer.createTransport({
    host: config.provedor,
    port: 587,
    secure: false,
    auth: {
      user: config.email,
      pass: config.senha
    }
  });

  const mailOptions = {
    from: config.email,
    to: email,
    subject: `Seu chamado foi finalizado - Suporte Técnico - ${tecnico}`,
    html: `
      <p>Olá <strong>${nome}</strong>,</p>
      <p>Seu chamado foi finalizado pelo técnico <strong>${tecnico}</strong>.</p>
      <p><strong>Solução aplicada:</strong></p>
      <p>${solution}</p>
      <br/>
      <p>Se você tiver mais dúvidas, entre em contato com o setor de TI.</p>
      <p>Atenciosamente,<br/>Suporte Técnico - Prefeitura de Manduri</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar solução por e-mail:', error);
      res.status(500).send('Erro ao enviar solução');
    } else {
      console.log('Solução enviada ao cliente:', info.response);
      res.status(200).send('Solução enviada com sucesso');
    }
  });
});

// Iniciar o servidor
app.listen(port, IP.ip, () => {
  console.log(`Servidor rodando em http://${IP.ip}:${port}`);
});
