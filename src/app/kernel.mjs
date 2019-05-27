import { type SRAHandlerInterface, SRAHandler } from "./infraestructures/SRAHandler.mjs";
import { type StudentServiceInterface, StudentService } from "./services/StudentService.mjs";
import { type StudentRepositoryInterface, StudentRepository } from "./repositories/StudentRepository.mjs";
import { 
    type KernelInterface as SRAKernelInterface,
    Kernel as SRAKernel} from "../sra/kernel.mjs";
export interface KernelInterface {
    sraKernel: SRAKernelInterface;
    studentRepository: StudentRepositoryInterface;
    studentService: StudentServiceInterface;
    sraHandler: SRAHandlerInterface;
    getStudentService(): StudentServiceInterface;
}
export class Kernel implements KernelInterface {
    sraKernel: SRAKernelInterface;
    studentRepository: StudentRepositoryInterface;
    studentService: StudentServiceInterface;
    sraHandler: SRAHandlerInterface;
    getStudentService(): StudentServiceInterface {
        return this.studentService;
    }
    constructor(cookie: string) {
        this.sraKernel = new SRAKernel(cookie);
        this.sraHandler = new SRAHandler(this.sraKernel);
        this.studentRepository = new StudentRepository(this.sraHandler);
        this.studentService = new StudentService(this.studentRepository);
    }
}