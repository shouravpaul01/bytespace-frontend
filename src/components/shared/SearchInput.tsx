"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { bodySizeClasses, labelSizeClasses } from "./typography";

export interface SearchInputProps {
  /** Current value of the input when controlled */
  value?: string;
  /** Callback invoked on text change */
  onChange?: (value: string) => void;
  /** Input placeholder text */
  placeholder?: string;
  /** Outer container className */
  className?: string;
  /** InputGroup wrapper pill className */
  inputWrapperClassName?: string;
  /** Direct input element className */
  inputClassName?: string;
  /** Search button className */
  buttonClassName?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Whether to show or hide the search button (defaults to true) */
  showButton?: boolean;
  /** Button label (defaults to "Search") */
  buttonText?: string;
  /** Callback fired when search button is clicked or Enter is pressed */
  onSearch?: (value: string) => void;
  /** Form submit callback */
  onSubmit?: (e: React.FormEvent) => void;
  /** Auto focus on input */
  autoFocus?: boolean;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Course, topic, creator",
  className,
  inputWrapperClassName,
  inputClassName,
  buttonClassName,
  disabled = false,
  showButton = true,
  buttonText = "Search",
  onSearch,
  onSubmit,
  autoFocus = false,
}: SearchInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) {
      setInternalValue(val);
    }
    onChange?.(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(currentValue);
    onSubmit?.(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn("flex items-center gap-3 sm:gap-4 w-full", className)}
    >
      {/* Shadcn InputGroup Pill */}
      <InputGroup
        className={cn(
          "flex-1 h-11 sm:h-13 bg-white rounded-full border-0 px-1 shadow-sm transition-all focus-within:ring-2 focus-within:ring-secondary/60",
          disabled && "opacity-60 cursor-not-allowed bg-white/80",
          inputWrapperClassName,
        )}
      >
        <InputGroupAddon className="pl-4 sm:pl-6 pr-0 text-muted-foreground select-none">
          <Search className="size-4 sm:size-5 text-[#9CA3AF] shrink-0" />
        </InputGroupAddon>

        <InputGroupInput
          value={currentValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          className={cn(
            "h-full  sm:text-base text-neutral-800 placeholder:text-[#82868E] px-3",
            bodySizeClasses.l,
            inputClassName,
          )}
        />
      </InputGroup>

      {/* Shadcn Button with Secondary Color */}
      {showButton && (
        <Button
          type="submit"
          variant="secondary"
          disabled={disabled}
          className={cn(
            "rounded-full h-11 sm:h-13 px-6 sm:px-8 ",
            labelSizeClasses.l,
            buttonClassName,
          )}
        >
          {buttonText}
        </Button>
      )}
    </form>
  );
}

export default SearchInput;
