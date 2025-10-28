const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas del backend
app.use('/api', authRoutes);

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Redirigir todas las rutas no API al index.html del frontend
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
