@echo off

start cmd /k "npm start"
start cmd /k "npm run json-server"
start cmd /k "cd email && node server.js"