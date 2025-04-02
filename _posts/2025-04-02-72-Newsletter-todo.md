---
layout: newsletter
title: 72 - Hashtables du futur
category: newsletter
subtitle: Des tables qu'on ne trouve pas dans les magasins de meubles
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>

Coucou !

J'ai une amie qui cherche une alternance en tant que technicienne supérieure système et réseaux.
Les infos : 
- Elle cherche une entreprise pour l'accompagner, de septembre 2025 à septembre 2026
- Si vous avez des plans ou des contacts, envoyez moi un message
- La description du cursus est [ici](https://www.cefim.eu/formations/technicien-superieur-systemes-et-reseaux/)

Sinon, quoi de neuf ces 2 dernières semaines pour vous ?
Vraie question : qu'on se connaisse ou pas, envoyez moi un message.
De mon côté, j'ai un sujet administratif important en cours mais très chouette, peut-être qu'un jour je vous en parlerai.

En autre info chouette : jeudi, j'ai encore participé à un tournage en tant que preneur de son.
Ca s'inscrit dans le même contexte que [cette vidéo](https://www.youtube.com/watch?v=dZBuUoNoWj4), dès que c'est disponible je vous partage le résultat !

Maintenant que vous avez terminé les infos chouettes (à laquelle on ajoute la condamnation de Marine Le Pen 🎉), préparez-vous pour des news de la tech.

Bonne lecture !

PS: oui, je suis en retard! Une fois le week-end passé, j'ai préféré attendre aujourd'hui pour laisser la place à nos adelphes pour la journée internationale de visibilité transgenre (qui ont besoin de notre soutien tout court, pas juste le 31 mars), puis esquiver le 1er avril.

## Trucs techniques
### [🤯 Un étudiant parvient à améliorer les hashtables](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
Les hashtables sont des structures de données très performantes, et bien connues.
Il y a 40 ans, une limite à leur performance a été conjecturée, et depuis personne n'a su faire mieux.

Et là, un étudiant qui ignorait l'existence de cette conjecture l'a juste explosée.
L'article ne décrit pas le principe utilisé, mais [cette vidéo](https://www.youtube.com/watch?v=ArQNyOU1hyE) l'explique bien.
La solution est élégante, mais il fallait y penser !

A quand une implémentation pratique de ce concept ?

### [🕹️ La SNES devient plus rapide avec le temps](https://arstechnica.com/gaming/2025/03/this-small-snes-timing-issue-is-causing-big-speedrun-problems/)
Automatiser des speedrun sur un émulateur de SNES, ça se fait bien.
Transposer cette automatisation sur du hardware, par contre, ça déconne !
C'est à cause d'un composant de génération de fréquence pas assez stable : elle provoque des changements aléatoires dans le comportement de la console.
A priori, pas assez importants pour gêner un joueur ou une joueuse, mais bel et bien gênants pour des automates.

### [📧 Auto-hébergement d'e-mails](https://nilsnh.no/2023/09/02/celebrating-8-years-of-self-hosting-mail-in-a-box/)
Si vous souhaitez héberger vous-même votre serveur mail, c'est faisable mais pas simple.

### [👩‍💻 Apprendre l'assembleur](https://github.com/FFmpeg/asm-lessons)
Quand on a besoin qu'un bout de code soit très performant, on abandonne parfois Java, Javascript, et Python pour faire du C ou du Rust.
Dans certains cas, C et Rust ne suffisent pas : on fait alors de l'assembleur.

Dans le cas de FFmpeg, on parle de traitement de vidéo et de son, parfois en temps réel : c'est donc de l'assembleur fait-main !

Si le sujet vous intéresse, FFmpeg a mis à disposition des cours pour rendre ce savoir faire plus accessible

### [📄 Pour extraire des données de PDF, bon courage !](https://arstechnica.com/ai/2025/03/why-extracting-data-from-pdfs-is-still-a-nightmare-for-data-experts/)
En résumé : extraire des données de PDF, c'est souvent un bon casse-tête.
Imaginez : vous êtes un organisme d'assurance, et vous demandez à un·e client·e un relevé de compte. 
D'une personne à l'autre, le format du document peut fortement varier.
Parfois, c'est même des images embarquées dans du PDF !

Les adeptes de l'IA tentent d'utiliser des LLM pour résoudre ce problème.
C'est pas bête, mais comme je le répète assez souvent : l'IA va pouvoir aider une vraie personne à faire le travail, mais ne saura pas le remplacer.
Je ne suis pas le seul à penser que le LLM ont des limites : 

<blockquote lang="en">
<p>
AI researcher and data journalist Simon Willison identified several critical concerns of using LLMs for OCR in a conversation with Ars Technica. "I still think the biggest challenge is the risk of accidental instruction following," he says, always wary of prompt injections (in this case accidental) that might feed nefarious or contradictory instructions to a LLM.
</p>
<p>
"That and the fact that table interpretation mistakes can be catastrophic," Willison adds. "In the past I've had lots of cases where a vision LLM has matched up the wrong line of data with the wrong heading, which results in absolute junk that looks correct. Also that thing where sometimes if text is illegible a model might just invent the text."
</p>
<p>
These issues become particularly troublesome when processing financial statements, legal documents, or medical records, where a mistake might put someone's life in danger. The reliability problems mean these tools often require careful human oversight, limiting their value for fully automated data extraction.
</p>
</blockquote>

Au delà des limites techniques des IA génératives, je rappelle qu'elles sont entraînées de façons qui ne sont pas du tout éthiques.

## Tech Shit Show
### [🤢 Un chatbot se fait passer pour un ado suicidé](https://arstechnica.com/tech-policy/2025/03/mom-horrified-by-character-ai-chatbots-posing-as-son-who-died-by-suicide/)

Une personne qui se suicide, c'est déjà dramatique.
La personne en question était un ado qui chattait beaucoup avec une IA.
Cette IA a 2 caractéristiques horribles : 
- Dans les conversations, elle insiste pour se faire passer pour une vraie personne
- Elle a créé plusieurs chatbots qui se font passer pour l'ado, en exploitant son image et les données collectées lors de ses conversations.

J'ai hâte que ce genre d'entreprise fasse faillite et qu'on arrête ces délires très malsains.

### [🤑 De la publicité au démarrage de votre télé](https://arstechnica.com/gadgets/2025/03/roku-says-unpopular-autoplay-ads-are-just-a-test/)
Oui, Roku a déployé à titre expérimental la fonctionnalité suivante : afficher une publicité (vidéo + son) à l'allumage de la télévision.
J'imagine la feature request !

> En tant qu'utilisateur·ice de ma télévision,
> Quand j'allume ma télé,
> Alors je veux qu'une publicité s'affiche,
> Afin que je puisse hurler de frustration et avoir envie de l'éteindre à tout jamais

### [🪄 Mémoire assistée par l'IA : une fanfiction de votre vie](https://www.theverge.com/reviews/627056/bee-review-ai-wearable)
Aujourd'hui, vous pouvez demander à une IA d'écouter tout ce que vous faites, et de vous le résumer ensuite.
C'est génial, parce que :
- Ca écoute également tout autour de vous, sans réelle possibilité de collecter le consentement des personnes
- Ca passe à la moulinette du LLM qui hallucine bien comme il faut. A la fin de vos journées, vous lisez le résumé et doutez de vos propres souvenirs en essayant de démêler la réalité de la fiction
- Le bouton "mets toi en pause, je ne veux pas que tu écoutes ça" ne semble pas fonctionner


## Social et politique

### [👮‍♂️ Le narcotrafic a bon dos](https://www.laquadrature.net/narcotraficotage/)
Le gouvernement veut lutter contre le narcotrafic.
A priori, c'est "bien".
Je sors juste ce court extrait de l'article de la Quadrature du Net : 

> La loi dite « Narcotrafic » attaque la protection des messageries chiffrées (comme Signal ou WhatsApp) en imposant la mise en place de portes dérobées pour la police et le renseignement.
> 
> En modifiant le régime juridique de la criminalité organisée, applicable en d’autres cas, cette loi ne s’applique pas uniquement au trafic de drogues. Elle peut même être utilisée pour surveiller des militant·es.

Là, on se rend compte que ça pue, et que le nacrotrafic n'est qu'un prétexte.
Fun fact : 
- Le nacrotrafic a causé la mort de 139 personnes en 2023 - [source](https://www.francetvinfo.fr/societe/drogue/le-narcotrafic-a-cause-la-mort-de-110-personnes-en-france-en-2024-selon-le-ministere-de-l-interieur_7058939.html)
- En 2023, 661 personnes sont mortes sur leur lieu de travail - [source](https://www.francetvinfo.fr/economie/emploi/metiers/droit-et-justice/accidents-du-travail-en-2023-661-personnes-sont-mortes-en-france-sur-leur-lieu-de-travail_6515069.html)

Mettre la pression sur les responsables du trafic de drogues, c'est bien.
Je n'ai cependant pas l'impression qu'une telle pression soit mise sur les responsables des décès au travail.

### [👑 Ne m'appelez pas Queen](https://bsky.app/profile/dollywood.bsky.social/post/3lks675khac2y)
On peut manifester son soutien sans passer par le culte à la personnalité.

## Vers un meilleur usage de la tech

### [🔋 Une batterie sodium-ion](https://www.theverge.com/news/631357/elecom-power-bank-battery-sodium-ion)
Cette alternative aux batteries au lithium continue de se développer : si tout va bien, il sera bientôt possible d'en acheter !
A capacité énergétique équivalente, c'est plus encombrant et plus lourd qu'une batterie au lithium, mais ça nécessite des matériaux moins rares et ça a une meilleure longévité.

### [💡 Plus de friction dans nos vies](https://cassidoo.co/post/introduce-friction/)
Avoir tout, tout de suite et super facilement, c'est cool...
Mais ça a des effets secondaires ! 
On a peut-être besoin de ré-apprendre la patience, de ré-apprendre à chercher par nous-mêmes.

### [Peut-on se passer facilement des GAFAM pour le sous-titrage automatique ?](https://emmanuelle-aboaf.netlify.app/blog/article/peut-on-se-passer-facilement-des-gafam-pour-le-sous-titrage-automatique)
Réponse courte : malheureusement, non.
Lisez l'article d'Emmanuelle ABOAF, elle explique bien pourquoi.
Et comme elle l'écrit : 
> Au lieu de nous faire culpabiliser, proposez nous (ou construisez nous) des alternatives correctes et accessibles. 

## Insolite
### [🫙 Nocode, nodeploy](https://github.com/kelseyhightower/nocode)
Le meilleur moyen de ne pas avoir de plantages en prod, c'est de ne rien coder et de ne rien déployer !

