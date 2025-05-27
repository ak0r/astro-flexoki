import { clsx, type ClassValue } from "clsx";

export function slugify(inputText?: string) {

  if (!inputText) return '';
  const slug = inputText.toLowerCase().trim();

  return slug
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
}

export function getFormattedDate( date: string | number | Date ) {
  const dateFormat: Intl.DateTimeFormatOptions = { 
    day: "2-digit", 
    month: "long", 
    year: "numeric" 
  };
	return new Date(date).toLocaleDateString(undefined, dateFormat);
}

export function getShortDate( date: string | number | Date ) {
  const dateFormat: Intl.DateTimeFormatOptions = { 
    day: "2-digit", 
    month: "short",
  };
	return new Date(date).toLocaleDateString(undefined, dateFormat);
}

