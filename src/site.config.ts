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
    { name: 'GitHub', href: 'https://github.com/yourusername', icon: 'hugeicons:github' },
    { name: 'Twitter', href: 'https://twitter.com/yourhandle', icon: 'hugeicons:new-twitter' },
    { name: 'Instagram', href: 'https://instagram.com/yourprofile', icon: 'hugeicons:instagram' },
    { name: 'YouTube', href: 'https://youtube.com/in/yourprofile', icon: 'hugeicons:youtube' },
  ],
  
  // Navigation links for the main site menu
  nav: [
    { title: 'Articles', href: '/articles' },
    { title: 'Tags', href: '/tags' },
    { title: 'Notes', href: '/notes' },
    { title: 'About', href: '/about' },
  ],

  // Footer links for additional navigation
  footerLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Use', href: '/terms' },
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
