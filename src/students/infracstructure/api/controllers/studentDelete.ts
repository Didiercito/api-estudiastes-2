import { Request, Response } from "express";
import { StudentDelete } from "../../../application/studentDelete";

export class StudentDeleteController {
  constructor(private studentDelete: StudentDelete) {}

  async run(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await this.studentDelete.execute(id);
      
      res.status(204).send();

    } catch (error: any) {
      if (error.message === "Student not found") {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
}