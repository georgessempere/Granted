export const toast = (
    type: 'error' | 'success' | 'warning' | 'info',
    message: string) =>
        JSON.stringify({ toast: { type, message } });
