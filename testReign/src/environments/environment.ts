export const environment = {
  production: false,
  log: {
    active: 'true',
    level: 'TRACE',
  },
  RESTservices: {
    news: {
      baseUrl: ' https://hn.algolia.com/api/v1/',
      search: 'search_by_date',
    },
  },
};
