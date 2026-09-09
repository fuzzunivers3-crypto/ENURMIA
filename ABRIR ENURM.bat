@echo off
title ENURMIA
cd /d "%~dp0"

echo.
echo   ENURMIA
echo   ------------------
echo   Abriendo la plataforma...
echo.

where python >nul 2>nul
if %errorlevel%==0 (
    echo   Servidor local en http://127.0.0.1:8791
    echo   NO CIERRES esta ventana mientras estudias.
    echo   Para salir: cierra esta ventana o pulsa Ctrl+C.
    echo.
    start "" http://127.0.0.1:8791/index.html
    python -m http.server 8791 --bind 127.0.0.1
) else (
    echo   Python no esta instalado: abriendo el archivo directamente.
    echo.
    start "" "index.html"
)
