// throw new Error("UserService: Uso de getUser() sin haber sido logueado");

angular.module('pfcApp')
	.factory('UserService', [function(){


		// Cuando el servicio UserService sea instanciado,
		// se tratara de cargar el ultimo usuario q inicio sesion
		// y se dejara en memoria para no acceder a localStorage cada vez
		var user
		if(window.localStorage.user){
			user= angular.fromJson(window.localStorage.user);
			console.log("cargando usuario desde localstorage");
		}

		return	{

			getUser: function(){
				return user;
			},

			isLoggedin: function(){
				return typeof user !== "undefined";
			},

			logout: function(){
				user= undefined;
				window.localStorage.removeItem('user');
				// locaStorage.clear() para borrar todo

				console.log("usuario se desloguea");
			},

			login: function(){
				// mandar credenciales al servidor. si hay exito, guardar en localstorage y en variable user

				var fakeResponse={name:"alejo"};

				user=fakeResponse;
				window.localStorage.user=angular.toJson(user);

				console.log("usuario se loguea");
			}

						
		};
	}])