const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const workout = require('./workout');
workout.addWorkout({ name: 'Push-ups', reps: 20 });

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/workout', (req, res) => {
  res.json({ message: 'Workout plan!', plans: workout.getWorkout() });
});

app.post('/workout', (req, res) => {
  const workoutPlan = req.body;
  workout.addWorkout(workoutPlan);
  res.json({ message: 'Workout plan added!', plans: workout.getWorkout() });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

