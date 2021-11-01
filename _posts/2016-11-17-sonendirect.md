---
layout: post
title: Traiter le son en live
category: obsolete
---

Savoir traiter le son en post-prod, c'est bien. Mais quand on doit diffuser en direct, il faut savoir le traiter en direct ! Cet article décrit mes recommendations pour ce type de problématique.

## But et enjeux

Comme toujours, mon but est le même : obtenir un son intelligible, agréable, et qui permet au spectateur de poser sa télécommande et de ne plus y toucher. Cependant cette fois-ci les enjeux sont plus conséquents : un spectateur sera capable d'avoir de l'indulgence pour une websérie dont le son n'est pas parfait, mais sera beaucoup plus critique s'il regarde une émission de télévision dont le son est mal géré. C'est aussi vrai dans une moindre mesure pour le streaming.

Je ne produis pas d'émission de télévision, mais je gère le son pour certains streams sur Twitch avec l'association [All Geek Studio](https://www.facebook.com/AllGeekStudio/) et la WebTV [Connectesport](https://www.twitch.tv/connectesport). L'idée est : "Ce n'est pas de la télévision, mais faisons comme si c'en était". Cela implique qu'on essaie d'être le plus professionnel possible, et cela passe par un son bien réglé. Après de nombreuses tentatives et expérimentations plus ou moins fructueuses, j'ai enfin trouvé une solution que je juge satisfaisante : cet article a pour but de vous la présenter sans que vous ayez besoin de passer par la phase "grosse galère".

## Hardware ou Logiciel ?

Faut-il utiliser du matériel dédié pour traiter le son en live, ou utiliser un logiciel ? Pour répondre à cette question, il faut en fait se poser la suivante : "quelle est mon budget ?". Si vous avez un gros budget, prenez du hardware, sinon commencez par du software.

### Hardware

Dans l'idéal, je recommande d'utiliser un compresseur + de-esseur sur chaque microphone, et de compresser légèrement le reste. De nombreux fabriquants proposent du matériel, renseignez-vous avant de choisir un fournisseur. A titre d'exemple, si je devais acquérir du hardware, je choisirais du [DBX](https://www.thomann.de/fr/dbx_compresseurs_gates_de_esser.html?viewMode=block) : je n'ai jamais testé mais il paraît que c'est fiable.
Il faudra également penser au mixage des différentes sources sonores, et au fait que tous les micro-casques ne fonctionnent pas forcément avec ce type de matériel.

Voici un exemple : 

**Streameur solo qui joue sur son PC**

Matériel : 

  * un micro XLR (exemples : [celui-ci](https://www.thomann.de/fr/samson_q7.htm) ou [celui-là](https://www.thomann.de/fr/audio_technica_at2020.htm)) ; Lisez les specs, si le micro a besoin d'une alimentation phantom 48, il faudra lui fournir cette alimentation pour qu'il fonctionne.
  * un pied de micro (sauf si vous tenez vraiment à le scotcher à l'arrache sur un manche à balais coincé entre une chaise et un canapé)
  * un compresseur de-esseur (pour traiter la voix). Exemple : [DBX 286 S](https://www.thomann.de/fr/dbx_286_s.htm)
  * Optionnel : un compresseur stéréo pour traiter le son qui sort du PC (le son du jeu). Exemple : [DBX 266 XS](https://www.thomann.de/fr/dbx_266_xs.htm) -> note : traiter le son du jeu est rarement nécessaire
  * un table de mixage et les câbles adaptés pour mixer le tout. J'ai [celle-ci](https://www.thomann.de/fr/alto_zmx_862.htm).
  * une carte son afin de récupérer la sortie de la table de mixage et de l'utiliser comme source pour le stream

Tout ça mis bout-à-bout, c'est cher. Mais j'arrive à me débrouiller avec moins que ça.

### Logiciel

J'ai récemment trouvé un logiciel assez magique : une table de mixage virtuelle avec des effets intégrés. Elle s'appelle [Banana Voicemeeter](http://vb-audio.pagesperso-orange.fr/Voicemeeter/banana.htm). Je vous recommande de tester cette merveille ! 

Concrètement, voici comment je l'utilise : 

  * le son de mon micro est géré par une entrée du mixeur virtuel. J'applique une légère compression (valeur : 3 maximum), et un très léger gate (pour couper le son quand je ne parle pas, mais pas de façon trop brutale), je règle l'equalizer pour virer les fréquences trop graves et trop aigües, et je passe l'entrée en "mono".
  * le son du jeu est géré par une autre entrée, à laquelle je n'applique aucune effet
  * le tout est redirigé vers le haut-parleur virtuel VB-Audio Câble (ou n'importe quelle autre sortie gérée par Banana Voicemeeter : il suffira de configurer le logiciel de streaming pour qu'il capture le bon périphérique) 
  
En bref, cela signifie que si vous avez juste un micro-casque de gamer et un ordinateur vous pouvez vous en sortir.

Ces réglages peuvent vous servir de base, mais ne les appliquez pas aveuglément : testez, effectuez des enregistrements et écoutez-les ! Il faut que le résultat vous semble satisfaisant. Personnellement, je me fie à mon oreille et à un outil de mesure de volume et de gamme dynamique (j'en parle [ici]({{ site.baseurl }}/VolumeSonore/)). Il se peut par exemple que vous jugiez la compression néfaste sur le son du micro (car le compresseur du logiciel est très basique et manque de subtilité), ou que le "gate" sur la voix ne vous plaise pas. Fiez-vous donc à votre opinion, et n'hésitez-pas à demander l'avis de vos spectateurs.

**Bonus : serveur vocal**

Si vous jouez en équipe pendant que vous streamez, vous utilisez certainement un serveur vocal (Skype, Discord, Mumble...). Petite astuce : vous pouvez compresser le son qui sort de ce serveur avant de l'envoyer vers le live et/ou vos oreilles ! Vos équipiers pourront continuer d'alterner entre cris et chuchottements : la variation de volume sonore sera réduite (ce sera bien plus confortable pour les spectateurs).
Si vous avez du Hardware, c'est facile. Avec du software c'est plus complexe : je ne suis pas certain que Banana Voicemeeter vous permette de le faire (ce doit être possible, mais il faut certainement truander).

### Décalage audio-vidéo

Le traitement du son, qu'il soit matériel ou logiciel, n'est pas toujours instantanné. Cela peut avoir pour effet de mettre votre son en retard par rapport à votre image : c'est quelque chose qu'il faut vérifier ! Dans OBS Studio cela peut se régler en ajoutant un délai à vos sources vidéo : vous pourrez ainsi resynchroniser votre image avec votre son. Les logiciels concurrents proposent sans doute la même fonctionnalité.
