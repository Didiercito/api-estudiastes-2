import { StudentsRepositoryMongo } from "../../adapters/studentAdapterMongo";
import { StudentCreate } from "../../../application/studentCreate";
import { StudentDelete } from "../../../application/studentDelete";
import { StudentFindAll } from "../../../application/studentFindAll";
import { StudentFindById } from "../../../application/studentFindById";
import { StudentCreateController } from "../controllers/studentCreate";
import { StudentDeleteController } from "../controllers/studentDelete";
import { StudentFindAllController } from "../controllers/studentFinAll";
import { StudentFindByIdController } from "../controllers/studentFindById";

const usersRepository = new StudentsRepositoryMongo();

const studeCreate = new StudentCreate(usersRepository);
const studentFindAll = new StudentFindAll(usersRepository);
const studentFindById = new StudentFindById(usersRepository);
const studentDelete = new StudentDelete(usersRepository);

export const studentCreateController = new StudentCreateController(studeCreate);
export const studentFindAllController = new StudentFindAllController(studentFindAll);
export const studentFindByIdController = new StudentFindByIdController(studentFindById);
export const studentDeleteController = new StudentDeleteController(studentDelete);