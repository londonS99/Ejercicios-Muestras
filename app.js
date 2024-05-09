const express = require('express');
const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.set('views', './views');

const personas = [
  { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
  { nombre: 'Ana', apellido: 'López', edad: 25 },
  { nombre: 'Carlos', apellido: 'Gómez', edad: 40 },
];

const productos = [
    { nombre: "Shampoo Reparador", marca: "Pantene", precio: 12000 },
    { nombre: "Acondicionador Hidratante", marca: "Dove", precio: 10000 },
    { nombre: "Mascarilla Nutritiva", marca: "Garnier", precio: 15000 },
    { nombre: "Aceite Capilar", marca: "L'Oréal", precio: 20000 },
    { nombre: "Gel Fijador", marca: "Head & Shoulders", precio: 8000 },
  ];

app.get('/', (req, res) => {
  res.render('index', { personas, productos });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});