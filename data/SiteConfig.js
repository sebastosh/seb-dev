const config = {
  siteTitle: 'Sebastien Sanz de Santamaria',
  siteTitleShort: 'Sebastien Sanz de Santamaria',
  siteTitleAlt: 'Sebastien Sanz de Santamaria',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'https://sebastiensanzdesantamaria.net',
  repo: 'https://github.com/sebastosh/seb-dev',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Web developer and cultural producer.',
  about: 'Full Stack Web Developer currently focused on Ruby, Javascript, and Front-End Frameworks. Experienced Co-Founder | Producer with a demonstrated history of working in the arts sector. Strives for creative process, mastering hard things, and nurturing an open and inclusive community.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  postDefaultCategoryID: 'Tech',
  newsletter: 'https://tinyletter.com/sebastiensanzdesantamaria',
  newsletterEmbed: '',
  userName: 'Seb',
  userEmail: 'seb@sebastiensanzdesantamaria.net',
  userTwitter: 'sebsanzdesant',
  menuLinks: [
    {
      name: 'About',
      link: '/about/',
    },
    {
      name: 'Projects',
      link: '/projects/',
    },
    {
      name: 'Blog',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config