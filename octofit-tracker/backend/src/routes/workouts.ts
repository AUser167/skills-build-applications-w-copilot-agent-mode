import { Router } from 'express';
import { getApiBaseUrl } from '../config/api.js';
import { Workout } from '../models/Workout.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: 1 }).lean();
    response.json({ count: workouts.length, results: workouts, baseUrl: getApiBaseUrl(), endpoint: '/api/workouts/' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const workout = await Workout.create(request.body ?? {});
    response.status(201).json(workout);
  } catch (error) {
    next(error);
  }
});

export default router;
