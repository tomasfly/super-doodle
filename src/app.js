const express = require('express');
const newsRoutes = require('./routes/newsRoutes');
const symbolRoutes = require('./routes/symbolRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/news', newsRoutes);
app.use('/symbol', symbolRoutes);
app.use('/dashboard', dashboardRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});