import { IncomingMessage, ServerResponse } from 'http';
import { users } from './vars.ts';
import type { User } from './vars.ts';

export function handleRoutes(req: IncomingMessage, res: ServerResponse) {
    if (req.method === 'GET' && req.url === '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
            users: users,
        }));
    }

    if (req.method === 'POST' && req.url === '/users') {
        let body = ''; // Initialize an empty string to accumulate the request body

        // Listen for data events to receive the request body
        req.on('data', chunk => {
            body += chunk; // Append each chunk of data to the body
        });

        // Listen for the end event to know when the entire body has been received
        req.on('end', () => {
            console.log('Received POST data:', body); // Log the received data (optional)
            let user = JSON.parse(body) as User; // Parse the received data as JSON and cast it to the User type

            users.push(user); // Add the received data to the users array

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: `User ${user.name} added successfully!`,
                totalUsers: users.length,
            }));
        });

        return; // exit the function to wait for the 'end' event before sending a response
    }

    if (req.method === 'PUT' && req.url?.includes('/users/')) {
        let parts = req.url.split('/'); // Split the URL into parts
        const id = Number(parts[parts.length - 1]); // Extract the user ID from the URL

        let body = ''; // Initialize an empty string to accumulate the request body

        // Listen for data events to receive the request body
        req.on('data', chunk => {
            body += chunk; // Append each chunk of data to the body
        });

        // Listen for the end event to know when the entire body has been received
        req.on('end', () => {
            console.log('Received PUT data:', body); // Log the received data (optional)
            let updatedUser = JSON.parse(body) as User; // Parse the received data as JSON and cast it to the User type

            // Find the index of the user with the specified ID
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1) {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({ message: `User with ID ${id} not found` }));
            }

            users[userIndex] = updatedUser; // Update the user in the users array

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({
                message: `User with ID ${id} updated successfully!`,
                totalUsers: users.length,
            }));
        });

        return; // exit the function to wait for the 'end' event before sending a response
    }

    if (req.method === 'DELETE' && req.url?.includes('/users/')) {
        let parts = req.url.split('/'); // Split the URL into parts
        const id = Number(parts[parts.length - 1]); // Extract the user ID from the URL

        // Find the index of the user with the specified ID
        const userIndex = users.findIndex(user => user.id === id);  

        if (userIndex === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ message: `User with ID ${id} not found` }));
        }

        users.splice(userIndex, 1); // Remove the user from the users array

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
            message: `User with ID ${id} deleted successfully!`,
            totalUsers: users.length,
        }));
    }


}