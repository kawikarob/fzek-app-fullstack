// The users resource
const express = require("express");
const router = express.Router();
const db = require("../../db");
const insertUser = require("../../queries/insertUser");
const { toHash } = require("../../utils/helpers");
const getSignUpEmailError = require("../../validation/getSignUpEmailError");
const getSignUpPasswordError = require("../../validation/getSignUpPasswordError");

// @route       GET api/v1/users
// @desc        Create a new user
// @access      Public
router.post("/", async (req, res) => {
   const { id, email, password, createdAt } = req.body;
   const emailError = await getSignUpEmailError(email);
   const passwordError = getSignUpPasswordError(password);
   if (emailError === "" && passwordError === "") {
      const user = {
         // id: id = just id
         id,
         email,
         password: await toHash(password),
         created_at: createdAt,
      };
      db.query(insertUser, user)
         .then((dbRes) => {
            console.log(dbRes);
         })
         .catch((err) => {
            console.log(err);
            res.status(400).json({ emailError, passwordError });
         });
   } else {
      res.status(400).json({ emailError, passwordError });
   }
});

module.exports = router;
