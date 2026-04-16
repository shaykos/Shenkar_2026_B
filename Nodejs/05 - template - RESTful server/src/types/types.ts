export interface ApiResponse<T> {
    success: boolean; // Indicates whether the API request was successful
    data?: T; // The data returned from the API, if the request was successful
    error?: string; // An error message, if the request was not successful
}

export interface User {
    id: number; // Unique identifier for the user
    name: string; // Name of the user
    email: string; // Email address of the user
}