export default class GitHubController {
  constructor($http) {
    this.$http = $http;
    this.makeRequest();
    this.getRepos()
  }
  
  makeRequest() {
    this.$http.get('https://api.github.com/users/Myrenkar')
      .then(this.assignToScope.bind(this));
  }

  getRepos(){
   this.$http.get('https://api.github.com/users/Myrenkar/repos')
      .then(this.assignRepoToScope.bind(this));
  }
  
  assignRepoToScope(response){
    this.Repo = response.data;
     console.log(this.Repo);
  }
  
  assignToScope(response){
    this.User = response.data;
   // console.log(this.User);
  }
}