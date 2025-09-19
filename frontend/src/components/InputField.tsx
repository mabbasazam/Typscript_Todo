// src/components/InputField.tsx
import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  textarea?: boolean;
}

export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  textarea = false,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="border p-2 rounded-md resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="border p-2 rounded-md"
        />
      )}
    </div>
  );
}
