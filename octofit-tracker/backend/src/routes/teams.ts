import { Router } from 'express';
import { getApiBaseUrl } from '../config/api.js';
import { Team } from '../models/Team.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const teams = await Team.find().sort({ createdAt: 1 }).lean();
    response.json({ count: teams.length, results: teams, baseUrl: getApiBaseUrl(), endpoint: '/api/teams/' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const team = await Team.create(request.body ?? {});
    response.status(201).json(team);
  } catch (error) {
    next(error);
  }
});

export default router;
