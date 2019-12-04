export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de6fb7c5408fc09568637e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-mtdjkepa',
                  apiId: '3997c6ed-ad4e-44df-ac70-4ea1b7f4ac51'
                },
                {
                  buildHookId: '5de6fb7c912ddfd41a258978',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gn712hxf',
                  apiId: 'fbeb86a9-dea7-4e3c-bf55-7a921190e4ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/educsis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gn712hxf.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
