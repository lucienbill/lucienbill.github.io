---
layout: page
title: Tous les articles du site
permalink: /newsletter/
---

<article class="page">
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
          <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endif %}
  {% endfor %}
  </ul>
  </div>
</article>