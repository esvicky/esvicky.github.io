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
    twitter: 'https://twitter.com/vicky_espinosa?s=08'
  },
  tags: {
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.'
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.'
    },
    python: {
      description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.'
    },
    java: {
      name: 'Java',
      description: 'Java is a general-purpose, concurrent, strongly typed, class-based object-oriented language. It is normally compiled to the bytecode instruction set and binary format defined in the Java Virtual Machine Specification.'
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.'
    }
  }
}