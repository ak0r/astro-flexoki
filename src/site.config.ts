// This file contains the configuration for the site, including metadata, navigation links, and social media profiles.

import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  title: 'Astro Flexoki',
  description: 'A flexible and modern Astro starter template',
  // Replace 'John Doe' with your name or the name of the site owner
  author: 'John Doe',
  // Replace 'en' with the primary language of your site
  lang: 'en',
  // Replace 'en_IN' with the locale you want to use for Open Graph metadata
  ogLocale: 'en_IN',
  // Replace with your site's URL
  url: 'https://example.com',

  date: {
    locale: 'en-IN',
    options: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },

  // Site logo configuration
  siteLogo: {
    // Replace with the path to your logo image
    image: '/assets/logo.svg',
    alt: 'Astro Flexoki Logo',
    text: 'Astro Flexoki',
  },

  // Replace with your social media links
  socials: [
    { name: 'GitHub', link: 'https://github.com/yourusername', icon: 'github' },
    { name: 'Twitter', link: 'https://twitter.com/yourhandle', icon: 'twitter' },
    { name: 'Instagram', link: 'https://instagram.com/yourprofile', icon: 'instagram' },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/yourprofile', icon: 'linkedin' },
  ],
  
  // Navigation links for the main site menu
  nav: [
    { title: 'Articles', href: '/articles' },
    { title: 'Projects', href: '/projects' },
    { title: 'Notes', href: '/notes' },
    { title: 'About', href: '/about' },
  ],

  // Footer links for additional navigation
  footerLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Use', href: '/terms' },
    { title: 'Contact', href: '/contact' },
    { title: 'Sitemap', href: '/sitemap.xml' },
  ],

  // Site settings for customization
  settings: {
    defaultTheme: 'light', // Options: 'light', 'dark', 'auto'
    accentColor: 'orange', // Options: 'orange', 'green', 'blue', 'red', 'yellow', 'cyan', 'magenta', 'purple'
    postsPerPage: 6,
    copyright: '© 2025 Astro Flexoki. All rights reserved.',
    showNewsletterSignup: true,
  },
};
