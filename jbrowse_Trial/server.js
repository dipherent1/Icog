const express = require('express');
const app = express();
const PORT = 3001;

// Serve files from the genome-data directory
app.use('/data', express.static('genome-data'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/data`);
});
