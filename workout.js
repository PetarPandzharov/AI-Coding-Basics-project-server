let workout = [];

function initSampleWorkouts() {
  workout = [
    [
      { dayId: 1, dayName: 'Monday', id: 1, name: 'Push-ups', reps: 20 },
      { dayId: 1, dayName: 'Monday', id: 2, name: 'Squats', reps: 15 },
      { dayId: 1, dayName: 'Monday', id: 3, name: 'Plank', duration: '30s' }
    ],
    [
      { dayId: 2, dayName: 'Tuesday', id: 4, name: 'Jumping Jacks', reps: 30 },
      { dayId: 2, dayName: 'Tuesday', id: 5, name: 'Lunges', reps: 20 },
      { dayId: 2, dayName: 'Tuesday', id: 6, name: 'Sit-ups', reps: 25 }
    ],
    [
      { dayId: 3, dayName: 'Wednesday', id: 7, name: 'Burpees', reps: 15 },
      { dayId: 3, dayName: 'Wednesday', id: 8, name: 'Mountain Climbers', reps: 20 },
      { dayId: 3, dayName: 'Wednesday', id: 9, name: 'Plank Jacks', reps: 20 }
    ],
    [
      { dayId: 4, dayName: 'Thursday', id: 10, name: 'High Knees', reps: 30 },
      { dayId: 4, dayName: 'Thursday', id: 11, name: 'Triceps Dips', reps: 15 },
      { dayId: 4, dayName: 'Thursday', id: 12, name: 'Leg Raises', reps: 20 }
    ],
    [
      { dayId: 5, dayName: 'Friday', id: 13, name: 'Bicycle Crunches', reps: 25 },
      { dayId: 5, dayName: 'Friday', id: 14, name: 'Calf Raises', reps: 20 },
      { dayId: 5, dayName: 'Friday', id: 15, name: 'Reverse Lunges', reps: 16 }
    ],
    [
      { dayId: 6, dayName: 'Saturday', id: 16, name: 'Jump Rope', reps: 100 },
      { dayId: 6, dayName: 'Saturday', id: 17, name: 'Wall Sit', duration: '45s' },
      { dayId: 6, dayName: 'Saturday', id: 18, name: 'Russian Twists', reps: 30 }
    ],
    [
      { dayId: 7, dayName: 'Sunday', id: 19, name: 'Stretching', duration: '5m' },
      { dayId: 7, dayName: 'Sunday', id: 20, name: 'Yoga Flow', duration: '10m' },
      { dayId: 7, dayName: 'Sunday', id: 21, name: 'Walking', duration: '20m' }
    ]
  ];
}

function addWorkoutDay(dayExercises) {
  workout.push(dayExercises);
}

function addExercise(dayId, exercise) {
  const day = workout.find(dayExercises => dayExercises[0]?.dayId === dayId);
  if (day) {
    day.push(exercise);
  } else {
    workout.push([exercise]);
  }
}

function getWorkout() {
  try {
    if (!workout || workout.length === 0) {
      throw new Error('Workout data is not initialized.');
    }
  } catch (error) {
    console.error('Error retrieving workout:', error.message);
    return [];
  }
  return workout;
}

function getWorkoutByDay(dayId) {
  try {
    return workout.find(dayExercises => dayExercises[0]?.dayId === dayId) || null;
  } catch (error) {
    console.error('Error retrieving workout by day:', error.message);
    return null;
  }
}   


module.exports = {
  initSampleWorkouts,
  addWorkoutDay,
  addExercise,
  getWorkout,
  getWorkoutByDay,
};
