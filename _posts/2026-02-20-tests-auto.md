---
layout: post
title: "A propos d'automatisation de tests logiciels"
excerpt_separator: <!--more-->
---

## Préambule

Vous voulez automatiser vos tests logiciels : c'est cool !
C'est probablement une bonne idée, mais il existe trop de façons de mal s'y prendre.

Déjà, vous ne voulez pas automatiser vos tests, ce n'est pas une fin en soi.
Vous voulez automatiser dans un but précis, et vous ne devriez automatiser qu'une partie de vos tests.

Et, si ça peut aider, je vous propose mon retour d'expériences et quelques conseils.

<!--more-->

Au moment où je vous écris, je suis employé par une entreprise qui vend de l'automatisation de test logiciels : j'ai donc un biais en faveur du sujet, et un intérêt direct à vous convaincre d'automatiser.

Bon à rappeler également : je ne me base pas ici sur des études académiques, mais sur mon expérience personnelle imparfaite.
Autrement dit : rappelons que ce n'est pas parce que j'énonce quelque chose avec assurance que j'ai forcément raison.

## Mise en situation

Commencer par une histoire, ça vous dit ?

La Société Bananatronic (qui vend des bananes connectées virtuelles, naturellement) veut automatiser des tests. 
Voici comment elle s'y prend : 

Elle constitue très rapidement une équipe de 10 personnes, et leur met à disposition un logiciel d'automatisation qui fonctionne bien.

L'infrastructure n'est pas prête, l'environnement dans le contexte Bananatronic n'est pas simple à gérer. Sauf que les 10 personnes sont déjà embauchées, déjà prêtes, autant les occuper : elle mettent en place une infrastructure parallèle, une sorte de clone simplifiée de l'infrastructure cible.

Les 10 fantastiques ont un objectif : prendre les cas de tests du référentiel, et en automatiser un maximum.

Le temps passe, et l'environnement cible est enfin prêt.
Ca tombe bien, 80% des tests ont été automatisés !
Elles ont fait un framework très technique et ont confiance dans leur code.

Donc : l'équipe livre ses tests sur l'environnement et ... rien ne fonctionne.

Si cette histoire vous est familière, c'est parce qu'elle est inspirée de plusieurs faits réels.

## Mais où a-t-on merdé ?

Réponse courte : un peu partout.

- Déjà, on a commencé en très grand : 10 personnes à pleine vitesse, direct.
- Ensuite, on a eu une boucle de retour très longue : on n'a rien pu essayer sur l'environnement cible avant d'avoir beaucoup de tests à livrer.
- Et surtout : on a cru qu'on pouvait remplacer les tests manuels par des tests automatisés

Je vais développer l'alternative que je vous propose

## Ce que j'aime faire

### Commencer à peu de personnes
Déjà, j'aime commencer un projet d'automatisation avec une petite équipe : idéalement 2 personnes.

Être seul sur ce type de mission, j'ai déjà fait et je ne recommande pas : si je suis seul, qui peut m'aider à prendre de bonnes décisions ? 
Qui peut poser des questions sur ce que je fais ?
Ces questions mènent à la recherche de sens, et aident à éviter de faire une implémentation technique bancale ou pas adaptée au besoin métier.

A l'opposé de cette situation, commencer avec une équipe trop grande dilue les responsabilités et les prises d'initiatives.
Si je suis avec 9 autres personnes que je ne connais pas, qui mène la danse, selon quels critères ? 
Vais-je dépenser de l'énergie pour améliorer le fonctionnement, ou me conformer à une majorité floue pour ne pas faire de vagues, privilégiant ainsi ma survie en milieu d'entreprise ?

Une équipe qui commence à 2 me semble être un bon compromis.
A mesure que l'équipe se rode, elle saura quand elle sera en capacité d'accueillir une troisième personne, puis une quatrième etc.

Ce que j'aime vraiment quand je commence en petite équipe, c'est aussi qu'il est plus facile d'établir un fonctionnement au consensus plutôt qu'à la hiérarchie - autrement formulé : une organisation horizontale plutôt que verticale.
Dans le domaine de la qualité logicielle, c'est une bonne façon d'éviter d'écraser les bonnes idées à cause du poids de l'autorité.

### Commencer petit

On peut tout scripter de notre côté, puis faire de grosses livraisons sur l'environnement de test.

Ca ne fonctionne pas, et on le sait.
Par exemple : si vous codez un script d'une seule traite et l'exécutez à la fin, il n'y a aucune chance pour qu'il fasse ce que vous voulez !

