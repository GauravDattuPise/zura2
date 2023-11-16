
const { Router } = require("express");
const router = Router();

const { authentication } = require("../middleware/chekAuthentication")

const { getAllProjects, addProject, getSingleProject, updateProject, deleteProject } = require("../controller/projectController")

// to get all projects
router.get("/getAllProjects", getAllProjects);

// to create project
router.post("/addProject", addProject);

// get single project
router.get("/getProject/:projectId", getSingleProject)

// update single project
router.patch("/updateProject/:projectId", updateProject)

// delete project
router.delete("/deleteProject/:projectId", deleteProject)

module.exports = router


