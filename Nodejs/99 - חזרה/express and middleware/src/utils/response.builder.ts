interface ApiResponse<T> {
    ok: boolean,
    error?: object,
    data?: T,
    timestamp: string
}

export function buildSuccessResponse<T>(data: T): ApiResponse<T> {
    return {
        ok: true,
        data,
        timestamp: new Date().toISOString()
    }
}

export function buildErrorResponse<T>(error: object | unknown): ApiResponse<T> {
    return {
        ok: false,
        error: error ?? "Server Error",
        timestamp: new Date().toISOString()
    }
}