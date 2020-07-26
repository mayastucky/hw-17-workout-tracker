const db = require("../models");
const express = require("express");
const router = express.Router();
// const { Workout } = require("../models");

//github.com/Jupton2020/Workout-Tracker has great and easy to understand api-routes for understanding exactly what routes are needed

module.exports = function (app) {
  //get route for all my workouts
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //post route to create a new workout
  app.post("/api/workouts", function (req, res) {
    db.Workout.create({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  //does the same thing as above but for the range
  app.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  app.post("/api/workouts/range", function (req, res) {
    db.Workout.create({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  //allows users to update pre-existing workouts
  //documentation for findByIdAndUpdate:
  //https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
  app.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(
      //first arg is the ID, second is what you want to update
      { _id: req.params.id },
      { exercises: req.body }
    )
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
};
