import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

let lang: string = "en"; // Default language

// Check if we are in a browser environment before using window
if (typeof window !== "undefined") {
  lang = window.localStorage.getItem("lang")
    ? JSON.parse(window.localStorage.getItem("lang")!)
    : "en";
}

const client = axios.create({
  baseURL: "http://drnizer.admin.technomasrsystems.com/api",
  headers: {
    "Content-Type": "application/json",
    lang,
  },
});

export const request = (options: AxiosRequestConfig): Promise<AxiosResponse> => {
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: any) => Promise.reject(error);

  return client(options).then(onSuccess).catch(onError);
};
