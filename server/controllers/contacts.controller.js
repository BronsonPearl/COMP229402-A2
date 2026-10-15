import Contacts from "../models/contacts.model.js";

//crud - create, read ,update, delete

export const getAllContacts = async (req, res) => {
try{
	const contacts = await Contacts.find();
	res.status(200).json(contacts);
} catch (error)
{res.status(500).json({message: error.message});}
}


export const getContactsById = async (req, res) => {
try{
	const contacts = await Contacts.findById(req.params.id);
	res.status(200).json(contacts);
} catch (error)
{res.status(404).json({message: error.message});}
}

export const createContacts = async (req, res) => {

try{
	const newContacts = new Contacts(req.body);
	const saveContacts = await newContacts.save();
	res.status(201).json(saveContacts);
} catch (error)
{res.status(500).json({message: error.message});}
}

export const updateContacts = async (req, res) => {
  try {
    // Replaced { new: true } has been deprecated
    const updatedContact = await Contacts.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after' }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Send the updated contact details back to the client
    return res.status(200).json(updatedContact);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteContact = async (req, res) => {

try{
	const deleteContact = await Contacts.findByIdAndDelete(req.params.id);

	if(!deleteContact) {
		return res.status(404).json({message: "Contact not found"});
	}
} catch (error){
	res.status(500).json({message: error.message});}
}
