export default function routes($stateProvider) {
  $stateProvider
    .state('github', {
      url: '/',
      template: require('./github.html'),
      controller: 'GitHubController',
      controllerAs: 'github'
    });
}