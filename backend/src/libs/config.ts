import {config} from 'dotenv';

config({ path: '.env.local' });

export const URL_FRONTEND = process.env.URL_FRONTEND
export const PORT = process.env.PORT