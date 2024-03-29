website

# MEETUP DOCKER / REACT NATIVE

## Introduction

Ce repository a été créé dans le but de présenter l'utilisation de Docker dans le cadre du developpement d'application mobile.

### Prérequis :

Avoir docker installé sur sa machine et configuré pour autoriser l'utilisation de volume dans le repertoire de travail que vous allez utiliser.

Avoir un compte expo : [https://expo.io/signup](https://expo.io/signup)

Avoir l'application expo sur son mobile.

Avoir son notebook et son smartphone sur le même réseau.

## Installation de React-Native

Pour lancer le container :

	$ docker-compose up -d

React-native est préinstallé en global sur le build fourni.

On peut y accèder avec la commande :

	$ docker exec -it react-native sh

On va avoir deux éléments préinstallés et accessible en ligne de commande :
	
* React-nactive-cli (create-react-native-app, react-native)
* expo-cli

On va commencer par créer le projet react-native "hello-meetup".

	$ create-react-native-app hello-meetup
	$ cd hello-meetup
	
## Simulation 

Il convient de renseigner l'IP

	$ export env REACT_NATIVE_PACKAGER_HOSTNAME=<<HOST LOCAL IP>>
	
Si comme moi, vous avez un Iphone, vous ne pouvez plus scanner de QR code comme c'est proposé pas l'application, pour tester on va envoyer un lien qui va pointer vers l'application expo.

Sur la machine hote, on va lancer le debugger react-native sur chrome : `http://<<HOST LOCAL IP>>:19001/debugger-ui/`

Et pour lancer l'application

	$ expo start -s eldorplus@gmail.com
	
Maintenant on est live et prèt à coder et/ou debugger?

## Expo publish

Il faut connecter l'application expo et la ligne de commande expo sur le même compte. Ensuite on publie sur notre compte expo.

	$ expo login
	$ expo publish

# Bonus

Un des usages les plus répandu de Docker pour le développeur mobile est de simuler son backend.

## Prisma

[https://www.prisma.io/docs/quickstart/](https://www.prisma.io/docs/quickstart/)

## Parse Server

[https://github.com/yongjhih/docker-parse-server](https://github.com/yongjhih/docker-parse-server)

# Super bonus (spécial Docker)

## A la recherche de la racine de tout

La base de docker. A la recherche de l'image originelle.

## Portainer

Une interface hébergé dans un container Docker pour gérer son Docker.

- [uni-timeline-app](https://github.com/MohamedMujtaba/uni-timeline-app)
- [react-native-elements](https://github.com/react-native-elements/react-native-elements)
- [kittenTricks](https://github.com/akveo/kittenTricks)
- [showtime-frontend](https://github.com/showtime-xyz/showtime-frontend)
- [bottom-tabs](https://github.com/react-navigation/react-navigation/tree/main/packages/bottom-tabs)
- [react-native-paper](https://github.com/callstack/react-native-paper)
- [universal-app-starter](https://github.com/sabaturgay/universal-app-starter)
- [react-native-elements](https://github.com/react-native-elements/react-native-elements)
