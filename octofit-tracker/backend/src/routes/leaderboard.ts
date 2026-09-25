import { Router } from 'express';
import { getApiBaseUrl } from '../config/api.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';

const router = Router();

router.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().sort({ points: -1 }).lean();
    response.json({ count: leaderboard.length, results: leaderboard, baseUrl: getApiBaseUrl(), endpoint: '/api/leaderboard/' });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (request, response, next) => {
  try {
    const entry = await LeaderboardEntry.create(request.body ?? {});
    response.status(201).json(entry);
  } catch (error) {
    next(error);
  }
});

export default router;
