class HandleError extends Error {
    constructor(message, StatusCode) {
        super(message);
        this.StatusCode = StatusCode;
        this.status = `${StatusCode}`.startsWith(4) ? 'Client error' : 'error';
    }
}
module.exports = HandleError