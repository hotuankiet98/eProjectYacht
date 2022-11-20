
var loginBtn = document.querySelector('.js-login')
var signIn = document.querySelector('.js-sign-in')
var signInContainer = document.querySelector('.js-signin-container')
var signInClose = document.querySelector('.js-signin-close')

var registerBtn = document.querySelector('.js-register')
var signUp = document.querySelector('.js-sign-up')
var signUpContainer = document.querySelector('.js-sign-up-container')
var signUpClose = document.querySelector('.js-signup-close')

var callBtn = document.querySelector('.js-call-btn')
var callRequest = document.querySelector('.js-call-request')
var callRequestContainer = document.querySelector('.js-call-container')

var callRequestClose = document.querySelector('.js-call-close')

var txt


function showSignIn() {
    signIn.classList.add('open');
}
function showSignUp() {
    signUp.classList.add('open');
}
function showCallRequest() {
    callRequest.classList.add('open');
}


function hideSignIn() {
    signIn.classList.remove('open');
}
function hideSignUp() {
    signUp.classList.remove('open');
}
function hideCallRequest() {
    callRequest.classList.remove('open');
}

var mainApp={
  
handleEvent(){
    loginBtn.addEventListener('click', showSignIn)
    signInClose.addEventListener('click', hideSignIn)
    signIn.addEventListener('click', hideSignIn)
    signInContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    })

    //sign-up
    registerBtn.addEventListener('click', showSignUp)
    signUpClose.addEventListener('click', hideSignUp)
    signUp.addEventListener('click', hideSignUp)
    signUpContainer.addEventListener('click', function(event) {
        event.stopPropagation()
    })

    
  
    


},
angularJsEvent(){
    var app=angular.module('myApp',[]);
    app.config(['$compileProvider',
        function($compileProvider) {
            $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
        }]);
    app.controller("myController",function($scope,$http,$window){
        $http.get('yachts.json').then(function(response){
            $scope.list=response.data.yachtsList;
            $scope.openEvent=function(item){
                    $scope.openActive=item;    
            }
            $scope.closeEvent=function(item){
                if($scope.openActive==item){
                    $scope.openActive='';    
                }  
            }
            $scope.favoriteNum=0;
            $scope.showAddBtn=function(item){
                if($scope.showAdd==true){
                    $scope.showAdd=!$scope.showAdd;
                    $scope.favoriteNum=0;
                    $scope.hideFavoriteTable=false;
                }else{
                    $scope.showAdd=true;
                    $scope.favoriteNum=1;
                    $scope.hideFavoriteTable=true;
                }
            }
            $scope.senEmail=function(){
                emailjs.send("service_ial1gm1","template_aua3mki",{
                    from_name: "Fanstatic Yacht",
                    to_name: $scope.myName,
                    email_id: $scope.myEmail,
                    phone: $scope.myPhone,
                    }).then(function(res){
                        alert("Thank you !Information has been sent to your email!"+res.status)
                    });
            }

        })
        $scope.downloadInfo=function(item){
            var jsObj = $scope.list[item-1];
            
              var blob = new Blob([angular.toJson(jsObj)], {
                type: 'text/json;charset=utf-8'
              });
            
              var downloadLink = angular.element('<a></a>');
            
              var url = $window.URL || $window.webkitURL;
            
              downloadLink.attr('href', url.createObjectURL(blob));
            
              downloadLink.attr('download', 'info.doc');
            
              downloadLink[0].click();
        }
    });
   
},

start(){
    this.angularJsEvent();
    this.handleEvent();
    }
   

    
}
mainApp.start()


