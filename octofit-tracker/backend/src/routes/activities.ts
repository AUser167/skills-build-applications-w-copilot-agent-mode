import { Router } from 'express';
import { getApiBaseUrl } from '../config/api.js';
import { Activity } from '../models/Activity.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const activities = await Activity.find().sort({ completedAt: -1 }).lean();
    response.json({ count: activities.length, results: activities, baseUrl: getApiBaseUrl(), endpoint: '/api/activities/' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const activity = await Activity.create(request.body ?? {});
    response.status(201).json(activity);
  } catch (error) {
    next(error);
  }
});

export default router;
