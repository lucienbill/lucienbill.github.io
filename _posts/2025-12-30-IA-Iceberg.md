---
layout: post
title: "l'Iceberg de l'IA"
excerpt_separator: <!--more-->
---

## TL;DR

On nous parle en boucle d'IA comme étant le futur, alors qu'elle détruit notre présent.
J'enfonce des portes ouvertes : les LLM piétinnent allègrement l'éthique, et nous font aujourd'hui plus de mal que de bien.

<!--more-->

## l'IA, ça aide parfois, mais ...

J'ai récemment vu un retour d'expérience sur l'utilisation de l'IA au service de la qualité logicielle.
C'était intéressant, et j'en ai retenu ceci : l'IA ne peut vraiment vous aider que pour les tâches que vous savez déjà accomplir sans son aide.

Et quand on y pense, c'est plutôt logique : faire aveuglement confiance à une IA parce qu'on n'est pas en mesure de vérifier la pertinence de ses propositions, c'est juste trop risqué.

Je ne me souviens plus si le retour d'expérience abordait le point suivant, mais je me souviens d'en avoir discuté avec un ami : dans les bonnes conditions l'IA peut parfois faire gagner du temps, mais elle ne rend pas nécessairement le travail moins pénible.
Quand je dois concevoir des cas de test, j'analyse un document de référence qui décrit le comportement désiré du logiciel, puis je cherche à répondre à la question "*comment je peux vérifier si ce comportement est bel et bien respecté dans le vrai logiciel ?*"

Je simplifie un peu, mais la base est bien cette question.
Quand une personne délègue ce travail à une IA, il ne lui reste qu'à faire la revue et la correction.
Et faire ces revues en boucle, en ne créant plus rien soi-même, ce n'est pas nécessairement agréable. 
En tout cas, j'ai un ami qui a cessé d'utiliser l'IA pour son travail de développeur pour cette raison : il prenait plus de plaisir à coder lui-même plutôt qu'à faire des revues de codes pondus par des LLM.

Autrement formulé : la pertinence de l'IA générative en tant qu'outil dépend du cas d'usage. 
Et honnêtement, ce point me dérange moins que les autres, c'est vraiment la pointe de l'Iceberg.

## L'Iceberg

Ce qui me dérange, c'est cette impression que les autres points, pourtant de moins en moins bien cachés, sont trop peu abordés dans les retours d'expérience sur le sujet. 
Impression basée sur un échantillon de 2 évènements, donc la représentativité est douteuse, je l'admets.

Début 2024, j'assiste à la conférence d'un dev d'une start-up un peu connue sur l'utilisation de Copilot.
Je lui demande comment lui ou ses collègues gèrent les problèmes de droits d'auteur liés au code généré, il répond que l'outil est tellement efficace que la question ne leur est même pas venue à l'esprit.
Je réalise alors que le public cible a surtout accès aux IA, et n'a pas forcément conscience de l'iceberg.
A cette époque, je me souviens de m'être dit que les informations à ce sujet ne circulaient peut-être pas autant que je le pensais, mais que ça allait certainement bouger.

Fin 2025, en sortant d'une autre conférence qui parle d'IA, je constate avec regret que la situation n'a clairement pas assez bougé.

Je mets donc les pieds dans le plat : 
- Les LLM sont entraînés sur des données volées
- L'entraînement des LLM se fait en broyant la santé mentale d'êtres humains pour vraiment pas cher
- Les fermes de serveurs IA détruisent leur environnement. 
- L'IA profite surtout aux milliardaires, pas à nous

## Quelques sources

- [L'entrainement des modèles s'est fait sans respecter les droits d'auteur·ices](https://cybersecuritynews.com/meta-trained-its-llama-ai-models-using-81-7-tb-of-books-stolen-from-torrent-shadow-libraries/)
- [La classification des données s'est faite en exploitant des travailleuses et travailleurs kenyans](https://www.01net.com/actualites/chatgpt-derriere-la-magie-des-travailleurs-kenyans-payes-une-misere-pour-lexpurger-des-contenus-violents.html)
- [Grok défonce la qualité de l'air à Memphis](https://time.com/7308925/elon-musk-memphis-ai-data-center/)
- [Grok est une IA d'extrême droite](https://www.numerama.com/tech/2030075-quarrive-t-il-a-grok-desormais-fan-dadolf-hitler-et-mechant-avec-les-internautes.html)
- [L'IA met au chômage beaucoup de monde](https://www.cbsnews.com/news/ai-jobs-layoffs-us-2025/)

## Et la conférence de 2025 ?

La conférence de 2025 était centrée sur la qualité logicielle.
La partie IA se focalisait sur l'aspect métier, en occultant l'éléphant dans la pièce.

Par exemple, Grok a été mentionné... 
Sans préciser son origine techno-fasciste plus qu'évidente.

Malgré la qualité des interventions, ce point m'a vraiment déçu.
Je ne suis pas déçu par les personnes qui ont organisé la conférence ou qui y sont intervenues, j'ai même beaucoup apprécié la keynote de fermeture qui m'a fait découvrir les travaux du magazine [Philonomist](https://www.linkedin.com/showcase/philonomist/).

Je suis déçu d'avoir été si naïf.
Déçu d'avoir cru que l'icerberg était si massif que personne ne pouvait l'ignorer.
Il ne s'agit pas d'un problème d'individus (c'est pour cela que je ne nomme personne ici), mais bien d'un problème systémique : trop de place est donnée au narratif des entreprises tech dans les espaces d'expression.

## Mais c'est inévitable, voyons !

Mes 2 centimes : ce n'est pas parce qu'on nous rabâche que l'IA est déjà là et est inévitable que je suis obligé de l'accepter. 
De la même manière que si je débarque chez vous et que j'urine sur votre lit, si je dis "*je fais toujours ça quand j'amène des cookies, goûtez les ils sont super bons*" vous n'allez pas plus accepter.

## Bonus pour les tech-bros

Vous aurez probablement deviné ce que je pense des tech-bro qui clament haut et fort que soit tu utilises l'IA, soit tu es dépassé·e. 
C'est au mieux de l'incompétence ou de l'ignorance (c'est pardonnable, et ça peut se régler), au pire de la malveillance délibérée.

