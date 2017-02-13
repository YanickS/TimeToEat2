angular.module('demo.services', [])

.factory('Restaurants', function() {

var restaurants = [
	{
		"id":1,
		"nom":"A CANTINA Brasserie Corse",
		"type":"Corse",
		"adresse":"19 Rue Mably 33000 Bordeaux France",
		"lat":44.84360849999999,
		"lng":-0.5772186000000374,
		"description":"PLEIN CENTRE-VILLE – Peut-être connaissiez-vous déjà A Cantina, rue des Bahutiers qui n’est pas inconnu des amateurs bordelais de tapas. Cette adresse a désormais une petite sœur au 19 rue Mably : La Table A Cantina.",
		"description_2":" LA CORSE INVITÉE – Au cœur de la capitale girondine, vous allez pouvoir découvrir des produits corses traditionnels. ",
		"description_3":"INCONTOURNABLES – On n’y vient pas sans fondre pour la charcuterie, les huiles d’olives mais aussi pour ces plats plus originaux comme le veau tigré ou encore la nepita.",
		"horaires_dejeuner":"Déjeuner : de 12h à 14h (sauf dimanche et lundi)",
		"horaires_diner": "Diner : de 19h30 à 22h30 tous les jours",
		"img": "https://u.tfstatic.com/restaurant_photos/702/59702/169/612/la-table-a-cantina-entree-6d03e.jpg",
		"lafourchette":"https://www.lafourchette.com/restaurant/a-cantina-brasserie-corse/59702"
	},
	{
		"id":2,
		"nom":"Breizh Glouton",
		"type":"Français",
		"adresse":"15 Rue des Frères Bonie 33000 Bordeaux France",
		"lat":44.8408503,
		"lng":-0.571532599999955,
		"description":"HYPER CENTRE – Idéalement placé dans le cœur de ville à Bordeaux, à deux pas de la cathédrale et du tribunal, le restaurant Bistrot Glouton cultive l’art de bien recevoir. Prenez place dans le cadre sympathique ou sur la terrasse l’été… et laissez-vous aller à la dégustation dans une ambiance chaleureuse.",
		"description_2":"MAÎTRISE ET GOUT – Des produits rigoureusement sélectionnés, une maîtrise technique et culinaire acquise au long cours (et dans de prestigieuses maisons), des recettes gourmandes, originales et authentiques… la cuisine typée bistronomique fait mouche et régale tous les palais.",
		"description_3":"ACCORDS VINS-METS – A l’image des propositions de la carte des mets, les vins sont soigneusement sélectionnés et se marient comme il se doit aux plats.",
		"horaires_dejeuner":"Ouverture 7J/7 Déjeuner : de 12h à 14h ",
		"horaires_diner": "Diner : de 19h30 à 22h",
		"img": "https://u.tfstatic.com/restaurant_photos/684/63684/169/612/bistrot-glouton-vue-salle-02df9.jpg",
		"lafourchette":"https://www.lafourchette.com/restaurant/bistrot-glouton/63684"
	},
	{
		"id":3,
		"nom":"Kuzina",
		"type":"Français",
		"adresse":"22, rue Porte de la Monnaie 33800 Bordeaux France",
		"lat":44.8324269,
		"lng":-0.5624977999999601,
		"description":"AMBIANCE - Le restaurant Kuzina, installé à Bordeaux, vous reçoit le temps d´un repas gourmand dans un cadre moderne. Le mobilier est en bois et la salle est très lumineuse.",
		"description_2":"CÔTÉ TABLE - le Chef propose une cuisine inspirée du régime crétois, à base d'huile d'olive, de poisson, de légumes et de fruits. Pour satisfaire votre palais aiguisé, il compose ses mets uniquement avec des produits locaux et s'enorgueillit d’œuvrer pour le développement durable, en faisant travailler les petits producteurs et en évitant les transports inutiles. ",
		"description_3":"ÉVÉNEMENTS - Pour vos événements festifs, l'établissement permet la privatisation du lieu. Une adresse originale à la démarche écologique, à connaître au plus vite !",
		"horaires_dejeuner":"Déjeuner : de 12h à 14h (sauf dimanche, lundi et mardi)",
		"horaires_diner": "Dîner : de 19h à 22h30 (sauf dimanche et lundi)",
		"img": "https://u.tfstatic.com/restaurant_photos/387/16387/169/612/kuzina-devanture-5b66b.jpg",
		"lafourchette":"https://www.lafourchette.com/restaurant/kuzina/16387"
	},
	{
		"id":4,
		"nom":"Casa Ferretti",
		"type":"Italien",
		"adresse":"55, cours du Maréchal Gallieni 33000 Bordeaux France ",
		"lat":44.8241139,
		"lng":-0.591797100000008,
		"description":"BORDEAUX À SA BOTTE – Delizioso ristorante & caffé Italiano ! Lorsqu'on s'appelle Casa Ferretti et que l'on propose des spécialités italiennes de pizzas, pâtes et ravioles aussi succulentes, on est fatalement très bien armé pour séduire rapidement le tout Bordeaux ! ",
		"description_2":"CUISINE FINE – Le secret d'une pizza réussie, c'est bien sûr la qualité des produits. Casa Ferretti a choisi de les importer directement d'Italie pour revisiter au mieux des recettes classiques de pizzas et autres spécialités élaborées dans la cuisine ouverte.",
		"description_3":"BARRIÈRE DE PESSAC – Casa Ferretti n'a rien à cacher, ni ses secrets de fabrication artisanale évidemment, ni la fraîcheur de ses produits. L'absence de congélateur en fait preuve !",
		"horaires_dejeuner":"Déjeuner: de 11h30 à 14h (sauf dimanche)",
		"horaires_diner": "Dîner: de 19h30 à 22h (sauf dimanche)",
		"img": "https://u.tfstatic.com/restaurant_photos/177/33177/169/612/casa-ferretti-interieur-69e80.jpg",
		"lafourchette":"https://www.lafourchette.com/restaurant/casa-ferretti/33177"
	},
	{
		"id":5,
		"nom":"La Petite Savoie",
		"type":"Savoie",
		"adresse":"27, rue des Argentiers 33000 Bordeaux France",
		"lat":44.8389699,
		"lng":-0.5698124000000462,
		"description":"Pour les amoureux de la montagne pas besoin de se déplacer pour savourer les spécialités. Le restaurant savoyard La Petite Savoie à Bordeaux nous emmène directement à la montagne avec la raclette, la fondue, la reblochonnade, la tartiflette et autres plats le tout à bas prix et dans une ambiance chaleureuse.",
		"description_2":"",
		"description_3":"",
		"horaires_dejeuner":"",
		"horaires_diner": "",
		"img": "",
		"lafourchette":"https://www.lafourchette.com/restaurant/la-petite-savoie/43397"
	},
	{
		"id":6,
		"nom":"Le Bistrot Regent",
		"type":"Bistrot",
		"adresse":"Quai Armand Lalande, 33000, Bordeaux, France",
		"lat":44.8651102,
		"lng":-0.5601722,
		"description":"",
		"description_2":"",
		"description_3":"",
		"horaires_dejeuner":"Déjeuner : de 12h à 14h",
		"horaires_diner": "Diner : de 19h30 à 22h45 tous les jours",
		"img": "",
		"lafourchette":"https://www.tripadvisor.fr/Restaurant_Review-g187079-d8130512-Reviews-Bistro_Regent-Bordeaux_Gironde_Nouvelle_Aquitaine.html"
	}];

  return {
    all: function() {
      return restaurants;
    },
    get: function(restauId) {
      for (var i = 0; i < restaurants.length; i++) {
        if (restaurants[i].id === parseInt(restauId)) {
          return restaurants[i];
        }
      }
      return null;
    }
  };
});
