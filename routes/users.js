// routes > users.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/users');
});

router.get('/register', (req, res) => {
    res.render('pages/register');
});

router.post('/register', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let cfm_pwd = req.body.cfm_pwd;

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Please enter a valid email').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('cfm_pwd', 'Confirm Password is required').notEmpty();
    req.checkBody('cfm_pwd', 'Confirm Password must matches with Password').equals('req.body.password');

    let errors = req.validationErrors();
    if(errors){
        res.render('pages/register',{errors: errors});
    }
    else{
        console.log('Success');
    }
});
export default router;