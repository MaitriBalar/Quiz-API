var express = require('express');
var router = express.Router();
const CatController = require("../controllers/Categories")
const QueController = require("../controllers/Questions")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// --------------------------- Catagory Api ------------------------------------

router.post('/category/add', CatController.AddCat)

router.get('/category/show', CatController.ShowCat)

router.patch('/category/update', CatController.UpdateCat)

router.delete('/category/delete', CatController.DeleteCat)

//----------------------------- Questions Api ------------------------------------

router.post('/question/add', QueController.AddQue)

router.get('/question/show', QueController.ShowQue)

router.patch('/question/update', QueController.UpdateQue)

router.delete('/question/delete', QueController.DeleteQue)

module.exports = router;
