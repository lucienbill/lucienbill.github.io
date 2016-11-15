---
layout: post
title: Le volume sonore
---

## tl;dr
En lien avec l'article sur le traitement du son, voici un article sur la perception du volume sonore. En bref, si vous vous demandez comment vous débrouiller pour faire en sorte que plusieurs pistes audio soient "au même volume sonore", et comment être certain qu'un spectateur n'ait pas à régler lui-même le son pendant qu'il visionne une de vos productions, cet article vous intéressera !

## Peak vs Volume
Le "peak" est l'amplitude maximale d'un signal. Un peak de -2dB signifiera que le signal ne dépassera jamais -2dB. A un instant t, le niveau du signal pourra être -2dB, cependant le volume sonore pourra être différent : ce volume est une perception plus "globale" du signal (la perception de plusieurs instants, considérés comme un ensemble). En bref : le "peak" et le "Volume" sont deux notions différentes, et la notion qui va nous intéresser est celle de volume. Quand une musique nous paraît "forte", on parle de son volume.

Concrètement, mesurer le peak est facile, et mesurer le volume est un poil plus complexe. Souvent, les débutants confondent ces deux notions et mesurent le peak en pensant mesurer le volume (après tout quand on débute par définition on ne peut pas tout savoir).

Voici une illustration simple : le logiciel de mixage que j'utilise (très occasionnellement, je ne suis pas DJ) me montre un peak à 0dB, et un volume bien plus faible.
![Peak vs Volume]({{ site.baseurl }}/images/posts_data/peak.png)

## La "Loudness War" (guerre du volume)
Mesurer le volume est plutôt compliqué. Tellement compliqué même, que pendant longtemps chacun faisait un peu ce qu'il voulait/pouvait pour gérer le volume des productions. La probélamtique était la suivante : "je produis un disque / une émission de télévision : je veux que le volume sonore soit au moins égal à celui du voisin". Il n'y avait pas de réelle méthode commune pour mesurer le volume ni de norme pour harmoniser le volume des différentes productions : les ingénieurs du son se sont mis à compresser de plus en plus leurs pistes afin que le rendu soit un peu plus fort que celui du voisin, et c'est ainsi que la [Loudness War](https://fr.wikipedia.org/wiki/Guerre_du_volume) est née. 

Cette "guerre" a pour conséquence de nuire à la qualité sonore des productions : en augmentant le volume à outrance, la gamme dynamique s'est vue réduire. Pour résumer, la gamme dynamique est l'écart entre le volume le plus bas et le volume le plus élevé d'une production sonore : si elle est trop grande, il faudra en permanence réajuster le volume d'écoute (et c'est tout simplement très relou), et si elle est trop faible la musique manquera de subtilité et sera fatiguante à écouter (certaines me donnent l'impression d'avoir les tympans écrasés dans un étau). 

Voici un exemple de musique dont la gamme dynamique me semble trop faible : [Carpenter Brut : Le Perv](https://soundcloud.com/carpenter_brut/le-perv-preview).
Voici un exemple de musique electro très compressée mais dont la gamme dynamique me satisfait : [Mitch Murder : The Touch](https://soundcloud.com/daataa/mitch-murder-the-touch).

Pour mettre fin à cette guerre, il a fallu définir un moyen de mesurer le volume sonore, et établir un volume sonore et une gamme dynamique recommandés à destination des ingénieurs du son.

## Comment mesurer le volume ?
Des normes ont été définies, [cet article](http://aesfrance.info/le-loudness-ou-sonie) en parle plutôt bien. Il existe es programmes informatiques conformes à ces normes pour mesurer le volume et vérifier qu'il est "correct", j'utilise [MLoudness Analyser](https://www.meldaproduction.com/MLoudnessAnalyzer). Le schéma suivant résume les informations que j'utilise : 
![Mesurer le volume]({{ site.baseurl }}/images/posts_data/dynamic.png)

## Mes réglages
Pour les productions de type "talk show", on doit entendre distinctement les voix, et le spectateur ne doit pas avoir besoin de retoucher aux réglages sonores durant le visionnage. Je vise dans ce type de situation un volume cible de -10 LU et une gamme dynamique de -9 LU. Pour obtenir un résultat conforme à ces objectifs, je compresse généralement légèrement mon son (ratio = 2:25, seuil = - 40dB). 

[Voici un exemple](https://www.youtube.com/watch?v=CL6VzWFI0Dc) : une rediffusion d'un stream dont j'ai retraité le son.

Quand je compose une musique je fais plus simple : je ne mesure pas le volume, je me fie à mon oreille. Je le règle lorsque j'utilise cette musique dans une production.

Lorsque je crée une playlist (exemple : une clé USB contenant des musiques pour les diffuser dans ma voiture), je retraite les musiques de la même façon que je traite les talk shows : l'idée est toujours en encore de ne pas avoir besoin d'augmenter ou de baisser le son en cours d'écoute.
