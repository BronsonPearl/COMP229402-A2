import express from "express";
import {createQualifications, deleteQualifications, getAllQualifications, getQualificationsById, updateQualifications} from "../controllers/qualifications.controller.js";
const router = express.Router();

//REST API

router.get("/", getAllQualifications);
router.get("/:id", getQualificationsById);

router.post("/", createQualifications);

router.put("/:id", updateQualifications);

router.delete("/:id", deleteQualifications);

export default router;
