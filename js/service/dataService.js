define( [
	'js/service/services'
], function ( services ) {
	services.service( 'dataSource', [
			'$http', '$q'/*, 'app.config', '$upload'*/, function ( $http, $q/*, config, $upload */) {
				function webRoot ( url ) {
					return /*config.basePath +*/ url;
				}
				return {
					reject : function ( errMsg ) {
						return $q.reject( errMsg );
					},
					getItems : function ( url, p ) {
						return $http.get( webRoot( url ), {
							// query string like { userId: user.id } -> ?userId=value
							params : p,
							headers : {
								'xxxxx' : 'xxxxx'
							}
						} );
					},
					postItem : function ( url, p ) {
						return $http.post( webRoot( url ), {
							// query string like { userId: user.id } -> ?userId=value
							params : p,
							headers : {
								'Content-Type' : 'application/json'
							}
						} );
					},
					addItem : function ( url, item ) {
						return $http( {
							url : webRoot( url ),
							method : 'POST',
							data : item,
							headers : {
								'xxxxx' : 'xxxxx'
							}
						} );
					},
					deleteItem : function ( url, item ) {
						return $http( {
							url : webRoot( url ) + ( item === undefined ? '' : '/' + item.id ),
							method : 'DELETE',
							headers : {
								'xxxxx' : 'xxxxx'
							}
						} );
					},
					// when item does not have "Id" field
					// we can pass name etc. as id here
					deleteById : function ( url, id ) {
						return $http( {
							url : webRoot( url ) + '/' + id,
							method : 'DELETE',
							headers : {
								'xxxxx' : 'xxxxx'
							}
						} );
					},
					// delete selected items
					deleteChecked : function ( url, items ) {
						return $http( {
							url : webRoot( url ),
							method : 'DELETE',
							data : items,
							headers : {
								'Content-Type' : 'application/json'
							}
						} );
					},
					updateItem : function ( url, item ) {
						return $http( {
							url : webRoot( url ),
							method : 'PUT',
							data : item,
							headers : {
								'Content-Type' : 'application/json'
							}
						} );
					},
					// pass list to process all in one go
					processChecked : function ( url, items ) {
						return $http( {
							url : webRoot( url ),
							method : 'POST',
							data : items,
							headers : {
								'Content-Type' : 'application/json'
							}
						} );
					}


				};
			}
	] );
} );
