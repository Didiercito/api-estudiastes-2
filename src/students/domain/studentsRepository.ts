import { StudentsEntitie } from "./entities/studentsEntitie";


export interface StudentsRepository {
    create(student: Omit<StudentsEntitie, "_id" | "createdAt" | "updatedAt">): Promise<StudentsEntitie>;
    findAll(): Promise<StudentsEntitie[]>;
    findById(id: string): Promise<StudentsEntitie | null>;
    delete(id: string): Promise<void>;
}
