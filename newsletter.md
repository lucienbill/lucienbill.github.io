---
layout: page
title: Les archives de ma newsletter
permalink: /newsletter/
---
<article class="page">
<div>
<p>
Cette page permet d'accéder aux issues publiées de ma newsletter.
Je n'ai pas toutes les archives : j'ai migré plusieurs fois de système, et j'ai a chaque fois un peu eu la flemme de tout migrer.

Je tente un nouveau système : publier à la fois sur mon site perso, et envoyer par e-mail.
Pour vous abonner, vous pouvez donc <a href="{{ site.projects-links.newsletter }}">cliquer ici</a> ou vous servir du <a href="{{ site.baseurl }}/feed.xml">flux RSS</a>.
</p>
</div>
  <div class="posts">
  {% assign prev_year = 0 %}
  {% for post in site.posts %}
    {% if post.category == "newsletter" %}
      {% assign open_ul = false %}
      {% assign close_ul = false %}
      {% assign current_year = post.date | date: "%Y"  %}
      {% if current_year != prev_year %}
        {% assign open_ul = true %}
        {% if prev_year != 0 %}
          {% assign close_ul = true %}
        {% endif %}
        {% assign prev_year = post.date | date: "%Y"  %}
      {% endif %}
      {% if close_ul %}
        </ul>
      {% endif %}
      {% if open_ul %}
        <h3>{{ current_year }}</h3>
        <ul class="post">
      {% endif %}
        <li>
          <a href="{{ site.baseurl }}{{ post.url }}">#{{ post.title }}</a>
        </li>
    {% endif %}
  {% endfor %}
  </ul>
  </div>
</article>