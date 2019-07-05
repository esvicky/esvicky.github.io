/* Vendor imports */
const path = require('path');

module.exports = {
  pathPrefix: '/gatsby-blog',
  siteUrl: 'https://esvicky.github.io',
  siteTitle: 'Victoria Espinosa',
  siteDescription: 'Blog of a software engineer.',
  author: 'esvicky',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: path.resolve('src/helpers/embed.js'),
  pages: {
    home: '/',
    blog: 'blog',
    about: 'about',
    tag: 'tag',
    archive: 'archive'
  },
  social: {
    github: 'https://github.com/esvicky',
    linkedin: 'https://www.linkedin.com/in/victoria-alejandra-espinosa-gonzalez',
    rss: '/rss.xml'
  },
  tags: {
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.'
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.'
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.'
    }
  }
}