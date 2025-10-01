import { StudentsEntitie } from "../domain/entities/studentsEntitie";
import { StudentsRepository } from "../domain/studentsRepository";

export class StudentFindById {
  constructor(private studentsRepository: StudentsRepository) {}

  async execute(id: string): Promise<StudentsEntitie | null> {
    return this.studentsRepository.findById(id);
  }
}
