const express = require('express');
const router = express.Router();
const controller = require('./controller');


/*Create Sensor */
router.post("/",controller.create);

/*Get All Sensor Records */
router.get("/",controller.getAll);

/*Get Single Sensor Record By Id */
router.get("/:id",controller.getById);

/*Update Sensor Records */
router.put("/:id",controller.update);

/*Delete Sensor Records */
router.delete("/:id",controller.delete);

module.exports = router;