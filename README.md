# Time To Eat

## Sommaire
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Introduction](##introduction)
- [Pré-requis](##prerequis)
- [Installation](##installation)
- [Configuration](##configuration)
- [Utilisation](##utilisation)
- [Liens utiles](##liensutiles)
- [License](##license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction
Time To Eat est une application moderne basée sur la réalité augmentée mettant en avant la gastronomie bordelaise de manière ludique et intuitive. Vous êtes de passage dans la métropole ? Français ou Étranger, cette application ne possède aucune barrière et vous permet de découvrir les restaurants les plus représentatifs de la ville de Bordeaux. Selon vos envies et votre emplacement, Time To Eat sera vous guider jusqu'à l'extase de vos papilles en un temps record !

---
**Ne perdez plus votre temps à chercher un bon restaurant bordelais, Time To Eat est fait pour vous !**

---

## Pré-requis
* API 23 d'Androïd

## Installation
Pour installer l'application, vous devez suivre les étapes suivantes :

1. Cloner notre dépôt Github :

  `git clone https://github.com/YanickS/TimeToEat2.git`

2. Se rendre dans le dossier TimeToEat2/
3. Installer cordova & ionic :

  `sudo npm install -g cordova ionic`

4. Installer les plugins du projet :

  `ionic state restore`

5. Installer les plateformes :
  
  `ionic platform add ios`
  
  ou
  
  `ionic platform add android@5.0.0` _(**important** ! Voir [ici](https://github.com/Tazaf/ionicitude/wiki/Installing-the-Wikitude-plugin#android-platform-version-500) pour plus de détails)_

6. Ajouter votre clé Wikitude dans le fichier _(plugins/com.wikitude.phonegap.WikitudePlugin/www/WikitudePlugin.js)_
7. Construire l'application :
 
  `ionic build ios`

  ou

  `ionic build android`

8. Construire l'application :
 
  `ionic run ios`

  ou

  `ionic run android`
  
  **Plus d'infos [ici](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html) pour iOs ou [ici](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) pour Androïd.**

## Configuration

### Pour iOS
Après avoir démarré le fichier _(platforms/ios/WikitudeIonic2StarterApp.xcodeproj)_ dans XCode 8, ajoutez les nouvelles permissions dans le fichier _(Resources/WikitudeIonic2StarterApp-Info.plist)_ :

* Pour la caméra :

  `NSCameraUsageDescription`
  
* Pour la localisation :

  `NSLocationWhenInUseUsageDescription`

## Utilisation
L'application Time To Eat se répartie en 3 grands principes :

1. La liste des restaurants à proximité (filtre de distance).
<img src="https://github.com/YanickS/TimeToEat2/blob/master/www/img/screen/Liste.jpg" width="250px">
<img src="https://github.com/YanickS/TimeToEat2/blob/master/www/img/screen/Detail.jpg" width="250px">

2. La visualisation des restaurants par une carte Google Maps.
<img src="https://github.com/YanickS/TimeToEat2/blob/master/www/img/screen/Carte.jpg" width="250px">

3. La visualisation des adresses des restaurants par la réalité augmentée.
<img src="https://github.com/YanickS/TimeToEat2/blob/master/www/img/screen/RE2.jpg" width="250px">


## Liens utiles
* [Ionic](https://ionicframework.com)
* [Wikitude](http://www.wikitude.com)
* [Ionicitude](https://github.com/Tazaf/ionicitude)

## License
L'application Time To Eat est sous licenses : MIT Licence ([Ionicitude](https://github.com/Tazaf/ionicitude#license)) et Apache v2.0 License ([Wikitude](http://www.wikitude.com/)).
