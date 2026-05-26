export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: number;
  color: string;
  image: string;
  href: string;
  internal: boolean;
};

export const projects: Project[] = [
  {
    slug: 'knowmeq',
    title: 'KnowMeQ - ArchieCPL',
    subtitle: 'reimagining the onboarding experience for CPL applicants',
    year: 2025,
    color: '#FF57F9',
    image: '/images/homepage/knowmeq.png',
    href: '/projects/knowmeq',
    internal: true,
  },
  {
    slug: 'renoworks',
    title: 'Renoworks',
    subtitle: 'tracking made easier for construction companies',
    year: 2024,
    color: '#5540FF',
    image: '/images/homepage/renoworks.png',
    href: '/projects/renoworks',
    internal: true,
  },
  {
    slug: 'finlocker',
    title: 'FinLocker',
    subtitle: 'intuitive way to comprehend finances',
    year: 2023,
    color: '#F88634',
    image: '/images/homepage/finlocker.png',
    href: '/projects/finlocker',
    internal: true,
  },
  {
    slug: 'homepod',
    title: 'Apple HomePod',
    subtitle: 'reimagining market proposition for Apple HomePod',
    year: 2024,
    color: '#3FB2D2',
    image: '/images/homepage/homepod.png',
    href: '/homepod.pdf',
    internal: false,
  },
  {
    slug: 'behere',
    title: 'Behere',
    subtitle: 'enhancing digital employee experience for corporations',
    year: 2023,
    color: '#5A7DFF',
    image: '/images/homepage/behere.avif',
    href: 'https://mankeeratproductde.wixsite.com/design-portfolio/behere-mobile-app',
    internal: false,
  },
  {
    slug: 'brewbuddy',
    title: 'BrewBuddy',
    subtitle: 'enabling coffee lovers to make informed decisions on coffee consumption',
    year: 2023,
    color: '#B98E75',
    image: '/images/homepage/brewbuddy.avif',
    href: 'https://mankeeratproductde.wixsite.com/design-portfolio/brewbuddy-mobile-app',
    internal: false,
  },
];
