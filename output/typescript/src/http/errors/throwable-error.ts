// This file was generated by liblab | https://liblab.com/

export class ThrowableError extends Error {
  constructor(
    public message: string,
    protected response?: unknown,
  ) {
    super(message);
  }

  public throw() {
    throw this;
  }
}
