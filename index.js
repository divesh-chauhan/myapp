require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json())

app.get('/', (req, res) => res.status(200).json({msg:'this is Home Page.'}));
app.get('/api/profile', (req, res) => res.status(200).json({msg:'this is Profile Page.'}));
app.get('/api/about', (req, res) => res.status(200).json({msg:'this is About Page.'}));
app.get('/api/dashboard', (req, res) => res.status(200).json({msg:'this is User Dashboard.'}));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

