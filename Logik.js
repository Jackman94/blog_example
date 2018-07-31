


var model = {
    user: "user1",
    courses:[{name: "html Css",    passed:true},
            {name: "javascript",  passed:true},
            {name: "advansed",    passed:true},
            {name:"jqury",        passed:false},
            {name:"angular2",      passed:false}
            ]
} ;
var listApp = angular.module("CourseApp",[]);

listApp.controller("courseCtrl" , function ($scope) {
    $scope.list = model;


    $scope.addNewCourse = function() {
        $scope.list.courses.push({
            name: $scope.courseName,
            passed: "false"
        });
    };
    $scope.setStyle = function (passed) {
        return passed ? "color:green" : "color:red ; font-weight: bold";
    };

    $scope.showText = function (passed) {
        return passed ? "Yes" : "No";
    }

} );


