import { ElementType } from "react";
import { useFormContext, get } from "react-hook-form"; // 🔥 add get
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type IconConfig = {
  icon: ElementType;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

interface FormInputProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  type?: string;
  disabled?: boolean;
  startIcon?: IconConfig;
  endIcon?: IconConfig;
  className?: string;
  inputGroupClassName?: string;
  labelClassName?: string;
}

export function FormInput({
  name,
  label,
  placeholder,
  description,
  type = "text",
  disabled = false,
  startIcon,
  endIcon,
  className,
  inputGroupClassName,
  labelClassName,
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // 🔥 FIX: nested error support
  const error = get(errors, name)?.message as string | undefined;

  const renderIcon = (
    config?: IconConfig,
    align?: "inline-start" | "inline-end",
  ) => {
    if (!config) return null;

    const Icon = config.icon;

    return (
      <InputGroupAddon
        align={align}
        onClick={config.disabled ? undefined : config.onClick}
        className={cn(
          "transition",
          config.onClick &&
            !config.disabled &&
            "cursor-pointer hover:text-primary",
          config.disabled && "opacity-50 cursor-not-allowed",
          config.className,
        )}
      >
        <Icon className="text-muted-foreground" />
      </InputGroupAddon>
    );
  };

  return (
    <Field className={cn("space-y-1.5", className)}>
      <FieldLabel
        htmlFor={name}
        className={cn("text-slate-800 text-sm font-medium", labelClassName)}
      >
        {label}
      </FieldLabel>

      <InputGroup
        className={cn(
          "h-12 bg-white rounded-xl border border-slate-200/90 shadow-none focus-within:border-primary transition-colors",
          inputGroupClassName,
        )}
      >
        {renderIcon(startIcon, "inline-start")}

        <InputGroupInput
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className="px-3.5 text-slate-800 placeholder:text-slate-400 text-sm"
          {...register(name, {
            setValueAs:
              type === "number"
                ? (value) =>
                    value === "" || value === null || value === undefined
                      ? undefined
                      : Number(value)
                : undefined,
          })}
        />

        {renderIcon(endIcon, "inline-end")}
      </InputGroup>

      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
