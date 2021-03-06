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
    'web developer, cultural producer, and helper of artists.',
  about: 'Full Stack Web Developer with strengths in Javascript, Node.js,  React, and Rails. Experienced Co-Founder | Cultural Producer with a demonstrated history of  history of working in the visual arts field in New York City. Brazenly wide-eyed about creative processes, mastering hard things, and nurturing open and inclusive communities!',
  techSkills: ['Javascript', 'Ruby', 'React', 'Ruby on Rails', 'Node.js', 'Gatsby', 'RESTful APIs', 'JSON', 'MySQL', 'PostgreSQL', 'MongoDB', 'PHP', 'Wordpress', 'HTML', 'CSS','Git', 'Figma', 'Adobe'],
  resume: 'SebastienSanzdeSantamariaResumes.pdf' ,
  siteRss: '/rss.xml',
  googleAnalyticsID: '',
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
