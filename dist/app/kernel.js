import { SRAHandler } from "./infraestructures/SRAHandler.js";
import { StudentService } from "./services/StudentService.js";
import { StudentRepository } from "./repositories/StudentRepository.js";
import { 
    Kernel as SRAKernel} from "../sra/kernel.js";
export class Kernel {
    getStudentService() {
        return this.studentService;
    }
    constructor(cookie) {
        this.sraKernel = new SRAKernel(cookie);
        this.sraHandler = new SRAHandler(this.sraKernel);
        this.studentRepository = new StudentRepository(this.sraHandler);
        this.studentService = new StudentService(this.studentRepository);
    }
}