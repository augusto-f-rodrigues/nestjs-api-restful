export class HttpResponseException extends Error {
  private response: Core.Response;

  constructor({ response }: Core.Error) {
    super();
    this.response = response;
  }
}
