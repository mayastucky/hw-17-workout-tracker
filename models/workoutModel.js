const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    //array of exercises 
    exercises: [
      {
        type: {
          type: String,
          required: "Please enter an exercise type.",
        },
        name: {
          type: String,
          required: "Please enter an exercise name.",
        },
        duration: {
          type: Number,
          required: "Please enter an exercise duration.",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
    //here we need to get the total duration information and set it to 0 so it doesn't come back undefined 
    //after this we need to edit our put route so we can add the duration the user inputs into what the user actually sees 
    totalDuration: {
      type: Number,
      default: 0,
    },
  },
  {
    //need virtuals because that's how we can retrieve all the information about the exercises
    toJSON: {
      virtuals: true,
    },
  }
);


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
