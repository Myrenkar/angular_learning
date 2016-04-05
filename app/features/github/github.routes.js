export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./github.html'),
      controller: 'GitHubController',
      controllerAs: 'github'
    });
}