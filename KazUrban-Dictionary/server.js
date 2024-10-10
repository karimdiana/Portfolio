const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8080;

// Serve static files from the web directory
app.use(express.static(path.join(__dirname, 'web')));

// Endpoint to get definitions from slang.txt
app.get('/definitions', (req, res) => {
    fs.readFile(path.join(__dirname, 'src', 'slang.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the definitions file.');
        }

        const definitions = {};
        const lines = data.split('\n');

        lines.forEach(line => {
            const [term, definition] = line.split(':');
            if (term && definition) {
                definitions[term.trim()] = definition.trim();
            }
        });

        res.json(definitions);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
