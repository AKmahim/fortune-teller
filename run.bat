@echo off
start cmd /k "npm run dev"
timeout /t 5 /nobreak >nul
start http:localhost:5173