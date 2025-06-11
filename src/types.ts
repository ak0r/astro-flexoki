// Types for the site configuration, including metadata, navigation, and social links.

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  lang: string;
  ogLocale: string;
  url: string;
  date: {
    locale: string | string[];
    options: Intl.DateTimeFormatOptions;
  };
  siteLogo?: SiteLogo;
  socials: SocialLink[];
  nav?: NavItem[];
  footerLinks?: NavItem[];
  settings?: SiteSettings;
}

export interface SiteLogo {
  image: string;
  alt: string;
  text?: string; // Optional fallback or branding text
}

export interface SocialLink {
  name: string;
  link: string;
  icon: string;
}

export interface NavItem {
  title: string;
  href: string;
}

export interface SiteSettings {
  accentColor: string;
  postsPerPage: number;
  copyright: string;
  showNewsletterSignup?: boolean;
  enableDarkMode?: boolean;
}