Je pense la même chose des gros frameworks, mais j'en parle plus loin.

Bref : prenez quelques cas de test, trouvez une façon de les automatiser qui a du sens dans votre contexte.
Trouvez l'organisation de code qui est pertinente pour vous.
Puis rajoutez des tests, découvrez petit à petit les problèmes, que vous pourrez résoudre les uns après les autres.

Faites ça en boucle, remettez régulièrement en question vos besoins et vos hypothèses, et ça ira mieux.

### Un test manuel n'est pas forcément automatisable
Une personne est intelligente, un robot de test ne l'est pas.

Lorsqu'on vous demande de tester une série d'actions sur une application, vous êtes capables de vérifier la cohérence du parcours, la conformité des visuels par rapport à une maquette ou un arrangement prédéfini, et de juger la qualité de l'expérience utilisateurice.

Le robot, lui, n'exécute que ce qu'on lui demande : c'est excellent pour valider que la série d'actions mène à un effet quelconque, du type "remplir les formulaires mène à une écriture dans la base de données".
L'effort nécessaire pour lui faire vérifier la cohérence visuelle d'une interface graphique peut être plus conséquent : c'est un cas d'usage que je garde pour plus tard, une fois qu'on a automatisé les parties plus faciles et qu'on maîtrise mieux le système.
Et : le robot ne saura pas vérifier ce qu'on ne lui a pas demandé de vérifier.

Donc, quand j'automatise un test manuel, j'ai tendance à le remplacer par : 
- un test automatisé qui vérifie le workflow. Idéalement d'une manière rapide à mettre en place, qui se concentre sur les tâches faciles pour un robot, et pénibles pour une personne (exemple : vérifier que les valeurs affichées utilisent la bonne formule mathématique)
- un test manuel allégé, qui concentre l'effort sur l'UX, le visuel, ou l'exploration

Aussi, je m'autorise à ce qu'un seul test automatisé couvre des portions qui correspondaient avant à plusieurs tests manuels.
C'est une façon d'optimiser les temps d'exécutions.

En bref : la suite d'instructions qui est décrite dans le test manuel n'est pas nécessairement celle que j'automatise.

Parce qu'un test n'existe pas dans le vide.
Un ensemble de tests doit être la réponse à la question "comment je peux vérifier si cette exigence (règle de gestion) est bien respectée par le logiciel ?".

Je précise : puisque j'ai tendance à changer quand je transforme un test manuel en script, je fais valider ce changement par les collègues.
Si personne n'est en mesure de "tester" mes tests, alors c'est un problème.

### Des cas simples
Je vois souvent des scripts complexes, qui ont des branchements logiques alambiqués, voire même des polymorphismes.

Pour automatiser des tests logiciels, je n'aime pas les frameworks complexes, et je touche le moins possible à la programmation orientée objets.
Mon rôle en tant que testeur est avant tout de vérifier que l'application testée correspond à des besoins métiers, je me sens frustré si j'ai l'impression de passer trop de temps sur des aspects techniques.

Et rappelez-vous que vous ne voulez pas réimplémenter la logique de l'application testée, vous voulez juste faciliter les tests.

### Les nouveaux cas de test
C'est le grand jour : une nouvelle fonctionnalité est en cours d'écriture, avec son lot de nouvelles exigences, et de modification d'une partie de celles qui existaient déjà.
Pendant que les développeureuses analysent ces changement en se demandant comment les implémenter, vous les analysez en vous demandant : 
- ont-ils du sens ?
- comment les tester ?

Dès cette phase, vous pouvez décrire ce que doivent vérifier vos tests automatisés.
Oui, le développement n'a pas commencé, vous pourrez cependant avoir une idée de quels tests seront automatisés ou pas, et de l'utilité que chacun aura.

## Conclusion

J'arrête là, c'est déjà assez long.
J'aurais pu enrichir avec des exemples, mais mon but n'est pas vraiment de convaincre, plutôt d'exposer un résumé de ma vision.

Elle n'a rien de révolutionnaire, elle s'appuie en partie sur un concept qui commence à dater mais qui est toujours aussi mal compris : l'agilité.

Dites vous également que si vous vous reconnaissez dans les pratiques que je tends à éviter, ce n'est pas grave.
Peut-être même que dans votre contexte, elles ont du sens.

Si cet article déclenche des réflexions, vous pousse à poser des questions, alors je suis satisfait.

S'il vous donne envie de changer certaines pratiques c'est cool aussi, je vous encourage tout de même à essayer de ne pas changer tout d'un coup.
Allez-y doucement, et travaillez en équipe.