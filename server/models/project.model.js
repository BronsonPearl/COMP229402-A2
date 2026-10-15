import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
{
  name:  String,
	  description: String,
	completionDate: Date
});

export default mongoose.model("Project", projectSchema);

