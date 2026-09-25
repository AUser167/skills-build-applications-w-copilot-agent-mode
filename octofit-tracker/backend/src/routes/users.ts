import { Router } from 'express';
import { getApiBaseUrl } from '../config/api.js';
import { User } from '../models/User.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const users = await User.find().sort({ createdAt: 1 }).lean();
    response.json({ count: users.length, results: users, baseUrl: getApiBaseUrl(), endpoint: '/api/users/' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const user = await User.create(request.body ?? {});
    response.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
