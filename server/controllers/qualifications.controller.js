import Qualifications from "../models/qualifications.model.js";

//crud - create, read ,update, delete

export const getAllQualifications = async (req, res) => {
try{
	const qualifications = await Qualifications.find();
	res.status(200).json(qualifications);
} catch (error)
{res.status(500).json({message: error.message});}
}


export const getQualificationsById = async (req, res) => {
try{
	const qualifications = await Qualifications.findById(req.params.id);
	res.status(200).json(qualifications);
} catch (error)
{res.status(404).json({message: error.message});}
}

export const createQualifications = async (req, res) => {

try{
	const newQualification = new Qualifications(req.body);
	const saveQualification = await newQualification.save();
	res.status(201).json(saveQualification);
} catch (error)
{res.status(500).json({message: error.message});}
}

export const updateQualifications = async (req, res) => {
  try {
    const updatedQualification = await Qualifications.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after' }
    );

    if (!updatedQualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    // Send the updated contact details back to the client
    return res.status(200).json(updatedQualification);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



export const deleteQualifications = async (req, res) => {

try{
	const deleteQualifications = await Qualifications.findByIdAndDelete(req.params.id);

	if(!deleteProject) {
		return res.status(404).json({message: "Qualification not found"});
	}
} catch (error){
	res.status(500).json({message: error.message});}
}
