---
layout: newsletter
title: 79 - Todo
category: newsletter
subtitle: Todo
---
*{{ page.subtitle }}*
<div class="date">
Publiée le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
</div>

Coucou !

cette semaine je vous propose des news pas si fraiches, puisque j'ai encore pris une petite pause.

J'ai vu des canards, je me suis déguisé en père Noël pour Halloween, et j'ai fait des essais de nerd sur des techniques de production audiovisuelle (timecode, et vidéos 10 bits log). 

Bref, je ne garantis vraiment pas de tenir le rythme d'une publication toutes les 2 semaines, ce qui me conforte dans l'idée de continuer de faire ça gratuitement. Pour l'instant j'ai le privilège de pouvoir le faire sur mon temps libre sans que ça me coûte grand chose, je trouve ça très cool de ne pas avoir besoin de monétiser.

Bonne lecture !


## Trucs techniques

### [Comment foirer sa coloration syntaxique](https://tonsky.me/blog/syntax-highlighting/)
Avec un IDE moderne, on peut mettre des couleurs dans tous les sens pour tenter d'y voir plus clair dans le code. Pour éviter de s'emmêler les pinceaux (ouais, je pioche dans le champ lexical de la couleur, achetez [ma formation](https://youtu.be/dQw4w9WgXcQ?si=IrclenulCFOYZrxk) pour apprendre toutes mes astuces de power writing), mieux vaut de pencher sur l'UX avant de tout personnaliser 

### [Les commits conventionnels](https://larr.net/p/cc.html)
Le concept de normer très précisément les commits est intéressant, mais ce n'est peut être pas le bon outil pour vous.

### [Le hack de Redhat](https://www.bleepingcomputer.com/news/security/red-hat-confirms-security-incident-after-hackers-breach-gitlab-instance/)
Une partie des données de Redhat a fuité suite à un hack : c'est relou, mais pas expectionnel en soi.

La partie que je trouve drôle : les pirates ont contacté Redhat pour tenter de l'extorsion, et sont tombés dans l'enfer du ticket de support qui se fait réassigner à plein d'interlocuteurices successives sans jamais vraiment avancer.

### [Prévoir comment va se comporter une IA en prod](https://arxiv.org/html/2403.16795v1)
Version courte : c'est galère pour tout un tas de raisons.


## Les clowneries de la tech 🤡

### [Pas d'IA dans la pub d'Open AI](https://www.forbes.com/sites/dimitarmixmihov/2025/02/10/why-ai-maker-openai-didnt-use-ai-to-make-its-super-bowl-ad-about-ai/)

J'ai découvert qu'OpenAi avait lâché un gros paquet de pognon pour faire de la pub pendant le super bowl.

Jusqu'ici, classique.

Pour écrire le scénario et faire les images du spot qui nous vend que l'IA va remplacer les humain·es - dans la création de vidéo notamment - la boîte à fait appel... A des vraies personnes, pas à des IA !

C'est bizarre, un peu comme si, je sais pas, l'IA donnait des résultats pas terribles dis donc !

Je ne suis pas spécialement surpris, je rappelle que je n'ai aucun respect pour ce pignouf de Sam Altman. J'ai hâte que sa boîte coule, et que la mode des LLM à toutes les sauces cesse. Ce n'est pas personnel, c'est juste qu'il participe sciemment à rendre le monde pire.

### [Oracle = Big Brother](https://www.linkedin.com/posts/jatinmodi_a-400b-tech-titan-just-exposed-silicon-valleys-activity-7380595187267362816-HyTu)
Oracle, ce n'est pas juste une technologie de base de données très bien ancrée chez beaucoup entreprises.
C'est aussi un appareil de surveillance qui ne nous veut pas du bien.

Oracle a construit le système du vidéo surveillance a Beijing. Le boss Larry Ellison dit oklm :

> Citizens will be on their best behavior, because we’re constantly recording and reporting everything that is going on


## Para technique

### [Gérer les pirates](https://herman.bearblog.dev/piracy-kills/)
Dans la newsletter de [Cassidy Williams](https://cassidoo.co/newsletter/) j'ai découvert une façon créative de lutter contre le piratage de vos projets.
Je ne spoil pas, l'article est court et se lit vraiment bien

### [64 bits](https://dfarq.homeip.net/athlon-64-how-amd-turned-the-tables-on-intel/)
L'histoire de la transition des OS 32 bits vers 64 bits pour les PC est très liée à la concurrence entre Intel et AMD.

### [On a réussi a faire pire que les mots de passe](https://blog.danielh.cc/blog/passwords)
Sur certains services, quand vous tentez de vois connecter, vois recevez un mot de passe temporaire à 6 chiffres : en termes de sécurité, c'est pas fou.
L'auteur écrit que c'est parce que ça protège vraiment pas du phising : un site malicieux peut vois piéger, et vous demander un code... qui proviendra du vrai site !

[Ce commentaire](https://news.ycombinator.com/item?id=44821568) présente un autre vecteur d'attaque : 6 chiffres, c'est peu. Même quand le service est protégé contre le brute-force, si on tente de se connecter à énormément de comptes juste 4 fois pas jour, on a une chance trop élevée de deviner juste par hasard tôt ou tard. 

## Vidéos
### [Le brutalisme constitutionnel de la macronie](https://www.youtube.com/watch?v=W5X4aDYJiEs)
La macronie exploite toutes les règles de la loi et de la constitution de la Vième république pour faire nous oppresser en toute légalité. C'est le brutalisme constitutionnel.

### [Les tatouages de Louis Sarkozy](https://www.instagram.com/reel/DPWCfUGDB1g/?igsh=ZmluYjZtYjFhM3Nh)
Saviez vous que le mot "fascisme" venait de "faisceau" ?
Je vous laisse deviner qui s'est fait tatouer un faisceau.

### [Le plan sociale c'est trop lolilol](https://www.linkedin.com/posts/loubnat_nouvelle-tendance-annoncer-un-plan-social-activity-7378020212887150592-Xy3t)
Pour annoncer un plan social, pourquoi on ne ferait pas appel à un·e humoriste, hein ?

Bonne idée pour un film dystopique. Dans la réalité, je recommande plutôt aux  personnes qui sont tentées par ça d'enlever leurs vêtements et d'aller faire des câlins à des cactus.


### [Transformer Portal 2 en serveur web](https://youtu.be/-v5vCLLsqbA?si=5dnBzPv81GoNpICr)
c'est faisable, c'est fun, et curieusement utile pour mieux comprendre comment fonctionne un serveur web. 

## Insolite
### [On peut recharger des piles non-rechargeable](https://www.linkedin.com/posts/lucile-vannier-%F0%9F%8C%BF%F0%9F%90%8C-she-her-104b191_greenit-numaezriqueresponsable-rse-activity-7379629861419622400-I74K)
Je n'ai pas vérifié par moi même, mais le concept est pas idiot !
