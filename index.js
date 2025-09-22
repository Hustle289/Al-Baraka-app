
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Albaraka Fundings Ltd Backend Running');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
