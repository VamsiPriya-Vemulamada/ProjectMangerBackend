import mongoose  from "mongoose";
import { taskSchema } from "./Tasks.js"
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type:String,
    },
    createdAt:
    {
        type: Date,
        default: Date.now()
    },
    startDate:{
        type:Date
    },
    endDate:{
        type:Date,
    },
    tasks: [taskSchema],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true },
);
// index
//pre save middlewares
//methods

const Project = new mongoose.model('project',projectSchema);
export default Project;
