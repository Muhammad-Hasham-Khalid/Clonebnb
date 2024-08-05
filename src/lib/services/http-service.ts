import axios, { type AxiosInstance } from "axios";

const HttpHelpers = new (class HttpHelpers {})();

export const HttpService = Object.assign(axios.create(), HttpHelpers);
