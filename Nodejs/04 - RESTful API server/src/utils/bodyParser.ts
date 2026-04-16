import type { IncomingMessage } from "http";

export async function parseRequestBody(req: IncomingMessage): Promise<any> {
    return new Promise((resolve, reject) => {
        let body = ''; // Initialize an empty string to accumulate the request body 

        // Listen for data events to receive the request body
        req.on('data', chunk => {
            body += chunk; // Append each chunk of data to the body
        });

        // Listen for the end event to know when the entire body has been received
        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body); // Parse the received data as JSON
                resolve(parsedBody); // Resolve the promise with the parsed body
            } catch (error) {
                reject(new Error('Invalid JSON in request body')); // Reject the promise if JSON parsing fails
            }
        });

        // Listen for error events to handle any errors that occur while receiving the request body
        req.on('error', (error) => {
            reject(error); // Reject the promise if an error occurs
        });
    });
}   