export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

type REST_API_METHOD = "GET" | "PATCH" | "POST" | "DELETE" | "PUT";

type FetchFunction = (url: string, options?: RequestInit) => Promise<Response>;
interface IFetch {
  get: FetchFunction;
  post: FetchFunction;
  put: FetchFunction;
  delete: FetchFunction;
  patch: FetchFunction;
}

export class Fetcher implements IFetch {
  constructor(
    private baseUrl: string,
    private baseOption?: RequestInit,
  ) {}
  async get(url: string, option?: RequestInit) {
    const response = await fetch(this.createUrl(url), this.getOption("GET", option));
    this.responseOk(response);
    const data = await this.parseResponse(response);
    return data;
  }

  async post(url: string, option?: RequestInit) {
    const response = await fetch(this.createUrl(url), this.getOption("POST", option));
    this.responseOk(response);
    const data = await this.parseResponse(response);
    return data;
  }
  async put(url: string, option?: RequestInit) {
    const response = await fetch(this.createUrl(url), this.getOption("PUT", option));
    this.responseOk(response);
    const data = await this.parseResponse(response);
    return data;
  }
  async delete(url: string, option?: RequestInit) {
    const response = await fetch(this.createUrl(url), this.getOption("DELETE", option));
    this.responseOk(response);
    const data = await this.parseResponse(response);
    return data;
  }
  async patch(url: string, option?: RequestInit) {
    const response = await fetch(this.createUrl(url), this.getOption("PATCH", option));
    this.responseOk(response);
    const data = await this.parseResponse(response);
    return data;
  }

  responseOk(response: Response, message?: string) {
    if (response.ok) return;
    throw new ApiError(message ?? "it something wrong", response.status);
  }
  private createUrl(url: string) {
    return `${this.baseUrl}${url}`;
  }

  setAccessToken(token: unknown) {
    const headers = typeof token === "string" ? { authorization: token } : { authorization: "" };
    return headers;
  }

  protected getOption(method: REST_API_METHOD, options?: RequestInit) {
    const customOption: RequestInit = {
      ...this.baseOption,
      ...options,
      headers: {
        ...this.baseOption?.headers,
        ...options?.headers,
      },
      method: method,
    };
    return customOption;
  }

  async parseResponse(response: Response) {
    try {
      return await response.json();
    } catch (e) {
      return await response.text();
    }
  }
}

export const fetcher = new Fetcher("", {
  headers: {
    "Content-Type": "application/json",
  },
});
