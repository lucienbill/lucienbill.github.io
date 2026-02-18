---
layout: post
title: "Les tests automatisés"
excerpt_separator: <!--more-->
---

## Préambule

Vous voulez automatiser vos tests logiciels : c'est cool !
C'est probablement une bonne idée, mais il existe trop de façon de mal s'y prendre.

Déjà, vous ne voulez pas automatiser vos tests, ce n'est pas un fin en soi.
Vous voulez automatiser dans un but précis, et vous ne devriez automatiser qu'une partie de vos tests.

Et, si ça peut aider, je vous propose mon retour d'expériences et quelques conseils.

<!--more-->

Au moment où je vous écrit, je suis employé par une entreprise qui vend de l'automatisation de test logiciels : j'ai donc un biais en faveur du sujet, et un intérêt direct à vous convaincre d'automatiser.

Bon à rappeler également : je ne me base pas ici sur des études académiques, mais sur mon expérience personnelle imparfaite.
Autrement dit : rappelons que ce n'est pas parce que j'énonce quelque chose avec assurance que j'ai forcément raison.

## Mise en situation

Commencer par une histoire, ça vous dit ?

La Société Bananatronic (qui vend des bananes connectées virtuelles, naturellement) veut automatiser des tests. 
Voici comment elle s'y prend : 

Elle monte très rapidement une équipe de 5 personnes, et leur met à disposition un logiciel d'automatisation qui fonctionne bien.

L'infrastructure n'est pas prête, l'environnement dans le contexte Bananatronic peut être un peu compliqué. Sauf que les 5 personne sont déjà embauchées, déjà prêtes, autant les occuper : elle mettent en place un infrastructure parallèle, une sorte de clone simplifiée de l'infrastructure cible.

Les 5 fantastiques ont un objectif : prendre les cas de tests du référentiel, et en automatiser un maximum ! 

Le temps passe, et l'environnement cible est enfin prêt.
Ca tombe bien, 80% des tests ont été automatisés !

Donc : l'équipe automatisation livre ses tests sur l'environnement et ... rien ne fonctionne.

Si cette histoire vous est familière, c'est parce qu'elle est inspirée de plusieurs faits réels.

## Mais où a-t-on merdé ?

Réponse courte : un peu partout.

- Déjà, on a commencé en très grand : 5 personnes à pleine vitesse, direct.
- Ensuite, on a eu une boucle de retour très longue : on n'a rien pu essayer sur l'environnement cible avant d'avoir beaucoup de tests à livrer.
- Et surtout : on a cru qu'on pouvait remplacer les tests manuels par des tests automatisés

Je vais développer l'alternative que je vous propose

## Ce que j'aime faire

### Commencer à peu de personnes
Déjà, j'aime commencer un projet d'automatisation avec une petite équipe : idéalement 2 personnes.

Être seul sur ce type de mission, j'ai déjà fait et je ne recommande pas : si je suis seul, qui peut m'aider à prendre de bonnes décisions ? 
Qui peut poser des questions sur ce que je fais ?
Ces questions mènent à la recherche de sens, et aide à éviter de faire une implémentation technique élégant mais pas adaptée au besoin métier.

A l'opposé de cette situation, commencer avec une équipe conséquente dilue les responsabilités et les prises d'initiatives.
Si je suis avec 4 autres personnes que je ne connais pas, qui mène la danse, selon quels critères ? 
Vais-je dépenser de l'énergie pour améliorer le fonctionnement, ou me conformer à une vague majorité pour ne pas faire de vague et améliorer mes chances de survie en milieu d'entreprise ?

Une équipe qui commence à deux me semble être un bon compromis.
A mesure que l'équipe se rode, elle saura quand elle sera en capacité d'accueillir une deuxième personne, puis une troisième etc.

Ce que j'aime vraiment quand je commence en petite équipe, c'est aussi qu'il est plus facile d'établir un fonctionnement au consensus plutôt qu'à la hiérarchie.
Dans le domaine de la qualité logicielle, c'est une bonne façon d'éviter d'écraser les bonnes idées à cause du poids de l'autorité.

### Commencer petit


### Un test manuel n'est pas automatisable

## Conclusion
agilité
