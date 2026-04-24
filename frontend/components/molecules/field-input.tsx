import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FieldInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export function FieldInput<T extends FieldValues>(props: FieldInputProps<T>) {
  const { label, name, control, placeholder, required, disabled } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name} className={cn({ required })}>
            {label}
          </FieldLabel>

          <Input
            {...field}
            id={field.name}
            disabled={disabled || formState.isSubmitting}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            className="text-sm md:h-12 md:text-base!"
          />

          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
