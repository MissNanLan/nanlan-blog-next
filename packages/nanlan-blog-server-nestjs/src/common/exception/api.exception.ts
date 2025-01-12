export class ApiException extends Error {
  constructor(
    public readonly message: string = 'Internal Server Error',
    public readonly statusCode: number = 500,
    public readonly error?: any,
  ) {
    super(message);
    this.name = 'ApiException';
  }
}
