import { StudentsEntitie } from "../../domain/entities/studentsEntitie";
import { StudentsRepository } from "../../domain/studentsRepository";
import { Collection, ObjectId } from "mongodb";
import { connectDB } from "../../../config/database";

export class StudentsRepositoryMongo implements StudentsRepository {
  private collection: Collection | null = null;

  private async getCollection(): Promise<Collection> {
    if (!this.collection) {
      this.collection = await connectDB();
    }
    return this.collection;
  }

  async create(student: Omit<StudentsEntitie, "_id">): Promise<StudentsEntitie> {
    const collection = await this.getCollection();
    const result = await collection.insertOne({
      ...student,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return new StudentsEntitie(
      result.insertedId.toString(),
      student.name,
      student.email,
      student.age,
      new Date(),
      new Date()
    );
  }

  async findAll(): Promise<StudentsEntitie[]> {
    const collection = await this.getCollection();
    const docs = await collection.find().toArray();
    return docs.map(
      (doc) =>
        new StudentsEntitie(
          doc._id.toString(),
          doc.name,
          doc.email,
          doc.age,
          doc.createdAt,
          doc.updatedAt
        )
    );
  }

  async findById(id: string): Promise<StudentsEntitie | null> {
    const collection = await this.getCollection();
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    if (!doc) return null;
    return new StudentsEntitie(
      doc._id.toString(),
      doc.name,
      doc.email,
      doc.age,
      doc.createdAt,
      doc.updatedAt
    );
  }

  async delete(id: string): Promise<void> {
    const collection = await this.getCollection();
    await collection.deleteOne({ _id: new ObjectId(id) });
  }
}