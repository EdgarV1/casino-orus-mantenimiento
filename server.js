// Importamos la librería express que acabamos de instalar
const express = require('express');
const app = express();
const path = require('path');

// Le decimos a nuestro servidor que la carpeta "public" será accesible para el navegador
app.use(express.static(path.join(__dirname, 'public')));

// Definimos en qué "canal" o puerto va a funcionar nuestro servidor local
const PORT = 3000;

// Encendemos el servidor
app.listen(PORT, () => {
    console.log(`¡Servidor de Casino Orus encendido! 🚀`);
    console.log(`Revisa tu avance abriendo tu navegador en: http://localhost:${PORT}`);
});