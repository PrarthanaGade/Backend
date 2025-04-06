import mongoose from 'mongoose'
import { Hospital } from './hospital.modules';

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type:Numbers ,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: fresher,
    },
    workInHospitals:[{
        types: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
]
},{timestamp: true});

export const Doctor = mongoose.models("Doctor",doctorSchema);