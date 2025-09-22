import { useState } from "react";
import InputField from "../../components/InputField";

export interface TodoFormData {
  id?: number;
  title: string;
  description?: string;
  projectName?: string;
  contact?: string;
  email?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface Props {
  onAdd: (data: TodoFormData) => void | Promise<void>;
}

export default function TodoForm({ onAdd }: Props) {
  const [form, setForm] = useState<TodoFormData>({
    title: "",
    description: "",
    projectName: "",
    contact: "",
    email: "",
    name: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onAdd(form);
    setForm({
      title: "",
      description: "",
      projectName: "",
      contact: "",
      email: "",
      name: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 border rounded-md shadow"
    >
      <InputField
        label="Title"
        name="title"
        value={form.title ?? ""}
        onChange={handleChange}
        placeholder="Title (required)"
        required
      />

      <InputField
        label="Description"
        name="description"
        value={form.description ?? ""}
        onChange={handleChange}
        placeholder="Description"
        textarea
      />

      <InputField
        label="Project Name"
        name="projectName"
        value={form.projectName ?? ""}
        onChange={handleChange}
        placeholder="Project Name"
      />

      <InputField
        label="Contact"
        name="contact"
        value={form.contact ?? ""}
        onChange={handleChange}
        placeholder="Contact"
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={form.email ?? ""}
        onChange={handleChange}
        placeholder="Email"
      />

      <InputField
        label="Name"
        name="name"
        value={form.name ?? ""}
        onChange={handleChange}
        placeholder="Name"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Add Todo
      </button>
    </form>
  );
}
