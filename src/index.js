import "./style.css";
import { projectRepository } from "./projectRepository";

const repository = projectRepository;
console.log(repository.createNewProject("testProject"));
console.log(repository.updateProject("0", {"name": "newProjectName"}));
repository.deleteProject("0");