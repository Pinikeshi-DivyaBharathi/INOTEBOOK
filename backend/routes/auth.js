const express = require('express');
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/createUser',
            [body('name', 'Enter a valid name ').isLength({ min: 3 }),
             body('email','Enter a valid email ').isEmail(),
             body('password','Password must be atleast 5 chars').isLength({ min: 5 })],
             async (req, res) => {
            //if there are errors return badrequest and errors
                const errors = validationResult(req);
             if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            try{
            //check whether the user with this email already exists
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "Email already exists" });
             }
             
            user =await User.create({
                name:req.body.name,
                password:req.body.password,
                email:req.body.email,
            })
            user.save();
            res.json(user);
            }
           catch(error){
              console.error(error.message);
              res.status(500).send("some error occured");
           }
              
    })

module.exports = router