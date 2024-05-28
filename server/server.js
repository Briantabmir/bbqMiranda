const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Cambia esto a tu contraseña de MySQL
  database: 'bbqinvitations' // Asegúrate de que esta base de datos exista en tu MySQL Workbench
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Ruta para manejar las confirmaciones
app.post('/api/invitations', (req, res) => {
  console.log(req.body); // Log para verificar los datos recibidos
  const { name, surname } = req.body;
  const query = 'INSERT INTO invitations (name, surname) VALUES (?, ?)';
  db.query(query, [name, surname], (err, result) => {
    if (err) {
      console.error('Error al insertar los datos:', err);
      res.sendStatus(500);
      return;
    }
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
