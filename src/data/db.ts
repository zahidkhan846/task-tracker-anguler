import { Task } from '../app/models/Task';

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Some Random Job',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Some Second Job',
    day: 'May 10th at 10:30am',
    reminder: true,
  },
  {
    id: 3,
    text: 'Some Third Job',
    day: 'June 5th at 2:30am',
    reminder: false,
  },
];
