var User = require("../models/user");
var passport = require("passport")

// GET /signup
function getSignup(request, response) {
  response.render("signup.hbs", { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response, next) {
  console.log("test")

  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect : '/',
    failureRedirect : '/signup',
    failureFlash : true
  });

  return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response) {
  response.render('login.hbs', { message: request.flash('loginMessage') });
}

// POST /login
function postLogin(request, response, next) {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
  });
  return loginProperty(request, response, next);
}

// GET /logout
function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

// Restricted page
// function secret(request, response){
  // response.render("secret.hbs");
// }






module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  // secret: secret
};
