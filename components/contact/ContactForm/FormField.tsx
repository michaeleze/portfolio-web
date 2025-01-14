'use client';

interface FormFieldProps {
  type: 'text' | 'email' | 'textarea';
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (value: string) => void;
}

export function FormField({
  type,
  name,
  label,
  placeholder,
  required,
  value,
  onChange
}: FormFieldProps) {
  const baseClassName = "w-full px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800";
  
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
          className={baseClassName}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClassName}
        />
      )}
    </div>
  );
}