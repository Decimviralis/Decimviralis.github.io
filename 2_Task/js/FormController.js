testApp.controller('FormController',
    function FormController($scope, $http){
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid) {
				alert(answer.author + " " + answer.answer + ", ваш ответ сохранен");
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
