/*
 * Date   : 2016.12.15
 * Author : Contentstech
 * Desc   : provider
 */
!function () {
	// route
	wip.app().provider('route', function () {
		var _resolve = {};
		this.$get = 
		this.route = function (data) {
			return {
				controller: data.name,
				controllerAs: data.as || 'vm',
				templateUrl: wip.uri(wip.path(wipLogicalPath+'/resources/js/v1/views/' + data.tpl)),
				resolve: _resolve
			};
		};
		this.resolve = 
	});
} ();