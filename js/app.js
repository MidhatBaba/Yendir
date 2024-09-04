'use strict';

var app = angular.module('yendir', []);

app.controller('yendir', function($scope, $http){

	$scope.set_product = function(data,index){
		console.log(data);
		location.href="product-detail.html";
		localStorage.setItem("img_id",data);
		localStorage.setItem("product_index",index);
	},
	$scope.get_product = function(){

		$scope.img_id = localStorage.getItem("img_id");
		var index = localStorage.getItem("product_index");
		$scope.get_list(index);
	},
	$scope.get_list = function(index){
		$scope.index = index;
		$scope.products = [

		{
			id : "product_1", 
			name: "Candy orange hashidaar pashmina stole ", 
			price: "R 2500", 
			description: "This stole is made up of 100% pure cashmere pashmina. The Artists of Kashmir Beautifully plays with colours and give different designs to these stoles and make them look more alluring."
		},
		{
			id : "product_2", 
			name: "Turquoise Blue hashidaar pashmina stole", 
			price: "R 2500", 
			description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"
		},
		{id : "product_3", name: "Dark blue hand embroidered Jali pashmina stole", price: "R 3200", description: "This pashmina stole is one of the finest blend of craftsmanship and luxury with hand work in an intricate pattern. Elegance and charm is what you will exude once you wear this stole from the house of Yendir. Its attractive Shade and charming sozni embroidery adds to its ethnic appeal"},
		{id : "product_4", name: "Green hand embroidered pashmina stole", price: "R 2800", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."},
		{id : "product_5", name: "Black embroidered tilla pashmina stole", price: "R 2700", description: "This pashmina stole with  tilla is the fusion of modern design with traditional wear. It is the most versatile accessorie in your wardrobe and it makes a great gift for anyone who's into fashion."},
		//2ndRow
		{id : "product_6", name: "Butter Creame hashidaar pashmina stol", price: "R 2500", description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"},
		{id : "product_7", name: "Henna Green hashidaar pashmina stole", price: "R 2500", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."},
		{id : "product_8", name: "Red hand-embroidered pashmina stole", price: "R 2700", description: "This pashmina stole is one of the finest blend of craftsmanship and luxury with hand work in an intricate pattern. Elegance and charm is what you will exude once you wear this stole from the house of Yendir. Its attractive Shade and charming sozni embroidery adds to its ethnic appeal"},
		{id : "product_9", name: "Pashmina Turma Shawl", price: "R 2500", description: "This stole is made up of 100% pure cashmere pashmina. The Artists of Kashmir Beautifully plays with colours and give different designs to these stoles and make them look more alluring. "},
		{id : "product_10", name: "Orange hand-embroidered pashmina stole", price: "R 2700", description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"},
		//3rRow
		{id : "product_11", name: "Hashidaar pashmina stole", price: "R 2700", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."},
		{id : "product_12", name: "hashidaar pashmina stole", price: "R 2500", description: "This stole is made up of 100% pure cashmere pashmina. The Artists of Kashmir Beautifully plays with colours and give different designs to these stoles and make them look more alluring."},
		{id : "product_13", name: "Hashidaar pashmina stole", price: "R 2700", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on itn"},
		{id : "product_14", name: "Hashidaar pashmina stole", price: "R 2500", description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"},
		{id : "product_15", name: "Hashidaar pashmina stole", price: "R 2500", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it"},
		//4thRow
		{id : "product_16", name: "Hashidaar pashmina stole", price: "R 2500", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."},
		{id : "product_17", name: "hashidaar pashmina stole", price: "R 2500", description: "This stole is made up of 100% pure cashmere pashmina. The Artists of Kashmir Beautifully plays with colours and give different designs to these stoles and make them look more alluring."},
		{id : "product_18", name: "Hashidaar pashmina stole", price: "R 3500", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on itn"},
		{id : "product_19", name: "Hashidaar pashmina stole", price: "R 2200", description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"},
		{id : "product_20", name: "Hashidaar pashmina stole", price: "R 1300", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it"},
		//5thRow
		{id : "product_21", name: "Hashidaar pashmina stole", price: "R 1300", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."},
		{id : "product_22", name: "hashidaar pashmina stole", price: "R 1300", description: "This stole is made up of 100% pure cashmere pashmina. The Artists of Kashmir Beautifully plays with colours and give different designs to these stoles and make them look more alluring."},
		{id : "product_23", name: "Hashidaar pashmina stole", price: "R 2500", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on itn"},
		{id : "product_24", name: "Hashidaar pashmina stole", price: "R 1300", description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"},
		{id : "product_25", name: "Hashidaar pashmina stole", price: "R 1300", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it"},
		//6thRow
		{id : "product_26", name: "Hashidaar pashmina stole", price: "R 1300", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."},
		{id : "product_27", name: "hashidaar pashmina stole", price: "R 2200", description: "This stole is made up of 100% pure cashmere pashmina. The Artists of Kashmir Beautifully plays with colours and give different designs to these stoles and make them look more alluring."},
		{id : "product_28", name: "Hashidaar pashmina stole", price: "R 2100", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on itn"},
		{id : "product_29", name: "Hashidaar pashmina stole", price: "R 2100", description: "Yendir presents the luxurious collection of pashmina shawls which are a perfect companion for a men to feel warm and comfortable in breezy weather. Drape this pashmina shawl around you and get a complete royal  look"},
		{id : "product_30", name: "Hashidaar pashmina stole", price: "R 2300", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it"},
		{id : "product_31", name: "Balck hashidaar pashmina stole", price: "R 2500", description: "This pashmina stole looks very elegant and can be worn with any outfit. This stole underlines its elegant allure through the rich ethnic motifs on it."}

		
		]
	}


});