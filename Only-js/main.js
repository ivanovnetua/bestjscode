var componentModel = {
	menu: 
	{	visibility: false,
		css: "s10 m3 l2"
	},

	contentPanel: 
	{	visibility: true,
		css: "s10 m5 l5 valign-wrapper",
		style: ""
	},

	illustrationPanel: 
	{	visibility: true,
		css: "s12 m6 l6"
	},

	menuButton: 
	{	visibility: true,
		css: "menu-button"
	},

	closeMenu: 
	{	visibility: false,
		css: "close-menu"
	},

	navPanel: 
	{	visibility: true,
		css: "s2 m1 l1",
		style: "height: 100%; background-color: #fff59d;"
	},

	returnBtn: 
	{	visibility: false,
		css: "return-btn"
	},

	mainContainer: 
	{	visibility: true,
		css: "main-container"
	},

	secondContainer: 
	{	visibility: false,
		css: "second-container",
	},
	fixedWrapper:
	{
		leftOffset: "0",
	}
};

// Controller

angularApp.controller("MainCtrl", function($scope){

	$scope.grid = componentModel;

	$scope.closeMenu = function() {
		$scope.grid.navPanel.css = "s2 m1 l1";
		$scope.grid.illustrationPanel.css = "s12 m6 l6";
		$scope.grid.menu.visibility = false;
		$scope.grid.menuButton.visibility = true;
		$scope.grid.closeMenu.visibility = false;

		if ($scope.grid.secondContainer.visibility == false) {
			$scope.grid.contentPanel.css = "s10 m5 l5 valign-wrapper";
			$scope.grid.fixedWrapper.leftOffset = "0";
		}
		else {
			$scope.grid.contentPanel.css = "s10 m11 l11";
			$scope.grid.fixedWrapper.leftOffset = "0";
		}
	};


	$scope.openMenu = function() {
		$scope.grid.navPanel.css += " pull-s10 grey-bg";
		$scope.grid.illustrationPanel.css = "s12 m4 l5";
		$scope.grid.menu.visibility = true;
		$scope.grid.menuButton.visibility = false;
		$scope.grid.closeMenu.visibility = true;

		if ($scope.grid.secondContainer.visibility == false) {
			$scope.grid.contentPanel.css = "s12 m4 l4 valign-wrapper";
			$scope.grid.fixedWrapper.leftOffset = "16.5%;";
		}
		else {
			$scope.grid.contentPanel.css = "s12 m8 l9";
			$scope.grid.fixedWrapper.leftOffset = "16.5%;";

		}
	};

	$scope.changePage = function() {


		$scope.grid.illustrationPanel.visibility = false;
		$scope.grid.returnBtn.visibility = true;
		$scope.grid.mainContainer.visibility = false;
		$scope.grid.secondContainer.visibility = true;
		$scope.grid.contentPanel.style = "background: #fafafa";

		if ($scope.grid.menu.visibility == false) {
			$scope.grid.contentPanel.css = "s10 m11 l11";
		}
		else {
			$scope.grid.contentPanel.css = "s10 m7 l9";
			$scope.grid.fixedWrapper.leftOffset = "16.5%;";
		}

		$scope.grid.navPanel.style = "height: 100%;";

	}


	$scope.returnPage = function() {

		$scope.grid.illustrationPanel.visibility = true;
		$scope.grid.returnBtn.visibility = false;
		$scope.grid.mainContainer.visibility = true;
		$scope.grid.secondContainer.visibility = false;

		if ($scope.grid.menu.visibility == false) {
			$scope.grid.contentPanel.css = "s10 m5 l5 valign-wrapper";
			$scope.grid.fixedWrapper.leftOffset = "0";
		}
		else {
			$scope.grid.contentPanel.css = "s10 m4 l4 valign-wrapper";
			$scope.grid.fixedWrapper.leftOffset = "16.5%";
		}

		$scope.grid.navPanel.style = "height: 100%; background-color: #fff59d;";
		$scope.grid.contentPanel.style = "";
	}



});