const router = require("express").Router();
const addUserValidation=require("../validations/userValidation").addUserValidation;

const userC = require("../controllers/controllers");

router.post("/createUser",addUserValidation,userC.createUser);

router.get("/getUsers", userC.getAllUsers);

router.get("/getUsers/:queryStr", userC.getUser);

router.put("/updateUser/:id",addUserValidation,userC.updateUserById);

router.delete("/deleteUser/:id", userC.deleteUserById);

module.exports = router;