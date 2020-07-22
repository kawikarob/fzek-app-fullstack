// The all exercises resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const selectAllExercises = require("../../queries/selectAllExercises.js");

// @route       GET api/v1/users
// @desc        Get a all exercises by search term and order
// @access      Public

router.get("/", (req, res) => {
   console.log(req.query);
   const { searchTerm, order } = req.query;
   let constructedSearchTerm;
   if (searchTerm === "" || searchTerm === undefined) {
      constructedSearchTerm = "%%";
   } else {
      constructedSearchTerm = `%${searchTerm}%`;
   }
   // mySql escaping query values
   db.query(selectAllExercises, [constructedSearchTerm, order])
      .then((exercises) => {
         const camelCaseExercises = exercises.map((exercise) => {
            return {
               id: exercise.id,
               name: exercise.name,
               muscles: exercise.muscles,
               url: exercise.url,
            };
         });
         res.json(camelCaseExercises);
      })
      .catch((err) => {
         console.log(err);
         res.status(400).json(err);
      });
});

module.exports = router;
