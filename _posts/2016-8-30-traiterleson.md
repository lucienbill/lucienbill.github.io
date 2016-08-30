---
layout: post
title: Les bases du traitement du son
---

traiter le son 

## tl;dr
Traiter le son est un vaste sujet. Pire encore : c'est tout un art et il est extrêmement facile de se planter ! Je ne suis pas ingénieur du son de métier, mais à force de recherche et de pratique j'ai fini par apprendre certaines choses. Cet article est destiné à ceux qui veulent prendre un raccourci et éviter de tomber dans les pièges dans lesquels je suis tombé lors de mon apprentissage.

Concrètement ma façon de traiter le son est encore en évolution, et je ne suis pas encore tout à fait satisfait des résultats que j'ai produits. Si cela ne tenait qu'à moi je remplacerais très régulièrement les vidéos dont j'ai traité le son et les musiques que j'ai composées par des versions améliorées, mais il faut savoir s'arrêter. Ce qui a été produit dans le passé appartient au passé : s'acharner dessus est dangereux et peut empêcher d'avancer. Prenons mes musiques sur SoundCloud : je pourrais les remplacer aujourdh'ui par des versions améliorées, mais cela ne m'avancerait à rien car dans 3 mois je voudrai répéter l'opération. Autant ne pas le faire du tout : les musiques que j'ai publiées sont le résultat de ce que je savais faire au moment où je les ai composées, et le fait que je n'en sois pas entièrement satisfait aujourd'hui est bon signe car cela signifie que je me suis amélioré. Ce constat ne me rend pas satisfait de mon insatisfaction mais me permet de relativiser.


