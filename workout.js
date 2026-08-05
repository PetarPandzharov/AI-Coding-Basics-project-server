let workout = [];

function addWorkout(workoutPlan) {
  workout.push(workoutPlan);
}

function getWorkout() {
  return workout;
}

module.exports = {
  addWorkout,
  getWorkout,
};
