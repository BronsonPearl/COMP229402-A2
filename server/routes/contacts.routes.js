import express from "express";
import {createContacts, deleteContact, getAllContacts, getContactsById, updateContacts} from "../controllers/contacts.controller.js";
const router = express.Router();

//REST API

router.get("/", getAllContacts);
router.get("/:id", getContactsById);

router.post("/", createContacts);

router.put("/:id", updateContacts);

router.delete("/:id", deleteContact);

export default router;
