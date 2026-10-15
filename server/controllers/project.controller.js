import Project from "../models/project.model.js";

//crud - create, read ,update, delete

export const getAllProjects = async (req, res) => {
try{
	const projects = await Project.find();
	res.status(200).json(projects);
} catch (error)
{res.status(500).json({message: error.message});}
}


export const getProjectById = async (req, res) => {
try{
	const projects = await Project.findById(req.params.id);
	res.status(200).json(projects);
} catch (error)
{res.status(404).json({message: error.message});}
}

export const createProject = async (req, res) => {

try{
	const newProject = new Project(req.body);
	const saveProject = await newProject.save();
	res.status(201).json(saveProject);
} catch (error)
{res.status(500).json({message: error.message});}
}

export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after' }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Send the updated contact details back to the client
    return res.status(200).json(updatedProject);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


export const deleteProject = async (req, res) => {

try{
	const deleteProject = await Project.findByIdAndDelete(req.params.id);

	if(!deleteProject) {
		return res.status(404).json({message: "project not found"});
	}
} catch (error){
	res.status(500).json({message: error.message});}
}
