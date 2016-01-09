var app = angular.module("contactApp",['firebase']);

app.constant('fbURL',"https://bootstraptest-rollen.firebaseio.com/");

app.factory("contactData",function($firebaseArray,fbURL){
    return $firebaseArray(new Firebase(fbURL));
});

app.controller("mainController",function($scope,$firebaseArray,contactData){
    $scope.text = "1234";
    $scope.contactDB = contactData;
    $scope.sendMessage = function(contactInfo){
        if (!contactInfo || !contactInfo.email)
            return;
        contactData.$add({
            name: contactInfo.name,
            email: contactInfo.email,
            subject: contactInfo.subject,
            message: contactInfo.message
        });
/*        
        contactInfo.name = "";
        contactInfo.email = "";
        contactInfo.subject = "";
        contactInfo.message = "";
*/
    };
});

