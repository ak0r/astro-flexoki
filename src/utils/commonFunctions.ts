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

// export function getFormattedDate( date: string | number | Date ) {
//   const dateFormat: Intl.DateTimeFormatOptions = { 
//     day: "2-digit", 
//     month: "long", 
//     year: "numeric" 
//   };
// 	return new Date(date).toLocaleDateString(undefined, dateFormat);
// }

export function getShortDate( date: string | number | Date ) {
  const dateFormat: Intl.DateTimeFormatOptions = { 
    day: "2-digit", 
    month: "short",
  };
	return new Date(date).toLocaleDateString(undefined, dateFormat);
}

export function getFormattedDate(
  date: string | number | Date,
  format: 'long' | 'short' = 'long'
): string {
  const parsedDate = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;

  if (Number.isNaN(parsedDate.getTime())) {
    return ''; // fallback if invalid date
  }

  if (format === 'short') {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en-UK', options)
      .format(parsedDate)
      // .replace(/\s/, '-'); // e.g., "Mar 03" → "Mar-03"
  }

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
  return new Intl.DateTimeFormat('en-UK', options).format(parsedDate);
}