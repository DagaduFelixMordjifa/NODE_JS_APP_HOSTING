const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from DAGS on CI/CD Pipeline!'));
app.listen(3000, () => console.log('Server running on port 3000'));