---
layout: post
title: J'ai encore bidouillé mon site
excerpt_separator: <!--more-->
---

J'ai récemment apporté quelques modifications à mon site : 
- Je n'ai plus qu'une seule balise `<h1>` par page (j'obtiens donc enfin un rapport sans aucune erreur ni avertissement sur [validator.w3.org](https://validator.w3.org))
- J'ai ajouté petit encart qui annonce que certains de mes articles sont obsolètes

Je propose aujourd'hui d'expliquer pourquoi et comment.
<!--more-->

## Mon site et ses imperfections
Avoir un site perso, c'est cool.
C'est cool, parce que ça me permet de me prendre la tête sur des petits trucs techniques qui m'amusent beaucoup.
J'ai ainsi repéré 2 choses à bidouiller : 
- Mon site avait plusieurs balises `<h1>` par page. C'était dommage
- J'avais quelques articles dont je n'étais plus satisfait : je voulais un moyen simple et efficace de les afficher comme "obsolète"

## Défi : sans script, sans répétition
Une solution simple pour mes bidouilles aurait été de : 
- Pondre un bout de javascript pour ne laisser qu'un `<h1>` par page
- Modifier mes articles obsolètes pour ajouter une phrase du type *"ceci est un vieux machin"*

Mais ça me gênait pour plusieurs raisons :
- J'utilise un générateur de site statique. Corriger les occurrences multiples de h1 au niveau du générateur me semblait plus propre. J'aime le côté dynamique de javascript, mais j'aime aussi m'en passer quand je le peux
- Modifier chaque article obsolète pour ajouter une information aurait été suffisant. Mais je voulais essayer de jouer avec le générateur de site statique Jekyll pour implémenter un traitement du type : *"Si l'article est marqué comme obsolète, alors j'ajoute un préambule qui précise qu'il est obsolète"*. L'intérêt est de n'écrire qu'une fois le préambule

## Jekyll et Liquid
Quand vous visitez une page de mon site, le serveur vous l'envoie directement.
Pas besoin d'aller chercher du contenu dans une base de données et d'en faire un rendu sous forme de page HTML : les pages HTML sont déjà sur le serveur.

C'est grâce à Jekyll et Liquid : j'écris mes articles en markdown, et Jekyll + Liquid les compilent en HTML.
Liquid est un moteur de templating : lors de l'étape de compilation, il utilise des "templates" (ou "modèles") pour savoir comment traiter les contenus, et je peux les modifier à peu près comme je veux.

Pour mes 2 problèmes, la solution était donc de modifier certains templates afin de donner les bonnes instructions à Liquid.
Autrement dit : j'ai codé.
Ou plutôt : j'ai méta-codé ! 
Je n'ai pas eu besoin de me plonger dans le code Ruby du moteur de rendu, les fonctions exposées par Liquid ont suffit à obtenir le résultat désiré.


## Mes modifications
### h1
Ma situation de départ était : 
- Sur toutes les pages de mon site, le nom du site est un h1
- Sur la page d'accueil, chaque titre d'article de blog est un h1
- Chaque page a un titre (autre que le nom du site), qui est un h1

Ca faisait beaucoup de h1.

#### default.html
Au niveau du template "default" (qui s'applique à toutes les pages), j'ai écrit ceci : 

{% raw %}
```html
{% if page.title %}
<div class="site-name"><a href="{{ site.baseurl }}/">{{ site.name }}</a></div>
{% else %}
<h1 class="site-name"><a href="{{ site.baseurl }}/">{{ site.name }}</a></h1>
{% endif %}
```
{% endraw %}

Traduction : *si la page a un titre, alors le nom du site est une div. Sinon, le nom du site est un h1.*
J'ai également modifié le CSS pour que le titre du site garde la même apparence, qu'il soit h1 ou div.

La syntaxe Liquid se repère avec les "`{`" et "`%`".

#### index.html
Pour la page d'accueil, c'était plus simple. 
Par défaut, elle contient le code suivant : *pour chaque article, afficher le titre (h1), l'extrait, et un lien "Read-More".*

Je l'ai transformé en : *pour chaque article, afficher le titre (h2), l'extrait, et un lien "Lire l'article"*

{% raw %}
```html
<div class="posts">
  {% for post in site.posts %}
    <article class="post">
      <!-- Titre de l'article -->
      <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>

      <!-- Extrait -->
      <div class="entry">
        {{ post.excerpt }}
      </div>

      <!-- Lien vers l'article -->
      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Lire l'article</a>
    </article>
  {% endfor %}
</div>
```
{% endraw %}

### Obsolescence
J'ai d'abord ajouté dans mes articles obsolètes une donnée qui peut être lue par Liquid : "category". 

{% raw %}
``` liquid
---
layout: post
title: Traiter le son en live
category: obsolete
---
```
{% endraw %}

Dans le template de rendu d'articles, j'ai ensuite ajouté le code *"si l'article est obsolète, afficher un avertissement"* :

{% raw %}
``` liquid
  {% if page.categories contains "obsolete" %}
  <details>
    <summary><strong>Attention : article obsolète 📜</strong></summary>
    <p>
      Vous lisez un vieux machin qui est au moins partiellement obsolète.
      Je le laisse en ligne pour conserver un historique, mais les infos qui y figurent ne sont vraiment pas à jour.
    </p>
  </details>
  {% endif %}
```
{% endraw %}

J'en ai profité pour mettre à jour l'affichage de la date, qui était par défaut en anglais : 

{% raw %}
``` liquid
  <div class="date">
    Publié le {{ page.date | date: "%d" }}/{{ page.date | date: "%m" }}/{{ page.date | date: "%Y" }}
  </div>
```
{% endraw %}