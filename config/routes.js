module.exports.routes = {

  'GET /': 'HomeController.home',
  'GET /signup': 'AuthController.signup',
  'GET /login': 'AuthController.login',
  'GET /search/:searchTerm': 'HomeController.search',
  //question-paper /Users/ritikjha/project/personal/api/controllers/QuestionPaper.js
  'GET /questionpaper': 'QuestionPaperController.getStarted',
  'GET /showWeightage': 'QuestionPaperController.showWeightage',
};
