import { connectDatabase, disconnectDatabase } from '../config/database.js';
import { Activity } from '../models/Activity.js';
import { LeaderboardEntry } from '../models/LeaderboardEntry.js';
import { Team } from '../models/Team.js';
import { User } from '../models/User.js';
import { Workout } from '../models/Workout.js';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await connectDatabase();
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await User.insertMany([
      {
        id: 'u1',
        name: 'Ava Patel',
        email: 'ava.patel@octofit.example',
        team: 'Blue Sharks',
        points: 120,
      },
      {
        id: 'u2',
        name: 'Marcus Lee',
        email: 'marcus.lee@octofit.example',
        team: 'Green Hawks',
        points: 145,
      },
      {
        id: 'u3',
        name: 'Jordan Kim',
        email: 'jordan.kim@octofit.example',
        team: 'Blue Sharks',
        points: 98,
      },
    ]);

    await Team.insertMany([
      { id: 't1', name: 'Blue Sharks', members: ['u1', 'u3'], totalPoints: 218 },
      { id: 't2', name: 'Green Hawks', members: ['u2'], totalPoints: 145 },
    ]);

    await Activity.insertMany([
      {
        id: 'a1',
        userId: 'u1',
        type: 'Run',
        durationMinutes: 35,
        distanceKm: 5.4,
        calories: 420,
        completedAt: new Date('2026-09-20T16:30:00Z'),
      },
      {
        id: 'a2',
        userId: 'u2',
        type: 'Strength',
        durationMinutes: 45,
        distanceKm: 0,
        calories: 360,
        completedAt: new Date('2026-09-21T17:00:00Z'),
      },
      {
        id: 'a3',
        userId: 'u3',
        type: 'Walk',
        durationMinutes: 50,
        distanceKm: 4.1,
        calories: 250,
        completedAt: new Date('2026-09-22T15:15:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      { rank: 1, userId: 'u2', name: 'Marcus Lee', points: 145 },
      { rank: 2, userId: 'u1', name: 'Ava Patel', points: 120 },
      { rank: 3, userId: 'u3', name: 'Jordan Kim', points: 98 },
    ]);

    await Workout.insertMany([
      {
        id: 'w1',
        title: '5K Cardio Blast',
        focus: 'cardio',
        durationMinutes: 30,
        difficulty: 'moderate',
      },
      {
        id: 'w2',
        title: 'Core Strength Circuit',
        focus: 'strength',
        durationMinutes: 25,
        difficulty: 'beginner',
      },
      {
        id: 'w3',
        title: 'After-School Mobility',
        focus: 'mobility',
        durationMinutes: 20,
        difficulty: 'beginner',
      },
    ]);

    console.log('Database seeding complete');
    await disconnectDatabase();
  } catch (error) {
    console.error('Error seeding database:', error);
    await disconnectDatabase();
    process.exit(1);
  }
}

seedDatabase();
