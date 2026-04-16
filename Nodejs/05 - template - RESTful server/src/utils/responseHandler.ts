import type { ApiResponse } from '../types/types.ts';
import type { ServerResponse } from 'http';

export function sendResponse<T>(res: ServerResponse, statusCode: number, payload: ApiResponse<T>): void {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' }); // Set the response header to indicate JSON content
    res.end(JSON.stringify(payload)); // Send the response with the payload serialized as JSON
}