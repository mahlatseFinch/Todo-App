import { TASKS } from "./mock-taks";

export interface Task {
    id?: number;
    name: string;
    day: string;
    location: string;
    reminder: boolean;
}