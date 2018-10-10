const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://localhost/string-creator-db',
});

client.connect();

module.exports = client;
