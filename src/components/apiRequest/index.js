import axios from 'axios';
import { serverUrl } from '../../envVariables';

export const loginRequest = async (data) => {
   return await axios.post(`${serverUrl}/api/auth/login`, data);
} 
