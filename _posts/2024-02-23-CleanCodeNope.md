---
layout: post
title: "'Clean Code' et moi, ça fait 2 !"
excerpt_separator: <!--more-->
---

## 🌶️ Hot take

A chaque fois que je m'intéresse aux concepts de ce livre, je finis par me dire "*Au secours ! Ce n'est vraiment pas ma façon de fonctionner ! Est-ce que je suis bizarre, voire carrément nul en code ?*".
Petit à petit, mon avis s'est formé : aujourd'hui, je ne recommande simplement pas Clean Code.

Autrement dit je remets en question une institution dans le monde du développement logiciel : le livre "Clean Code" de Robert C. Martin.

<!--more-->

## 🧼 Clean Code, c'est quoi déjà ?

Clean Code, ou "Coder Proprement", c'est un ensemble de règles d'écriture de code.
L'idée est de privilégier la facilité d'écriture et de maintenabilité plutôt que la performance pure.
Écrivant essentiellement du code de test fonctionnel automatisé, ce sens des priorités me parle.

## 🫠 Mon avis sur les abstractions
Je traite généralement des problématiques de code très simples.
L'approche Clean code est (résumée très grossièrement) : dès que tu peux, extrais ton bout de code dans une abstraction, et ne répète jamais plusieurs fois le même bout de code.

Si je suis ces principes, j'ajoute de la complexité aujourd'hui dans mon code, dans l'espoir de faciliter une future maintenabilité. 
Maintenant, pour comprendre un bout de code, je dois en comprendre également 3 autres (ou plus) parce que tout est séparé dans des classes et des abstractions.

A la question "*est-ce que ça facilite la maintenance ?*", ma réponse est "*peut-être*", mais cette maintenance est un évènement futur incertain. 
Au présent, un effet certain est que je dois fournir un effort cognitif plus important pour manipuler mon code : je n'aime pas ça.

## 🧸 Mon style : coder comme un enfant de 5 ans

Ma façon de coder est plutôt "*ça doit être simple à comprendre*", et je le formule souvent par "*je code comme un enfant de 5 ans*".
Ce n'est pas à prendre au premier degré : les enfants de 5 ans ont généralement autre chose à faire.

J'essaie surtout de faire en sorte qu'il n'y ait pas besoin d'être un·e génie pour comprendre le code.
Quand je n'ai pas d'autre choix que d'écrire du code compliqué, alors j'ajoute un commentaire.
Pas juste pour mes collègues, mais aussi pour moi : si j'ai galéré à écrire un truc aujourd'hui, je sais que dans 3 mois je ne vais pas le comprendre en le lisant.
Je préfère dans ce cas qu'il y ait quelques explications autour.

Dans cette idée, il est également très rare que je décide d'écrire une classe : par défaut, j'évite la programmation orientée objet.
Quand j'en fais, c'est pour me conformer à ce qui existe déjà dans la codebase : là ça va, j'ai juste à faire des choses qui ressemblent à celles qui existent déjà.
Dans ce contexte précis, je préfère me conformer à ce que mes collègues ont déjà fait plutôt que de chambouler l'existant : j'estime qu'il faut de bonnes raisons, du temps, et un consensus avant de tout casser.

## Conclusion

Je suis trop teubé pour faire du Clean Code et de la programmation orientée objet, et je le vis bien...
Enfin, aujourd'hui je le vis bien !
Pendant longtemps, j'ai pensé que j'avais un problème.

Je répète aux quelques personnes que j'aide à se lancer dans le code qu'il n'y a pas Une Façon Parfaite Et Unique de répondre à un besoin avec du code : si ton code marche mais ne ressemble pas à celui qu'à fait ton ou ta camarade, c'est pas grave, c'est justement la preuve qu'on peut arriver à la même fin par plusieurs moyens.
Si j'applique ce principe aux autres, alors je peux me l'appliquer : il m'a juste fallu un peu de temps pour m'en rendre compte.

Dans ce même état esprit : peut-être que Clean Code est la façon de coder qui vous parle, celle qui vous semble la plus accessible.
Dans ce cas : ne brûlez pas ce bouquin parce que quelqu'un sur internet a dit "*ouais, c'est pas trop mon truc en fait*" !
Retenez simplement que c'est une façon de faire parmi tant d'autres.

## ⭐ Bonus
Pour aller plus loin sur ce sujet, je recommande ces 3 vidéos: 

- [Regard scientifique sur l'artisanat logiciel - Victor Lambret](https://www.youtube.com/watch?v=BfMrXUl5rJ4)
  - Il répond entre autres à la question "*Clean Code vous facilite-t-il vraiment la tâche ?*"
- ["Clean" Code, Horrible Performance - Casey Muratori](https://www.youtube.com/watch?v=tD5NrevFtbU)
  - Clean Code peut vraiment dégrader les performances de vos logiciels (sur un seul benchmark ; ce n'est pas une étude complète)
- [Clean Code is SLOW But REQUIRED? \| Prime Reacts - ThePrimeAgen](https://www.youtube.com/watch?v=fqoi_c8-eOc)
  - Je ne suis pas spécialement fan de son style éditorial, mais il a formulé quelque chose que j'approuve : "*ne faites pas d'abstractions avant d'avoir une bonne raison de le faire*"




