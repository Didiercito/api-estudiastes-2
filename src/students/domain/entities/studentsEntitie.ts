export class StudentsEntitie {
  constructor(
    public readonly _id: string | null,
    public readonly name: string,
    public readonly email: string,
    public readonly age: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}