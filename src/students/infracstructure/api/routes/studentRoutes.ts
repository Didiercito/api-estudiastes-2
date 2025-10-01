import { Router } from "express";
import { studentCreateController, studentDeleteController, studentFindAllController, studentFindByIdController} from "../dependencies/dependencies"
export const studentRoutes = Router();

studentRoutes.post("/create", (req, res) => studentCreateController.run(req, res));
studentRoutes.get("/all", (req, res) => studentFindAllController.run(req, res));
studentRoutes.get("/:id", (req, res) => studentFindByIdController.run(req, res));
studentRoutes.delete("/delete/:id", (req, res) => studentDeleteController.run(req, res));