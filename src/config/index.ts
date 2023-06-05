/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';

// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  prot: process.env.PORT,
  database_url: process.env.MONGO_URL,
  default_user_pass: process.env.DEFAULT_USER_PASS,
};
