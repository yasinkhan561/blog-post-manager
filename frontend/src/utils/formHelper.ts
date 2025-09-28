import {
  MAX_LENGTHS,
  FIELD_DISPLAY_NAMES,
  FieldNameKey,
  TEXT_ONLY_REGEX,
} from "@/constants/common";

export const isRequired = (value: string | undefined | null): boolean => {
  return !value || String(value).trim() === "";
};

export const isNotTextOnly = (value: string): boolean => {
  if (!value.trim()) return false;
  return !TEXT_ONLY_REGEX.test(value.trim());
};

export const isTooLong = (value: string, maxLength: number): boolean => {
  return value.length > maxLength;
};

/**
 * Validates a text input field for required, length, and format constraints.
 * It automatically determines the maxLength and display name based on the key.
 * @param key The lower-cased key of the field ('title', 'content', or 'author').
 * @param value The input string.
 * @returns An error message string, or "" if validation passes.
 */
export const validateTextField = (key: FieldNameKey, value: string): string => {
  const maxLength = MAX_LENGTHS[key];
  const fieldName = FIELD_DISPLAY_NAMES[key];

  const requiresTextOnly = key === "author";

  if (isRequired(value)) {
    return `${fieldName} is required.`;
  }

  if (isTooLong(value, maxLength)) {
    return `${fieldName} cannot exceed ${maxLength} characters.`;
  }

  if (requiresTextOnly && isNotTextOnly(value)) {
    return `${fieldName} can only contain letters and spaces.`;
  }

  return "";
};
