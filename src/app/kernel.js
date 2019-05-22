import { type SRAHandlerInterface, SRAHandler } from "./infraestructures/SRAHandler.js";
import { type StudentServiceInterface, StudentService } from "./services/StudentService.js";
import { type StudentRepositoryInterface, StudentRepository } from "./repositories/StudentRepository.js";
import { 
    type KernelInterface as SRAKernelInterface,
    Kernel as SRAKernel} from "../sra/kernel.js";
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