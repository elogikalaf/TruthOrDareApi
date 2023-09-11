class HttpResponse {
  public status: number;
  public message: string;
  public data: object;

  constructor(status: number, message: string, data?: object) {
    this.status = status;
    this.message = message;
    this.data = data || {};
  }
}

export default HttpResponse;
