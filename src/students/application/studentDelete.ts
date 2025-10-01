import { StudentsRepository } from "../domain/studentsRepository";

export class StudentDelete {
    constructor(private readonly studentsRepository: StudentsRepository) {}

    async execute(id: string) {
        await this.studentsRepository.delete(id);
    }
}