var QUE = require("../model/question")

exports.AddQue = async (req, res, next) => {
    try {
      if (!req.body.que || !req.body.option || !req.body.answer || !req.body.category) {
        throw new error("Please enter valid feild")
      }
      let data = (await QUE.create(req.body))
  
      res.status(201).json({
        status: "Success",
        Message: "Data Added",
        data: data
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }

  exports.ShowQue = async (req, res, next) => {
    try {
      let data = await QUE.find().populate('category');
  
      res.status(201).json({
        status: "Success",
        Message: "Data Found",
        data: data
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }

  exports.UpdateQue = async (req, res, next) => {
    try {
      let data = await QUE.findByIdAndUpdate(req.query.id, req.body);
  
      if (!data) {
        throw new error("Data not Found")
      }
      res.status(201).json({
        status: "Success",
        Message: "Data Updated"
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }

  exports.DeleteQue = async (req, res, next) => {
    try {
      let data = await QUE.findByIdAndDelete(req.query.id);
      
      if (!data) {
        throw new error("Data not Found")
      }
      res.status(200).json({
        status: "Success",
        message : "Data Deleted"
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message: error.message
      })
    }
  
  }