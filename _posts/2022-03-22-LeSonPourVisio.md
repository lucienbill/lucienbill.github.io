---
layout: post
title: Comment avoir un bon son en visio ?
excerpt_separator: <!--more-->
---

Entre le télétravail et les équipes réparties sur différents site, si vous bossez dans l'informatique, vous ~~subissez~~ participez probablement à beaucoup de visio-conférences.
Vous avez certainement au moins un collègue dont le son est systématiquement dégueulasse, et maintenant que vous y pensez, vous réalisez que vous ne savez pas vraiment gérer votre micro ?
Pas de panique, j'ai quelques astuces !
<!--more-->

## Un bon son, mais pour quoi faire ?
J'ai été preneur de son et ingé son pour une websérie : travailler le son est devenu un passe temps que j'apprécie beaucoup.
Personnellement, cette raison me suffit.
Mais j'ai une raison bonus : 
- Vous semblerez plus intelligent avec un son de bonne qualité (c'est pas moi qui le dit, c'est "[prouvé scientifiquement](https://tips.ariyh.com/p/good-sound-quality-smarter)" comme les machins qu'on voit au téléachat)

## Principe
Je suis radin, et je veux du son de bonne qualité.
On va donc éviter les micros à 1000€.

Aussi : on va chercher à maximiser le rapport signal/bruit, en rapprochant le micro de la source à capter.
Autrement dit : si votre micro est proche de votre bouche, le son sera certainement de meilleur qualité que si le micro est situé vers une de vos oreilles (si vous avez des AirPod, par exemple)

## Au bureau
Si vous travaillez en présentiel, privilégiez du matériel simple : quelque chose de léger, et qui fonctionne dès qu'on le branche.
J'ai une préférence pour le classique "combiné micro casque USB" à environ une cinquantaine d'euros.
C'est basique, ça fonctionne souvent mieux que le matériel pour smartphone, et avoir une touche dédiée pour couper le micro est vraiment très pratique.

Si votre bureau est animé, privilégiez du matériel avec suppression de bruit intégré.
Et si vous tenez absolument à avoir du sans-fil, je conseille le modèle [opencomm](https://fr.shokz.com/products/opencomm) de Shokz: la suppression de bruit est vraiment excellente !

## A la maison
Si vous avez un espace dédié au télétravail, vous pouvez aller plus loin, et vous focalisez sur la qualité au détriment de la simplicité de mise en œuvre. 
Avoir quelque chose qui ressemble à un mini studio de radio, ça en jette, et ça permet d'ajouter un argument dans la discussion "je suis vraiment mieux en télétravail qu'au bureau".
Voici comment gérer ce type de matériel

### Micro
Avant d'acheter un Blue Yeti pour faire comme les copains, posez-vous la question suivante : mon espace de travail est-il silencieux ?
Quand vous travaillez, êtes-vous dans le quasi-silence, ou entendez-vous le ventilateur de votre machine, les oiseaux dehors, vos voisins, les travaux dans la rue ?
A moins de vivre dans un studio de musique, vous vivez probablement dans le bruit.
Mieux vaut dans ce cas prendre un micro peu sensible : il captera bien votre voix parce qu'il sera proche de votre bouche, et captera beaucoup moins le reste.

Les catégories qui vont nous intéresser sont :
- Les micros à condensateur. Ils sont généralement très sensibles : on branche, ça capte du son. C'est intéressant, mais vos collègues entendront aussi très bien vos enfant qui jouent dans la pièce d'à côté. Pour notre utilisation, c'est pas terrible
- Les micros à condensateur. On en retrouve sur les plateaux télé et les scènes de concerts : leur sensibilité est faible, ils sont conçus pour capter surtout ce qui est juste devant eux. 

Notes : 
- Les points ci-dessus sont des généralités, pas des règles absolues. On peut trouver des micros à condensateurs moins sensibles que des dynamiques. Et il existe d'autres types de micro, mais pour aujourd'hui on les met de côté.
- La légende raconte que les micros à condensateur ont un meilleur sont que les micros dynamiques. Mais la légende est concentrée sur des cas d'usages qui ne sont pas le notre : le cinéma, le chant, etc. Pour capter votre voix pour une visio, la qualité d'un micro dynamique est amplement suffisante

#### USB ou XLR ?
Le micro USB est plus simple à utiliser : on le branche, et ça fonctionne.
Mais je préfère avoir un micro avec connecteur XLR : ça me permet de brancher le micro sur du matériel de traitement de son professionnel, et d'avoir un système plus modulaire (un rôle = un composant).
L'aspect modulaire m'intéresse pour le traitement du son : je veux que le son qui arrive dans ma machine soit traité.
Parce qu'en théorie, il existe de très bons logiciels pour traiter votre son, mais en pratique 

TODO : modèles. 
- USB : 
  - Blue Yeti = non, trop cher (et condensateur). Si vraiment vous voulez du condensaeur : ref xxxx (elgato ?)
  - dyn pas trop cher
- XLR
  - Condensateur pas cherf
  - dyn pas cher
But : micro qui nécessitera peu de traitement. Evitez le Shure SMB je sais plus quoi (la ref de ref) : super son... si on a de quoi l'amplifier (gros gain), et l'égaliser.
  
#### Un filtre anti-pop, c'est bien ? 
Oui et non.
Personnellement, je n'aime pas : ça prend trop de place.
Plutôt que de parler directement dans le micro pile devant vous, placez-le sur le côté, pointé vers le coin de vos lèvres (comme sur le magnifique schéma ci-dessous, qui représente une vue de dessus de ma tête et du micro).
Ajoutez une bonnette bon marché, et vous n'aurez plus problème de plosives (les "p" et "t" qui provoquent des sons désagréables)

![Schéma Paint : placement du micro](/images/posts_data/placementMicro.png)

Je recommande de placer le micro à environ 15cm de vous.
Le mien est bien plus proche : j'ai un clavier très bruyant, et le meilleur moyen de faire en sorte qu'il s'entend peu est de rapprocher le micro de moi (toujours dans l'idée d'augmenter le rapport signal/bruit).

### Interface son
Si votre budget est serré, prenez une interface 16 bits avec EQ intégré : ça fera largement l'affaire
Pas cher 16 bits = fait largement l'affaire
mon matos : 24bits, parce que musicien

### Egalisation
Intégrée à la carte son = fait l'affaire pour ce qu'on fait.
Sinon : eq paramétrique

### Compresseur
Pas forcément nécessaire
    Cris et chuchotements ? OK
    Si ça sature un peu en visio parfois, on s'en remettra
Mon matos et mon réglage = blablabla

### Suppression de bruits
NVidia Broadcast. Super utile quand il y a des travaux chez un collègue

## Testez, testez, testez
Audacity

## Mon matériel