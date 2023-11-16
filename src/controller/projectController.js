

const projectModel = require("../model/projectModel");
const HttpError = require("../model/httpError");

exports.addProject = async (req, res) => {

    try {
        const projectData = req.body
        const { name, description, userId } = projectData;

        const createdProject = await projectModel.create(projectData);
        return res.status(201).send({ status: true, message: "place created Successfully", project: createdProject })

    } catch (error) {
        res.status(500).send({ status: false, message: "Error in  place creation", error: error.message });
    }
}


exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.find();
        return res.status(201).send({ status: true, message: "all Projects", projects })
    } catch (error) {
        res.status(500).send({ status: false, message: "Error in get all Projects", error: error.message });

    }
}

exports.deleteProject = async (req, res) => {
    try {

        const { projectId } = req.params;
        await projectModel.findByIdAndDelete(projectId);
        return res.status(200).send({ status: true, message: "pro deleted successfully" })

    } catch (error) {
        res.status(500).send({ status: false, message: "error in delete project", error: error.message });
    }
}

exports.getSingleProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        const projectData = await projectModel.findById(projectId);
        return res.status(200).send({ status: false, message: "place fectched successfully", projectData })

    } catch (error) {
        res.status(500).send({ status: false, message: "error in get single place", error: error.message });
    }
}



exports.updateProject = async (req, res) => {
    try {
        const { placeId } = req.params;
        const { name, description } = req.body
        console.log(placeId, name)

        const projectData = await projectModel.findByIdAndUpdate(placeId, { name: name, description: description}, { new: true });
        return res.status(200).send({ status: true, message: "place updated successfully", projectData })

    } catch (error) {
        res.status(500).send({ status: false, message: "error in updating single place", error: error.message });
    }
}