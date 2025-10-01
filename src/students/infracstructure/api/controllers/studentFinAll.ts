import { Request, Response } from "express";
import { StudentFindAll } from "../../../application/studentFindAll";

export class StudentFindAllController {
    constructor(private studentFindAll : StudentFindAll){}

    async run (req: Request, res: Response){
        const students = await this.studentFindAll.execute();
        res.json({message:"Students found", status:true ,body:{students: students}}); 
    }
}