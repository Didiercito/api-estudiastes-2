import { Request, Response } from "express"
import { StudentFindById } from "../../../application/studentFindById"

export class StudentFindByIdController {
    constructor(private studentFindById: StudentFindById) {}

    async run(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        const student = await this.studentFindById.execute(id);

        if (!student) {
            res.status(404).json({ message: "Student not found" });
            return;
        }

        res.json({ message: "Student found", status: true, body: { student: student} });
    }
}