## Buts
Lorsque je traite un dialogue (ou un monologue. Bref : une scène dont l'élément dominant est un ensemble de voix humaines), je cherche à atteindre les résultats suivants : 

 * Les dialogues sont intelligibles
 * Le son ne fait pas mal aux oreilles
 * Il n'y a pas besoin de monter et baisser le volume en permanance lors du visionnage
 * *Bonus* : avoir un "beau" son. 

### Pourquoi ces buts ?

Concrètement, je suis un spectateur fénéant : je veux pouvoir regarder une vidéo sur l'écran d'une télévison, affalé dans le canapé, sans avoir à toucher à la télécommande une fois que la vidéo est lancée. Je ne veux devoir faire des efforts pour comprendre ce que raconte un personnage parce que sa voix serait en partie masquée par un bruit de moteur d'avion. Je ne veux pas qu'un sifflement aigü me vrille les tympans tout le long de la vidéo. Je ne veux pas avoir à augmenter le son pour entendre ce que dit un personnage, puis le baisser plus tard car un autre personnage parle beaucoup plus fort.

C'est très subjectif, mais je veux également si possible produire un son que je trouve plaisant à écouter. Au minimum, je veux qu'il ne soit pas désagréable, mais c'est un strict minimum.

## Les outils
Voici les outils que j'utilise : 

 * Audacity : pour traiter le son, c'est le logiciel que je préfère
 * Un casque ouvert : c'est le type de casque le plus "neutre" possible, c'est à dire qu'il ne va pas déformer le son en suramplifiant les basses, par exemple.
 * Mes oreilles : ça peut paraître une évidence, mais j'utilise mes oreilles et je leur fais confiance. J'utilise énormément ma perception, qui est le caractère subjectif et non quantifiable de mon analyse
 * Une télévision. Ce n'est pas très orthodoxe, mais cela me permet de tester des conditons réèles d'écoute. Quand je regarde une vidéo du Joueur du Grenier, j'utilise cette télévision. Il me semble donc logique de l'utiliser pour tester le son que je traite.

## Nettoyage du son

La première étape de mon traitement est le nettoyage : je veux mettre en avant le son "utile", comme la voix des acteurs, et diminuer le son parasite (exemple : le bruit du vent).

### Réduction du bruit

La suppression de bruits se fait en deux étapes : 

 1 - On doit indiquer au réducteur de bruit à quoi ressemble le bruit qu'il doit réduire. Typiquement, lors de la prise de son on aura enregistré 30 secondes de "silence" : personne n'aura parlé/bougé/fait de bruit durant cet enregistrement, mais on aura enregistré le bruit ambiant de la pièce et le bruit lié au matériel d'enregistrement
 2 - On sélectionne une portion de son à traiter, on règle la sensibilité du réducteur et on réduit.

Je recommande de ne pas être trop aggressif avec cet effet : cela peut déformer les voix de façon très percéptible. J'ai tendance à trop forcer sur cet effet. La bonne nouvelle, c'est que lorsqu'une musique de fond est ajoutée sur les dialogues, la déformation de la voix peut passer innaperçue. 

### Egalisation
Si j'ai l'impression qu'un son est trop grave ou trop aigü (ou autre), je modifie l'égalisation. Par exemple, dans l'épisode 4 de la saison 1 d'IRL - In Raph Life, lors que le personnage de Sam est en voix off, j'ai atténué les graves (-6 dB pour les fréquences inférieures à 200 Hz).
Si nécessaire, Je me sers de l'égalisation pour couper ce qui est trop grave et trop aigu. Je teste les réglages au fur et à mesure pour obtenir l'effet recherché. Pour couper le vent dans les scènes en extérieur, j'ai tendance à couper tout ce qui est situé en dessous de 150 Hz.

## Compresseur et limiteur
Mise en situation : vous visionnez tranquilement une vidéo d'Antoine Daniel ou un épisode de l'excellente websérie [Ephemera](https://www.youtube.com/playlist?list=PLn-a-erCPOXdtJhQl2qv4t5v84-7MGj9p). Vous passez un bon moment, mais vous êtes obligé d'augmenter le son sur certains passages, puis de le baisser sur d'autres pendant le visionnage. Ce n'est pas la fin du monde mais c'est tout de même gênant. En tout cas, ça me gêne. Voici donc ce que je fais pour épargner ce désagréement au spectateur qui visionnera les vidéos d'All Geek Studio.

### Régler le volume à la main
Si tous les plans de la vidéo à traiter sont filmés dans les mêms conditions (exemple : on filme en un seul plan fixe, on ne bouge jamais par rapport au micro, et on parle à peu près toujoours au même niveau) on peut envisager de se passer du réglage manuel et passer de suite par un compresseur et un limiteur. 

Pour le cas d'un épisode de websérie : on a plusieurs plans tournés dans des conditions très différents. Quand un personnage chuchotte j'augmente le son, et quand un personnage crie je baisse le son.

#### Normaliser VS Amplifier
Pour augmenter ou baisser le son, on peut utiliser l'amplification. Cependant quand on souhaite augmenter un son, l'amplification pourra causer un problème : on augmente le signal voulu, mais également le bruit. Il existe une alternative : la normalisation. Pour résumer, quand on normalise un signal, les signaux forts sont fortement impactés et les signaux faibles sont faiblement impactés. C'est plus subtil que l'amplification, et j'obtiens des résultats que je juge plus satisfaisants.

### Compresseur
En bref : un compresseur permet de réduire l'écart entre les sons faibles et les sons forts. Bien réglé, on ne le remarque pas : l'écart est toujours présent, mais suffisament faible pour épargner au spectateur la nécessité d'augmenter / baisser le son en cours de visionnage. Mal réglé, il détruit le son :

 * C'est le cas de certaines émissions de radio. C'est très perceptible lorsque les intervenants parlent sur une musique de fond : dès qu'ils parlent, la musique de fond diminue fortement, pour augmenter dès qu'ils cessent de parler. C'est parce que la compression est très forte, et je trouve cela très désagréable.
 * J'ai trouvé une vidéo qui montre parfaitement l'effet d'une compression trop aggressive sur une musique [ici](https://www.youtube.com/watch?v=-v6ML2DsBfA).

Pour utiliser un compresseur, on définit un seuil et un taux de compression. Dès que le signal en entrée sera plus fort que le seuil, il sera affecté par le taux de compression. Ce taux peut se définir par "pour X décibels en entrée, on aura Y décibels en sortie". Exemple : un ratio de 5:1 signifiera que pour 5 décibels en entrée, on aura 1 décibel en sortie. Expérimentez pour trouver les réglages qui s'adaptent à votre situation, en gardant à l'esprit qu'une compression trop forte dénaturera le son.

### Dé-esseur

Le dé-esseur est un effet assez particulier : il permet d'atténuer les "s". Oui, le son associé à la lettre "s". Cet effet est très utile sur les sons très compressés, où les "s" peuvent être très aggressifs. Bien réglé, le dé-esseur permet de rendre un voix plus agréable à écouter.

### Limiteur

Le limiteur est un effet simple à comprendre : on définit un seuil, le son ne pourra pas le dépasser. Il s'agit d'un compresseur avec un taux de compression extrêmement élevé. C'est très utile pour atténuer les percutions. Par exemple, si un personnage se met à taper très fort dans ses mains, le limiteur sera très utile.

### Résultat final
max = -1 dB ; Pour visionnage : chuchottement = on comprend qu'il chuchotte ; cri = on comprend qu'il crie, pourtant il n'y a pas besoin de régler le volume en cours de visionnnage. Les écarts de sons entre cris et chuchottements existent, mais sont grandement réduits.
Exemple : IRL S01E04 (note : j'ai été trop aggressif sur la suppression de bruit et certaines compressions, mais c'est intelligible)
TRS Starfox : son traité en direct (j'écrirai à ce sujet plus tard), + post prod légère
