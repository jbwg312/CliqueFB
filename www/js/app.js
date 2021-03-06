'Use Strict';
angular.module('App', ['ionic', 'ngStorage', 'ngCordova', 'firebase', 'pascalprecht.translate', 'ngMessages'])
	.config(function($stateProvider, $urlRouterProvider, $translateProvider, $translateStaticFilesLoaderProvider) {
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('sanitize');
		$translateProvider.useStaticFilesLoader({
			prefix: '/langs/lang-',
			suffix: '.json'
		});

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'views/login/login.html',
				controller: 'loginController'
			})
			.state('forgot', {
				url: '/forgot',
				templateUrl: 'views/forgot/forgot.html',
				controller: 'forgotController'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'views/register/register.html',
				controller: 'registerController'
			})
			.state('home', {
				url: '/home',
				templateUrl: 'views/home/home.html',
				controller: 'homeController'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile/profile.html',
				controller: 'profileController'
			})
			.state('chatNode', {
				url: '/chatNode',
				templateUrl: 'views/chatNode/chatNode.html',
				controller: 'chatNodeController'
			})
      .state('create',{
        url:'/create',
        templateUrl: 'views/create/create.html',
        controller: 'createController'
      })
      .state('settings',{
        url:'/settings',
        templateUrl: 'views/settings/settings.html',
        controller: 'settingsController'
      })
			.state('/chat/:chatId',{
				url:'/chat/:chatId',
        templateUrl: 'views/chat/chat.html',
        controller: 'chatController'
			})
			.state('/chat/:chatId/interval',{
				url:'/chat/:chatId/interval',
				templateUrl: 'views/interval/interval.html',
				controller: 'intervalController'
			})
		$urlRouterProvider.otherwise("/login");
	})

.constant('FURL', {
		apiKey: "AIzaSyDpcHjxA_n9ZS1PPSTbSUnSI2PdwkbVu64",
		authDomain: "clique-82cee.firebaseapp.com",
		databaseURL: "https://clique-82cee.firebaseio.com",
		storageBucket: "clique-82cee.appspot.com",
	})
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function(FURL) {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	});
