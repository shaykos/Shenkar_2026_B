import { IncomingMessage, ServerResponse } from 'http';

export function handleRoutes(req: IncomingMessage, res: ServerResponse) {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Hello, World!');
    }

    if (req.method === 'POST' && req.url === '/') {
        let body = ''; // Initialize an empty string to accumulate the request body

        // Listen for data events to receive the request body
        req.on('data', chunk => {
            body += chunk; // Append each chunk of data to the body
        });

        // Listen for the end event to know when the entire body has been received
        req.on('end', () => {
            console.log('Received POST data:', body); // Log the received data (optional)
            body = JSON.parse(body);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: 'Hello, World! Posted!',
                receivedData: body,
            }));
        });

        return; // exit the function to wait for the 'end' event before sending a response
    }

    if (req.method === 'DELETE' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Hello, World! Deleted!');
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
}