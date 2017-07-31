---
layout: post
title: L'Automatisation des tests (end user testing)
---

## tl;dr
Je travaille actuellement en tant que "développeur de tests automatisés". C'est un travail assez particulier : cet article décrit la façon optimale de le faire, la façon dont je le fais en réalité, et présente des outils intéressants.

## intro
### end user testing/TNR
C'est quoi ?
Ca sert à quoi ? essentiel (stabilité)
Manuel = barbant, de quoi rendre fou
Automatisé = the best = mon taff

## le meilleur des mondes
Full automatisé, même le déploiement. Docker = super pour ça !
ça facilite les test auto... ça facilite les tests tout court, et même le dev, en fait !

## la réalité :
env de test partagé, process en "one shot" sans possibilité d'annuler -> pas full automatisable.
Mais : avant d'atteindre les limites, je peux déjà pas mal automatiser (et puis je ne suis pas décisionnaire sur le SI)

## l'outil que j'utilise (et ses avantes)

## Alternatives
Sahi 
Nightwatch.js

## outils du Turfu
Diffy
Zeno Pixel
