import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

interface FieldSelectionProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  options: string[];
  disabled?: boolean;
  required?: boolean;
}

export function FieldSelect<T extends FieldValues>(
  props: FieldSelectionProps<T>,
) {
  const { label, name, control, options, disabled, required } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel className={cn({ required })}>{label}</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {options.map((opt) => {
              const isSelected = field.value === opt;
              return (
                <Button
                  key={opt}
                  type="button"
                  disabled={disabled || formState.isSubmitting}
                  onClick={() => field.onChange(opt)}
                  className={cn({
                    "bg-gray-100 dark:bg-gray-100/10 hover:bg-gray-100 dark:hover:bg-gray-100/10 text-gray-500 dark:text-gray-300":
                      !isSelected,
                  })}
                >
                  {opt}
                </Button>
              );
            })}
          </div>

          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
