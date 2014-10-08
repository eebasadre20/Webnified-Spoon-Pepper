$(function () {
			var current = 0;
			var images = [
				"img/Beef Cuisine/Beef Caldereta.jpg",
         	 "img/Beef Cuisine/Beef Crisp.jpg",
          	 "img/Beef Cuisine/Beef Ham.jpg",
		  	 "img/Beef Cuisine/Beef Mushroom.jpg",
		  	 "img/Beef Cuisine/Beef Steak Tagalog.jpg",
		  	 "img/Beef Cuisine/Beef Tapa.jpg",
		  	 "img/Beef Cuisine/Braised Beef.jpg",
		  	 "img/Beef Cuisine/Corned Tenderloin Beef.jpg",
		  	 "img/Chicken Cuisine/Bavarian Chicken.jpg",
		  	 "img/Chicken Cuisine/Breaded Chicken w Mayo Dip.jpg",
		  	 "img/Chicken Cuisine/Buffalo Chicken.jpg",
		  	 "img/Chicken Cuisine/Chicken Adobo.jpg",
		  	 "img/Chicken Cuisine/Chicken Ala Pobre.jpg",
		  	 "img/Chicken Cuisine/Chicken Alfredo.jpg",
		  	 "img/Chicken Cuisine/Chicken BBQ.jpg",
		  	 "img/Chicken Cuisine/Chicken Cocktail.jpg",
		  	 "img/Chicken Cuisine/Chicken Cordon Blue.jpg"

			];			

			function pictureRandom ( num ) {
				var list = $('li').get();				

				var firstElement = list.splice(num , 1)[0];
				var secondElement = list.splice(num + 3 , 1)[0];

				var firstImage = images.splice(rand(images.length) , 1);
				var secondImage = images.splice(rand(images.length) , 1);

				$(firstElement.children[0]).fadeOut(1500 , function () {
					images.push($(this).attr('src'));
					$(this).attr('src' , firstImage).fadeIn( 1500 );
				});
				$(secondElement.children[0]).fadeOut(1500 , function () {
					images.push($(this).attr('src'));
					$(this).attr('src' , secondImage).fadeIn( 1500 );
				});
			}
			
			setInterval(function () {	
				if (current == 4) current = 0;				
				pictureRandom(current);
				current ++;
			} , 4000);

			function rand ( limit ) {
				return Math.floor(Math.random() * limit);
			}
		});