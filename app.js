// Get json from cards module
const cards = require('./listings.js');
let usePort = 3000;

// Initialize express
let express = require('express');
let app = new express();

// Serve webpage to client
app.use(express.static('public'));

// Routes
app.get('/getAllListings/', (req, res) => {
    return res.send(cards).end();
});

app.get('/searchListings', (req, res) => {
  const searchTerm = req.query.term.toLowerCase();
 
  const filteredListings = cards.filter(property =>
      property.street.toLowerCase().includes(searchTerm) ||
      property.city.toLowerCase().includes(searchTerm)
  );

  res.json(filteredListings);
});

// Listen on port
app.listen(usePort, (e) => {
    console.log(e ? e : `listening on port ${usePort}`);
});