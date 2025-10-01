import { StudentsRepository } from "../domain/studentsRepository";

export class StudentCreate {
    constructor(private readonly studentsRepository: StudentsRepository) {}

    async execute(student: {
        name: string;
        email: string;
        age: number;
    }) {
        const newStudent = await this.studentsRepository.create(student);
        return newStudent;
    }
}
