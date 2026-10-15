import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
{
  fname:  String,
  lname: String,
  email: String,
  phoneNumber: String
});

export default mongoose.model("Contacts", contactSchema);

