import express from 'express';
const authRoutes = express.Router();

import { login } from '../controller/auth.js'


authRoutes.post('/login', login)

export default authRoutes