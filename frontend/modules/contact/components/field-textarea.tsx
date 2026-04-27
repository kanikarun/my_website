import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

import { Textarea } from "@/components/ui/textarea";

interface FieldTextareaProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export function FieldTextarea<T extends FieldValues>(
  props: FieldTextareaProps<T>,
) {
  const { label, name, control, required, disabled, placeholder } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name} className={cn({ required })}>
            {label}
          </FieldLabel>
          <Textarea
            {...field}
            id={field.name}
            disabled={disabled || formState.isSubmitting}
            aria-invalid={fieldState.invalid}
            placeholder={placeholder}
            className="text-sm h-45 md:text-base!"
            rows={6}
          />
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
