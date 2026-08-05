const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const workout = require('./workout');
workout.initSampleWorkouts();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/workout', (req, res) => {
  res.json({ message: 'Workout plan!', plans: workout.getWorkout() });
});

app.get('/workout/day/:dayId', (req, res) => {
  const dayId = Number(req.params.dayId);
  const plans = workout.getWorkoutByDay(dayId);
  if (!plans) {
    return res.status(404).json({ message: 'Workout day not found!' });
  }
  res.json({ message: 'Workout day found!', dayId, plans });
});

app.post('/workout', (req, res) => {
  const exercise = req.body;
  if (!exercise || !exercise.dayId || !exercise.id || !exercise.name) {
    return res.status(400).json({
      message: 'Invalid exercise payload. Required fields: dayId, id, name.'
    });
  }
  workout.addExercise(exercise.dayId, exercise);
  res.json({ message: 'Workout exercise added!', plans: workout.getWorkoutByDay(exercise.dayId) });
});

app.get('/workout/search/:name', (req, res) => {
  const name = req.params.name.toLowerCase();
  const plans = workout.getWorkout();
  const exercise = plans.flat().find(item => item.name.toLowerCase() === name);
  if (exercise) {
    res.json({ message: 'Workout found!', exercise });
  } else {
    res.status(404).json({ message: 'Workout not found!' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

