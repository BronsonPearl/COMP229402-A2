import mongoose from "mongoose";
const qualificationSchema = new mongoose.Schema(
{
  title:  String,
  description: String,
  completionDate: Date
});

export default mongoose.model("Qualifications", qualificationSchema);

