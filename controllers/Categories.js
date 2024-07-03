var CAT = require("../model/category")

exports.AddCat = async (req, res, next) => {
    try {
      if (!req.body.name || !req.body.image) {
        throw new Error("Please enter valid feild")
      }
      let data = await CAT.create(req.body);
  
      res.status(201).json({
        status: "Success",
        Message: "Data Added",
        data: data
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message : error.message
      })
    }
  
  }

  exports.ShowCat = async (req, res, next) => {
    try {
      let data = await CAT.find();
  
      res.status(201).json({
        status: "Success",
        Message: "Data Found",
        data: data
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message : error.message
      })
    }
  
  }

  exports.UpdateCat = async (req, res, next) => {
  
    try {
      let data = await CAT.findByIdAndUpdate(req.query.id, req.body);
      if (!data) {
        throw new error("Data not Found")
      }
      res.status(201).json({
        status: "Success",
        data: data
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message : error.message
      })
    }
  
  }

  exports.DeleteCat = async (req, res, next) => {
    try {
      console.log("hello");
      
      if (!req.query.id) {
        throw new Error("Data not Found")
      }
      let data = await CAT.findByIdAndDelete(req.query.id);
      if (!data) {
        throw new Error("Data not Found")
      }
      res.status(200).json({
        status: "Success",
        Message : "Data Deleted"
      })
    } catch (error) {
      res.status(404).json({
        status: "Fail",
        message : error.message
      })
    }
  
  }