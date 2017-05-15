schoolApp
.controller('homeController', function ($scope, Article) {

    Article.getByKey("HIST")
       .then(function (article) {
           $scope.History = article.Content;

       }
       , function (error) {

       }
       );

    $scope.html = "<h1>Hello122</h1>";

});