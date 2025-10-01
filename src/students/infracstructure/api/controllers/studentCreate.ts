import { Request, Response } from "express";
import { StudentCreate } from "../../../application/studentCreate";

export class StudentCreateController {
    constructor(private studentCreate: StudentCreate) {}

    async run(req: Request, res: Response): Promise<void> {
        const { name, email, age } = req.body;

        const newStudent = await this.studentCreate.execute({
            name,
            email,
            age
        });

        res.status(201).json({message:"Student create", status:true ,body:{newStudent}});
    }
}
