export const ANIMATION_SPEED = 0.5;
export const TOAST_VISIBILITY_TIME = 3000;
export const NAVBAR_HEIGHT = "4.2rem";
export const TEXT_ONLY_REGEX = /^[a-zA-Z\s\-]+$/;

export const MAX_LENGTHS = {
  title: 255,
  content: 5000,
  author: 100,
} as const;

/**
 * Defines the user-facing names for validation messages.
 * Keys must match the lower-cased field key.
 */
export const FIELD_DISPLAY_NAMES = {
  title: "Post title",
  content: "Post content",
  author: "Author name",
} as const;

export type FieldNameKey = keyof typeof MAX_LENGTHS;
