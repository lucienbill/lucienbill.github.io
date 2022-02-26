---
layout: post
title: Touraine Tech 2022 - Mon débrief
excerpt_separator: <!--more-->
---

Vendredi 21 janvier s'est tenu un évènement auquel j'apprécie particulièrement participer : [Touraine Tech](https://touraine.tech/). Tout est dans le nom : c'est en Touraine, et on y aborde des sujets tech. Et aujourd'hui, je vous propose un débrief !  <!--more-->

Les organisateurs ont un état d'esprit qui me plaît : beaucoup de curiosité et de bienveillance. Cela se ressent à tous les niveaux : les intervenants, le public, les bénévoles, les sponsors : l'ambiance est vraiment agréable et les discussions sont intéressantes.

Si j'avais pu, j'aurais vu toutes les conférences et participé à tous les ateliers. A défaut, je regarderai très certainement les rediffusions, et suivrai l'actualité des intervenants afin de continuer à apprendre.
Si, comme-moi, vous ne savez pas être à plusieurs endroits en même temps, alors les quelques notes que je vous partage ici vous intéresseront peut-être !

## La keynote d'ouverture

La journée a commencé avec un constat déprimant : nous (l'espèce humaine) consommons trop de ressources. Je vous invite à lire [l'article de mon collègue Julien Busset](https://www.linkedin.com/feed/update/urn:li:ugcPost:6892023618201534464/) qui traite de ce sujet ; voici ce que j'ai compris : 

- Nous vivons dans une économie de croissance infinie, dans un monde de ressources finies. Ce n'est pas viable.
- Si on continue sur cette trajectoire, notre futur proche ressemblera à Mad Max

Heureusement, il existe des initiatives autour du Low-Tech, avec des technologies relativement simples à fabriquer et à maintenir. [Camille Justeau-Morellet](https://www.linkedin.com/in/cjusteau/) nous en a ainsi présenté un [four à pain solaire](https://neoloco.fr/), [l'Atelier Paysan](https://www.latelierpaysan.org/), et d'autres projets qui vont, je pense, dans la bonne direction.
J'aime le High-Tech, mais j'admire la simplicité du Low-Tech. En attendant que le replay soit mis en ligne, si vous souhaitez découvrir le Low Tech je vous invite à lire les ressources suivantes : 

- fridge 0.2 : le réfrigérateur déconnecté du réseau électrique
- Energy Vault : stocker de l'électricité sans batterie chimique

## Père Castor 🐻, raconte nous une histoire (d'OPS) [📺](https://www.youtube.com/watch?v=pjv1Jic7VLM)
Toute machine ou logiciel finit inévitablement par tomber en panne. [David Aparicio](https://twitter.com/dadideo) nous a partagé son expérience du sujet et a fait un rappel utile : même les géants de l'internet ont des plantages.
La chose à retenir absolument : le concept de "Post Mortem". Il s'agit d'un outil documentaire que je considère comme indispensable pour transformer une panne de SI en source de savoir.

## Dis papa ? C'est quoi un SRE ? [📺](https://www.youtube.com/watch?v=l8W8XGK3gSo)
Pour répondre à cette question, [Denis Germain](https://twitter.com/zwindler) nous présente son métier. Après un talk sur les plantages en prod, j'étais particulièrement intéressé par celui-ci puisque le rôle d'un SRE est de fiabiliser un système. Mes notes : 

- Adoptez la culture du Blameless. Si le stagiaire supprime les données de prod, lui taper dessus n'est pas la solution
- Il faut réduire le "toil" (le travail répétitif et automatisable qui rend fou)
- Pour bien fiabiliser, il ne faut pas avoir peur de bien faire planter

Si certaines de ces notions vous semblent contre-intuitives, je vous invite à lire [cet article du blog de Denis](https://blog.zwindler.fr/2022/01/12/touraine-tech-22-dis-papa-cest-quoi-un-sre/).

## L'échange et la communication à 40 devs : c'est possible avec les bons rituels
Au cœur de tout projet informatique, il y a des humains. Et faire en sorte que ces humains fonctionnent bien ensemble n'est pas toujours simple, surtout si on est nombreux !
[Mélanie Boudard](https://twitter.com/MelanieBWeb) nous partage les rituels qui fonctionnent dans son entreprise : je vous invite vivement à lire ses slides. Voici quelques notes en vrac : 

- Imposer fonctionne beaucoup moins bien qu'inciter fortement
- Les échanges entre petits groupes de lead dev sont intéressants
- Bonne pratique : faire des bootcamp pour les nouveaux arrivant (mise en situation pour les entraîner), animés par 2 personnes d'équipes différentes
- Astuce : avoir une personne dont le rôle sera d'animer, veiller au suivi des rituels, expliquer le pourquoi des rituels
- Attention à la réunionite -> ces rituels sont des réunions. S'ils sont trop longs et trop fréquents, ils vont créer des problèmes
- Parler de ce que les gens aiment / de ce qu'on aime, c'est positif

## Mutation testing : y a-t-il des trous dans votre couverture de test ? [📺](https://www.youtube.com/watch?v=uHGfNhWI8CI)
Si vous êtes dev, vous savez sûrement ce que sont les tests unitaires (TU). Vous savez aussi qu'il existe des outils pour les gérer, et pour savoir quelles portions de votre code sont couvertes par des TU. Ils permettent de tester votre code, mais comment vérifier que ces tests sont pertinents ? En les testant. Et le meilleur moyen de e le faire, c'est de saboter votre code : si le TU détecte votre sabotage, c'est qu'il est bon.
[Benjamin Cavy](https://twitter.com/benjamin_cavy) a présenté quelques outils pour automatiser cette pratique, et les clés pour les utiliser intelligemment.

## Types top ! [📺](https://www.youtube.com/watch?v=QDmTM5UWnBQ)
Les types, ce n'est pas nouveau : dans beaucoup de langages, on peut configurer une variable de manière à ce qu'elle ne puisse contenir qu'un type précis. Par exemple : on peut la forcer à ne contenir que des entiers, et le code tombe en erreur si on tente de l'exploiter pour stocker autre chose.
[Jordane Grenat](https://twitter.com/JoGrenat) présente des façons ingénieuses d'utiliser un système de typage : en contraignant une variable, on peut écrire moins de code. Précisément : on peut s'affranchir du code de validation et laisser le runtime gérer pour nous les erreurs de types. A retenir : 

- Intéressez-vous à l'approche "Parse don't validate" et aux fonctions totales
- Un type n'est pas tant une contrainte qu'une garantie
- Talk à voir : "Make impossible states impossible"

Autre information : Jordane fait du Remote Mob Programming, une pratique qui m'intéresse énormément.

## DevSecOps : de la sécurité dans mon DevOps [📺](https://www.youtube.com/watch?v=3FL2CNy8EsU)
[Adrien PESSU](https://twitter.com/adrienpessu) a commencé sa présentation en revenant sur la base du DevOps : le but est de casser les silos entre dev (les codeurs) et ops (ceux qui font en sorte que le code tourne en prod), en se servant d'outils et en communiquant.
DevSecOps, c'est intégrer la sécurité au cycle de développement d'un produit : 

- Côté dev, des outils automatisés existent
- Côté ops aussi !
- La clé : l'organisation du travail (autrement dit : l'humain) 

Je vous invite à visionner le replay pour avoir la liste de ces outils ; en attendant je vous partage cette note : 

- Avoir un programme de Security Champion : dans chaque équipe de dev, on désigne un(e) champion(e). Ce n'est forcément un expert, mais son rôle sera de penser à la sécurité. Par exemple, en posant des questions du type "a-t-on pensé aux injections SQL ?", ou "On est encore sur du PHP 5.6 ? C'est plus maintenu depuis un moment !".
- Dans ce programme, les champions se réunissent régulièrement et parlent des actualités du monde de la cybersécurité (telles que Log4Shell) - > cela développe une culture de la sécurité

## La keynote de clôture
Je suis avec intérêt les publications de [Damien Cavaillès](https://twitter.com/TheDamfr/), fondateur de [WeLoveDevs](https://welovedevs.com/fr/). Je trouve sa vision du recrutement et du travail très pertinente. J'étais donc particulièrement satisfait de découvrir qu'il animait le dernier talk de TNT, pour dresser un état des lieux du monde du travail pour les devs. A retenir :

- Il semble y avoir vraiment plus de travail que de main d'œuvre, ce qui explique les conditions intéressantes qu'on nous propose
- Quand un recruteur recherche un développeur, avant d'obtenir une réponse sur LinkedIn il doit contacter beaucoup de personnes. De mémoire, environ 30 (j'essaie d'être sympa et de répondre le plus souvent possible : un "non" est toujours bien plus chouette que d'être totalement ignoré)
- La bienveillance est essentielle, mais n'est malheureusement pas une évidence.

J'ai pris bien plus de notes que ce que je partage ici, mais elles seront plus utiles à moi qu'à-vous. Comme toujours, je me suis beaucoup amusé et j'ai beaucoup appris : si vous avez l'occasion de participer à ce genre d'évènement, n'hésitez pas une seule seconde !