import { ToDoList } from '../components/ToDoList';

export default {
  title: 'ToDoList',
  component: ToDoList,
};

export const EmptyList = () => <ToDoList tasks={[]} />;

export const BasicList = () => <ToDoList tasks={['Task 1', 'Task 2', 'Task 3']} />;
