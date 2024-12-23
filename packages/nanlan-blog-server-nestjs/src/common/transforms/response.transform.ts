export interface ResponseData<T> {
  data: T;
  code: number;
  message: string;
}

export class ResponseTransform<T> {
  data?: T;
  code: number;
  message: string;

  constructor(data: T, code = 200, message = 'success') {
    this.data = data;
    this.code = code;
    this.message = message;
  }

  static success<T>(data: T, message = 'success'): ResponseData<T> {
    return {
      code: 200,
      message,
      data,
    };
  }

  static error(message = 'error', code = 500): ResponseData<null> {
    return {
      code,
      message,
      data: null,
    };
  }
}
