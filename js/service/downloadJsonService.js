define(['js/service/services'], function(services){
  services.service('downloadJsonService', function($rootScope, dataSource){
     return new JsonService( dataSource);
  });
});


var JsonService = function(dataSource){
  this.dataSource = dataSource;
  this.getJson = function( ){
    var request = dataSource.getItems( 'https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9' );
		return ( request.then( handleSuccess, handleError ) );
  };

  /* Functions From here */
function handleError ( response ) {
  if ( !angular.isObject( response.data ) || !response.data.message ) {

    return ( dataSource.reject( response.data ) );
  }
  return ( dataSource.reject( response.data ) );

}

function handleSuccess ( response ) {
    var data = response.data;
    console.log(JSON.stringify(data));
    var result =[];
    for (var i = 0; i < data.length; i++) {
      result[i] = new User(data[i]._id.$oid, data[i].url, data[i].firstName, data[i].lastName, data[i].age, data[i].login, data[i].CountryCode, data[i].UserId, data[i].hrmsUserList1, data[i].key, data[i].query, data[i].test,
                            data[i].title, data[i].releaseYear, data[i].director);
    }
		return ( result );

}

}

var User = function(__id, _url, _firstName, _lastName, _age, _login, _CountryCode, _UserId, _hrmsUserList1, _key, _query, _test, _title, _releaseYear, _director){
  this._id = __id;
  this.url = _url;
  this.firstName = _firstName;
  this.lastName =_lastName;
  this.age = _age;
  this.login = _login;
  this.CountryCode = _CountryCode;
  this.userId = _UserId;
  this.hrmsUserList1 = _hrmsUserList1;
  this.key = _key;
  this.query = _query;
  this.test = _test;
  this.title = _title;
  this.releaseYear = _releaseYear;
  this.director = _director;
  this.build = function ( _id, url, firstName, lastName, age, login, CountryCode, UserId, hrmsUserList1, key, query, test, _title, _releaseYear, _director ) {
  		return new User( _id, url, firstName, lastName, age, login, CountryCode, UserId, hrmsUserList1, key, query, test, title, releaseYear, director );
  	};
}
