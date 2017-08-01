---
layout: post
title: L'Automatisation des tests (end user testing)
---

## tl;dr
Je travaille actuellement en tant que "développeur de tests automatisés". C'est un travail assez particulier : cet article décrit la façon optimale de le faire, la façon dont je le fais en réalité, et présente des outils intéressants.

## End user testing / Tests de Non Régression ?
### Le principe
J'automatise des tests. Plus précisément : j'automatise des Tests de Non Régression (End User Testing). L'idée est de se placer du point de vue de l'utilisateur final est de tester tous les parcours possibles afin de vérifier que tout fonctionne. Il faut le faire régulièrement : chaque livraison d'un bout de code peut faire crasher potentiellement n'importe quoi, mieux vaut détecter le problème avant la mise en prod (sinon l'utilisateur final risque de grogner).

### Note
les TNR sont essentiels pour assurer la qualité d'un produit, mais cela ne permet pas de se passer de test unitaires !

### L'exécution
Quand rien n'est automatisé, les TNR sont exécutés à la main. Par exemple, sur un site web, cela revient à effectuer tous les parcours possibles. Déterminer ces parcours (autrement dit : écrire le cahier de recette) est intéressant, les exécuter en boucle l'est beaucoup moins. C'est barbant, et ça peut rendre fou.
Personnelement je suis pour l'automatisation de l'exécution des TNR : ça tombe bien, c'est mon travail ! Dans la suite de ce post, j'écris "TNR" pour "Tests de Non Régression Automatisé".

## le meilleur des mondes
Full automatisé, même le déploiement. Docker = super pour ça !
ça facilite les test auto... ça facilite les tests tout court, et même le dev, en fait !

## la réalité :
env de test partagé, process en "one shot" sans possibilité d'annuler -> pas full automatisable.
Mais : avant d'atteindre les limites, je peux déjà pas mal automatiser (et puis je ne suis pas décisionnaire sur le SI)

## l'outil que j'utilise (et ses avantages)
Sahi pro

## Alternatives
Sahi gratuit
Nightwatch.js

## outils du Turfu
Diffy
Zeno Pixel
