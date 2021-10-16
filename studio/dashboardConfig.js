export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '616a6179ca5b3490cb0e0e5d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-kg465nnp',
                  apiId: 'd84b006c-3615-4a1c-952a-9bf810cad569'
                },
                {
                  buildHookId: '616a617961d550a855ea2031',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-58u5fgfe',
                  apiId: '4f78b94e-5a9c-48e7-a498-568734eea223'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/issacting93/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-58u5fgfe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
