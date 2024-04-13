import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getTasks();
  }

  @Post('/tasks')
  createTask() {
    return 'Creating task';
  }

  @Put('/tasks')
  updateTask() {
    return 'Updating Task';
  }

  @Delete('/tasks')
  deleteTask() {
    return 'Deleting Task';
  }

  @Patch('/tasks')
  updateTaskStatus() {
    return 'Updating Status';
  }
}
