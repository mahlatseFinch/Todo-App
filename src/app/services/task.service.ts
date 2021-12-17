import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-taks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[]{
    return TASKS;
  }
}
