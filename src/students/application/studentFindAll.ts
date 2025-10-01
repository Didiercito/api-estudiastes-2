import { StudentsEntitie } from "../domain/entities/studentsEntitie";
import { StudentsRepository } from "../domain/studentsRepository";

export class StudentFindAll {
  constructor(private studentsRepository: StudentsRepository) {}  
    async execute(): Promise<StudentsEntitie[]> {
        return this.studentsRepository.findAll();
    }
}   
