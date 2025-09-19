export interface Todo {
  id: number;
  title: string | { [key: string]: any }; // agar kabhi object aa jaye
  description?: string;
  projectName?: string;
  contact?: string;
  email?: string;
  name?: string;
}
