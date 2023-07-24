import {POST} from "./fetch-action";

export const loginActionHandler = (email: string, password: string) => {
    const URL = '/auth/login';
    const loginObject = { email, password };
    const response = POST(URL, loginObject, {});
    return response;
}