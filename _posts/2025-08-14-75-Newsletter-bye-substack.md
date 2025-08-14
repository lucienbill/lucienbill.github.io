---
layout: newsletter
title: 75 - Au revoir Substack
category: newsletter
subtitle: Substack, c'est gratuit, mais c'est bien trop gentil avec les nazis. Je pars donc ailleurs !
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>

Salut !

Puisque le problème des nazis sur Substack est [toujours d'actualité](https://arstechnica.com/tech-policy/2025/07/substacks-nazi-problem-wont-go-away-after-push-notification-apology/), c'est décidé je change de plateforme...

Enfin, je vais essayer.

J'ai commencé à mettre quelque chose en place chez Infomaniak : [https://lucienbill.news/](https://lucienbill.news/).
L'expérience utilisateur·ice pour éditer n'est pas aussi bien pensée, mais c'est pas cher.
Il me reste à vérifier que ça fonctionne (ça sera pour le prochain billet), et à réparer la page d'inscription : elle est moche, et charger plus de 80 ko de données pour 2 paragraphes et un petit formulaire, ça me paraît beaucoup.

Bref : si tout va bien, c'est la dernière fois que vous me lisez sur Substack, et les prochains e-mails viendront d'une adresse  en `*@lucienbill.tech`

Bonne lecture !

## Trucs techniques
### [14 ko pour votre site web](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/)
Avoir une page d'accueil qui fait moins de 14 ko peut rendre le chargement bien plus rapide, à cause de la façon dont les données sont découpées et envoyées aux internautes.

C'est pas trivial: quand vous allez sur [lucienbill.fr](www.lucienbill.fr) vous ne chargez pas grand chose, mais ça dépasse déjà les 30 ko !

### [Quake en 13 ko de javascript](https://lunduke.substack.com/p/quake-in-13k-of-javascript)
C'est cool, non ?


### [anime.js](https://animejs.com/)
La démo est super classe ! 

Bon, je fais très peu de front-end, donc je ne pense pas m'en servir de si tôt, mais je le pose là.

## Tech shit show
### [LinkedIn jette les personnes trans sous le bus](https://www.thepinknews.com/2025/07/31/linkedin-deadnaming-misgendering-hateful-content-policy/)
LinkedIn et la modération, c'est de base pas vraiment parfait.

La plateforme a une page qui décrit ce qu'elle considère comme discours haineux, et liste quelques exemples.

L'élément suivant a été retiré de la liste: 

> Misgendering or deadnaming of transgender individuals

Pas bravo à LinkedIn, qui prend ici clairement parti pour l'extrême droite.

### [Meta et les données des cycles menstruels](https://arstechnica.com/tech-policy/2025/08/jury-finds-meta-broke-wiretap-law-by-collecting-data-from-period-tracker-app/)
Meta prétend respecter nos vies privées, mais le jury n'est pas vraiment convaincu.
Le combo "*accès aux donnés intimes des femmes*" et "*recul du droit à l'avortement*" ne fait de toute façon pas bon ménage. 

## IA
### [Les médecins deviennent moins compétents avec l'IA ?](https://www.theverge.com/ai-artificial-intelligence/758672/some-doctors-got-worse-at-detecting-cancer-after-relying-on-ai)
D'après une étude, les médecins qui utilisent l'IA deviennent moins bon·nes quand l'IA n'est pas disponible.

C'est un résultat intéressant, mais incomplet.
Et j'ai trouvé l'article un peu alarmiste, d'autant plus que l'étude référencée porte sur un contexte médical très restreint.

À mon précédent emploi, je testais des outils d'aide au diagnostic médical basés sur le machine learning (ML).
Sans me prétendre expert du sujet, j'ai développé un avis sur la question. 

Dans le mode médical, "IA" signifie souvent "ML" plutôt que "LLM".
Je pense qu'un bon algo de ML utilisé à bon escient peut littéralement sauver des vies, et que dans la plupart des cas les médecins qui les utilisent sont plus performant·es que les médecins qui ne l'utilisent pas.

Devenir moins bon·ne sans l'outil parce qu'on est devenu habitué·e à l'outil, ce n'est qu'une partie de l'histoire.
Prenons la couture par exemple : les personnes qui utilisent une machine à coudre sont probablement moins douées pour coudre manuellement que celles qui n'utilisent pas de machine, pourtant le gain apporté par la machine est indéniable.

Notons que cette analogie est limitée puisque les enjeux ne sont pas les mêmes, qu'il s'agit de mon avis, basé sur des observations personnelles et mes biais.
Autrement dit : je ne prends pas les conclusions de cet article pour argent comptant sous prétexte qu'il vient d'un journal connu, et je recommande d'appliquer cette même précaution à tout avis que je formule.

### [Le mythe de l'IA et de la productivité](https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/)
Si une personne vous annonce qu'elle est devenue 10 fois plus productive grâce à l'IA, ce n'est peut être pas 100% vrai.

Pour des tâches "one shot", telles que faire un script shell pas trop compliqué et jetable, l'IA s'en sort suffisamment bien.
Je pense même qu'elle peut vraiment faire gagner du temps.

Mais pour des tâches qui demandent une vraie compréhension du contexte, telle que coder une fonctionnalité qui répond à une spécification précise, dans une codebase structurée et régie par des règles, je reste très sceptique.

Je rappelle aussi que la question "*est-ce que c'est performant ?*" n'est pas la seule question importante sur l'IA.
Jusqu'ici, la réponse à "*est-ce que c'est éthique ?*" est plutôt "*non*".

### [La fonctionalité maudite de ChatGPT](https://arstechnica.com/tech-policy/2025/08/chatgpt-users-shocked-to-learn-their-chats-were-in-google-search-results/)
Une fonctionnalité éclatée au sol de Chat GPT : quand on partage une conversation, on peut cocher une case pour rendre le contenu indexable publiquement par les moteurs de recherche tels que Google.

Qui aurait pu prédire que des personnes allaient cliquer dessus par accident, et partager ainsi par erreur des donnés privées ?

Si le modèle de protection des donnés utilisateur·ices est "*il faut bien lire les CGU et ne jamais faire d'erreur de clic*", c'est très moyen.

Imaginez que, dans une habitation, on remplace le disjoncteur par "*on dit aux locataires de pas tirer trop de jus en même temps sur leur installation électrique*" : pas ouf.


## Un peu d'art
### [Des services de streamings originaux](https://arstechnica.com/gadgets/2025/08/these-are-the-best-streaming-services-you-arent-watching/)
Côté pile : c'est cool que Netflix ne monopolise pas tout le marché.

Côté face : côté consomateur·ice, multiplier les abonnements coûte cher. Et si on reste dans le modèle du streaming, j'ai comme un doute sur la rémunération des créateur·ices.

### [Framamèmes : vos mèmes préférés en versions libres et accessibles !](https://framablog.org/2025/04/01/framamemes-vos-memes-preferes-en-versions-libres-et-accessibles/)
Des memes faits par des vraies personnes, et qui respectent les droits d'auteur·ices, c'est cool.

## Société
### [Et si on rendait la pub illégale ?](https://simone.org/advertising/)
Un monde sans publicité, ça donnerait quoi ?
Cette réflexion met en lumière des effets néfastes de la publicité, et de notre monde où tout est un produit, et l'attention une ressource monétisable.

### [L'inévitabilisme](https://tomrenner.com/posts/llm-inevitabilism/)
L'inévitabillisme est une façon de tourner des phrases, telles que "*L'IA ne va pas nous remplacer, mais celleux qui l'utilisent vont remplacer celleux qui ne l'utilisent pas*".

Ca élimine le débat autour de "*l'IA, c'est bien ou pas ?*", en le remplaçant par "*de toute façon c'est inévitable, passons à la suite*".

A l'époque où j'étais dans le CSE d'une entreprise, je me suis fait totalement avoir par un nouvel accord de télétravail.
C'était une régression sur trop de points à mon goût (on passait de "*faites ce que vous voulez du moment que vous faites  le taff et mettez de la bonne volonté pour qu'on se voie de temps en temps*", à un cadre très rigide qui relevait à mon avis de la culture du contrôle), mais on avait réussi à me le faire percevoir comme inévitable et à en négocier les termes.
Alors qu'à l'origine je voulais juste voter contre.
Quand je me suis rendu compte que j'en m'étais fait berner, c'était trop tard.

Suite à cet accord, ma situation ne s'était pas personnellement dégradée : mes n+1 et n+2 étaient pragmatiques, le boulot était fait, le suivi aussi, donc on me laissait la paix.
Mais ma paix dépendait de l'acception de 2 individus de contourner le système : clairement pas le meilleur plan. 

### [Crise des opioïdes : Purdue Pharma et la famille Sackler vont payer 7,4 milliards de dollars](https://www.lemonde.fr/economie/article/2025/01/23/crise-des-opioides-purdue-pharma-et-la-famille-sackler-vont-payer-7-4-milliards-de-dollars_6512731_3234.html)
Dans cette crise, la famille Sackler a une part de responsabilité importante.

Iels ont caché le côté ultra addictif d'un opioïde et l'ont très agressivement poussé sur le marché, résultat : 700 000 mort·es.

Pas de prison à la clé pour les coupables, mais une amende sévère : 6,5 milliards de dollars a payer sur 15 ans.

C'est beaucoup, et pas grand chose à la fois.
Leur fortune était estimée à [10,8 milliards en 2024](https://www.yahoo.com/entertainment/sackler-family-net-worth-2024-005044669.html).


En admettant que les 6,5Md disparaissent de suite et qu'iels ne collectent plus aucun revenus (ce qui est faux), il ne leur resterait "que" 4,3Md

Mais 4,3Md, ça représente quoi ?

Faisons un calcul simple : on vous donne 100 000 €, et vous dépensez 1000€ par jour
Vous tenez à peine plus de 3 mois avant d'être à sec.

Avec 1 million, vous tenez 2 ans et 8 mois

Avec 1 milliard, vous tenez plus de 2700 ans.
Imaginez : vous donnez ce milliard à Cléopatre (et l'immortalité) : elle maintient ce niveau de dépense depuis plus de 2000 ans et peut encore continuer quelques siècles.

Un tel niveau de richesse est absurde pour des individus.

## Insolite
### [Boum boum](https://www.techradar.com/televisions/home-theater/you-think-your-home-theaters-powerful-seeing-this-100-inch-subwoofer-will-correct-you-of-that-foolish-notion)
Comme caisson de basse, on a trouvé plus discret que celui-ci.
Pensez bien à le placer au bon endroit dès le départ, il est pas simple à bouger !

### [Un PC qui fait le café](https://www.dougmacdowell.com/coffeematic-pc.html)
Est-ce le futur des machines à café ?

Non.

Celui des ordinateurs alors ?

Non plus.


C'est inutile, probablement pas super fiable, mais fun. 