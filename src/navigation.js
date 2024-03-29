import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href:'#'
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'UX/UI',
          href: getPermalink('uxui', 'tag'),
        },
        {
          text: 'Code',
          href: getPermalink('code', 'tag'),
        },
      ],
    },
    {
      text: 'Contact me',
      href: 'mailto:druids8012@gmail.com',
    },
  ],
  actions: [{ text: 'My Github', href: 'https://github.com/Druidss', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'ME',
      links: [
        { text: 'UX/UI Designer', href: '#' },
        { text: 'developer', href: '#' },
        { text: 'programer', href: '#' },
        { text: 'AI KIND lab', href: 'https://kind-lab.de/' },
        { text: 'generative art', href: '#' },
        { text: 'fxhash', href: 'https://www.fxhash.xyz/' },
      ],
    },
    {
      title: 'E-MAIL',
      links: [
        { text: 'druids8012@gmail.com', href: 'mailto:druids8012@gmail.com' },
      ],
    },
    {
      title: 'SOCIALS NETWORKS',
      links: [
        { text: 'instagram', href: 'https://www.instagram.com/yuuuu.yx/' },
        { text: 'instragram art', href: 'https://www.instagram.com/soph4ri/' },
        { text: 'linkedin', href: 'https://www.linkedin.com/in/yuxuan-yang-8696a61b1/' },
      ],
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { text: 'About', href: '#' },
    //     { text: 'Blog', href: '#' },
    //     { text: 'Careers', href: '#' },
    //     { text: 'Press', href: '#' },
    //     { text: 'Inclusion', href: '#' },
    //     { text: 'Social Impact', href: '#' },
    //     { text: 'Shop', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/yuuuu.yx/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.instagram.com/yuuuu.yx/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Druidss' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
