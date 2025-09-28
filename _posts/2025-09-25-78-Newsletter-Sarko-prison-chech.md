---
layout: newsletter_mail
title: 78 - Hashtag JeSuisNico
category: newsletter
subtitle: Non je déconne, pas de hashtag, je n'ai aucune compassion pour Nicolas
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>

J'aime les bonnes nouvelles.

Typiquement, je considère que ceci est une bonne nouvelle : [Nicolas Sarkozy va aller en prison](https://www.mediapart.fr/journal/france/250925/argent-libyen-de-sarkozy-le-recit-en-direct-du-denouement-du-proces) !

Rassurez-vous, j'ai aussi des nouvelles beaucoup moins bonnes (youpi). 
Nouvelles que j'attrape dans quelques newsletter, sur des espaces discord, sur [news.ycombinator.com](https://news.ycombinator.com/)...
Mais également depuis quelques temps sur [lobste.rs](https://lobste.rs/) ! 
Il y a quelques années, un collègue me l'avait montré.
Je l'avais posé dans un coin de ma tête (le site, pas le collègue), et je l'ai ressorti là : je ressentais un besoin de moins dépendre de ycombinator.

Le principe est similaire, à un détail près : sur hackernews, n'importe qui peut partager un lien, tandis que ce droit est vraiment restreint à un petit groupe de personnes sur lobste.rs.
Je pense que ces 2 modèles sont complémentaires.


Ah, et comme de temps en temps : je publie un peu en décalé, pas d'inquiétude je suis juste en déplacement pro donc j'adapte un peu.

J'ai profité du temps de trajet pour écouter des replays de l'emission "La Dernière" (radio Nova), les podcast [Burn your Idols](https://shows.acast.com/Burn-Your-Idols) de Magali Milbergue, et sa conférence "Burn Your Idols" ([YouTube](https://youtu.be/4nq0jc-7WCw?si=WpEwruxkh-kytiom)). Du divertissement, et de vraies réflexions sur le concept même d'idoles, importantes à comprendre si on veut dépasser un système qui pousse au culte de la personnalité. Typiquement, j'apprécie beaucoup ce que fait Magali, et sa personne également. Ça, c'est cool. Mais la mettre sur un piédestal, en faire une sorte de divinité personnelle, c'est beaucoup moins cool. 

Bonne lecture !

## Tech shit show
### [Shopify et la communauté Ruby](https://joel.drapper.me/p/rubygems-takeover/)
J'avais déjà du mal avec l'entreprise Shopify, qui s'est mise au service du dropshipping (une pratique qui consiste à acheter des articles à super pas cher et à les revendre bien plus cher sans vraie valeur ajoutée, très utilisée par les influenceur·ses, et dont je doute de la morale).

Shopify descend encore dans mon estime en torpillant la communauté open source.

### [l'IA comme guide spirituel](https://arstechnica.com/ai/2025/09/millions-turn-to-ai-chatbots-for-spiritual-guidance-and-confession/)
Je ne suis pas un expert en théologie.
Cependant, je suis 100% persuadé que l'IA n'est pas une divinité, et je ne recommande pas de se tourner vers elle pour des conseils spirituels.

### [Oh, un ver !](https://thehackernews.com/2025/09/40-npm-packages-compromised-in-supply.html)
L'écosystème javascript est encore attaqué, et cette fois c'est un beau ver qui se propage.

Si je comprends bien, l'un des mécanismes de propagation est "*ma CI détecte quand des dépendences de mon protet sortent une version 'patch' (au sens versioning sémantique), et mettent automatiquement à jour dans ce cas*".

### [Intel outside](https://eaton-works.com/2025/08/18/intel-outside-hack/)
Une faille de sécurité dans le sytème de commandes de cartes de visites chez Intel permettait d'accéder à beaucoup trop de données d'employé·es

## Trucs techniques
### [Une histoire familiale](https://taisezmoi.com/#/article/etude-de-cas-migration-windows-11-vers-linux-mint-cinnamon)
Taisezmoi raconte pourquoi et comment elle a migré le PC familial de Windows 11 vers Linux Mint Cinnamon

### [data-url](https://http.dev/data-url)
J'ai du mal à comprendre complètement l'utilité première de ce bout de truc.
Je m'en sers pour ouvrir ceci dans mon navigateur: `data:text/html,<textarea style="width:98vw;height:98vh;font-size:16px;" autofocus></textarea>`

Ca m'ouvre comme une sorte de notepad, ça m'est pas forcément super utile mais je trouve ça rigolo.
Bonus : essayez de faire un lien depuis markown vers ça, avec la syntaxe `[texte du lien](cible du lien)`, ça fait vriller le moteur d'aperçu de github.dev (l'éditeur VS Code en ligne lié à GitHub).

## Para technique
### [Cloudflare, un monopole à éviter ?](https://マリウス.com/thoughts-on-cloudflare/)
J'utilise quelques produits de Cloudflare : pour héberger du front-end à super pas cher, c'est pas mal du tout et vraiment facile à mettre en place. 

En lisant cet article, je me demande s'il ne serait pas temps de changer (mais pas de-suite, parce que j'ai du mal à déterminer quand trouver le temps de faire différement)

### [PDF : Statistiques de chat GPT](https://cdn.openai.com/pdf/a253471f-8260-40c6-a2cc-aa93fe9f142e/economic-research-chatgpt-usage-paper.pdf)
Si vous voulez en savoir plus sur qui utilise chat GPT et comment, Open AI a publié des chiffres.

C'est intéressant, surtout ceci : pour sortir ces stats, Open AI a un accès en clair à beaucoup de conversations avec Chat GPT.
Genre vraiment beaucoup. 

### [Le coup de blues d'après-conférence](https://kattni.com/post-conference-depression-is-real-and-you-are-not-alone)
Après une conférence tech super chouette, ou après une convention geek super chouette aussi, il est normal de ressentir un gros coup de mou.

## Société
### [Pleurer la mort d'un facho ? Non](https://open.substack.com/pub/magalimilbergue/p/90-jirai-danser-sur-leurs-tombes)
Quand quelqu'un se fait tuer, c'est triste...
Mais ça n'enlève rien au fait que cette personne était fasciste.
Charlie n'est pas un héros.

### [Xavier Niel, ce petit malin](https://www.radiofrance.fr/franceinter/podcasts/secrets-d-info/revelations-du-vendredi-29-aout-2025-7291164)
A une époque, je trouvais Xavier Niel cool. 
Dans mon imaginaire, c'était un peu un rebelle !

Sauf qu'en fait c'est un miliardaire (et j'estime qu'un tel niveau de fortune ne devrait pas exister), et qu'il a commencé dans les affaires avec des pratiques pas toujours légales.

## Vidéos et mécanique

### [Tournevis et prise de tête](https://youtube.com/watch?v=ARAQUgkdIvQ&si=mSpEEWiULABt76uE)
Un peu d'histoire et de tournevis cruciforme, avec de l'ingénierie mécanique !

### [Pourquoi les rails n'ont pas besoin de joints d'expansion ?](https://youtube.com/watch?v=Rdj5-6t6QI8&si=IzKUXTTqNXKKYRYl)
La réponse à cette question est : grâce à l'ingénierie mécanique.
Pourtant, la solution n'a pas convaincu de-suite.

La vidéo explique bien, même si j'ai du mal avec le style "reportage à l'américaine".
Du métal liquide, c'est trop cool, pas besoin de rajouter une musique qui en fait des caisses par dessus !

### [Un clavier mécanique parfait. Cher, mais parfait](https://youtube.com/watch?v=N3FEv1qw4_w&si=22G4MEGHe5RN1ujN)
Le problème des claviers mécaniques, c'est le bruit de la touche espace : il a généralement un bruit de ferraille qui bouge.

Le parcours sur lequel cette personne s'est lancé pour résoudre un problème de niche me fascine, et il y a encore une fois de la belle ingénierie mécanique !

## Insolite
### [Evolution de la taille du package d'installation d'Adobe Reader](https://sigwait.org/~alex/blog/2025/08/25/zw6z4E.html)

Je ne sais pas quoi faire de ces données, maintenant vous non plus !
