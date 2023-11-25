// Rename to nav data
// add dummy files for pricing, abt, policy
// add disbled links
export type NavDataObject = {
  href: string;
  label: string;
  iconClass: string; // Font Awesome icon name
};


// Navigation Sitemap
export const navData: Array<NavDataObject> = [
  {
    href: '/',
    label: 'Home',
    iconClass: 'fa-solid fa-house',
  },
  {
    href: '/about',
    label: 'About',
    iconClass: 'fa-solid fa-a',
  },
  {
    href: '/pricing',
    label: 'Pricing',
    iconClass: 'fa-solid fa-magnifying-glass-dollar'
  },
];
