testApp.controller('FormController',
    function FormController($scope, $http){
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid) {
                console.log(answer.author + ", ваш ответ сохранен");
                $http.post(
                    'localhost',
                    JSON.stringify(answer)
                ).success(function (response) {/*success callback*/
                    console.log('success, unreachable')})
            } else {
                alert("Введите дату в формате XX/XX/XXXX");
            }
        };
    });