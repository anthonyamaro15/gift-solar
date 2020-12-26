import axios from 'axios';
import { serverUrl } from '../../envVariables';

export const loginRequest = async (data) => {
   return await axios.post(`${serverUrl}/api/auth/login`, data);
};

export const contactGiftSolarRequest = async (data) => {
   return await axios.post(`${serverUrl}/api/contact}`, data);
};
