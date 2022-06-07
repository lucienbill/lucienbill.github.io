---
layout: post
title: Bases de données - le théorème CAP
excerpt_separator: <!--more-->
---

Vous vous faites des nœuds au cerveau en essayant de distinguer les différences entre les cas d'usages des bases de données (BDD) relationnelles et NoSQL ? Le théorème CAP peut certainement vous aider ! 
<!--more-->

## CAP ? D'où sors-tu donc ce truc ?
Quand j'ai commencé mon premier emploi dans l'informatique, j'ai eu de la chance : on m'a donné de solides bases théoriques.
Dans le lot, on m'a présenté le théorème CAP, qui permet de mieux comprendre comment fonctionnent les bases de données.

## OK cool, mais "CAP" c'est quoi ?
Le [théorème CAP](https://en.wikipedia.org/wiki/CAP_theorem) énonce qu'une BDD ne peut offrir que 2 des garanties suivantes :
- **C**onsistency (Cohérence)
  - Chaque lecture reçoit l'écriture la plus récente ou une erreur.
- **A**vailability (Disponibilité)
  - Chaque demande reçoit une réponse (qui n'est pas une erreur), sans la garantie qu'elle contienne l'écriture la plus récente.
- **P**artition tolerance (Tolérance au partitionnement)
  - Le système continue de fonctionner malgré un nombre arbitraire de messages abandonnés (ou retardés) par le réseau entre les nœuds.

## Et si on reformulait ?
Ce théorème n'est pas simple à comprendre, voici donc une version différente.

Une BDD ne peut offrir que 2 des garanties suivantes :
- **C**onsistency (Cohérence) : Tous les clients de la BDD voient les mêmes données, même avec des mises à jour simultanées.
  - Un "client" d'une BDD est toute entité qui s'y connecte. Imaginez la BDD de votre banque : vous pouvez consulter le solde de votre compte depuis une appli, depuis le site web, et votre conseiller·e bancaire peut également accéder à cette donnée. Chacun·e voit le même solde. Il est important que tout le monde voie la même donnée. Si un client tente de consulter une donnée en cours de mise à jour, soit le système attend que la mise à jour soit terminée pour lui envoyer une donnée, soit le système lui envoie une erreur.
- **A**vailability (Disponibilité) : Tous les clients de la BDD peuvent accéder à une version des données.
  - Pensez aux résultats d'un moteur de recherches (Google, Bing, DuckDuckGo, ...), qui sont très souvent mis à jour par divers moyens. Quand vous cherchez "42", vous recevez une liste de résultats. Il se peut que ce ne soit pas la toute dernière version. Imaginez qu'une mise à jour soit en cours : le moteur de recherches va vous envoyer de-suite la version d'avant, plutôt que d'attendre la fin de la mise à jour. Ici, l'important est d'envoyer rapidement la donnée.
- **P**artition tolerance (Tolérance au partitionnement) : La BDD peut être divisée sur plusieurs serveurs
  - Imaginez la quantité de données que doivent héberger Netflix ou YouTube : tout ne tient pas dans une seule base de données sur un seul serveur.

## Tout est une question de compromis
Dans un monde parfait, on veut tout : le **CAP** complet.
Dans le monde réel, on ne peut choisir que 2 garanties.

Quand votre projet est super simple, vous avez juste une base de données sur un seul serveur : vous partez du principe que la machine sur laquelle se trouve les données ne va jamais planter.
Autrement dit : toutes les données sont au même endroit.
Ca simplifie tout : vous renoncez au **P** (Tolérance au partitionnement), donc vous pouvez avoir **C + A** (Cohérence + Disponibilité)

Quand votre projet devient plus sérieux, certaines questions se posent : 
- Tout ou partie de mon/mes serveur(s) de données finira fatalement par tomber en panne : comment doit réagir mon système ? Quelle partie des données mon système peut-il tolérer de perdre ?
- Face à un gros volume de demandes en lecture, quelle est la priorité de mon système : répondre vite, ou répondre avec la dernière version des données ?
- Comment doit réagir le système face à plusieurs écritures concurrentes sur la même donnée ?

La clé est de déterminer les réponses qui correspondent le mieux au besoin auquel s'adresse votre système. Chaque type de base de données y répond de manière différente.

Je pose ici un bout de [Wikipedia](https://en.wikipedia.org/wiki/CAP_theorem) : 

> Lorsqu'une partition réseau tombe en panne, il faut décider de
> 
> - soit annuler l'opération, et ainsi diminuer la disponibilité mais assurer la cohérence
> - soit procéder à l'opération, et ainsi fournir une disponibilité mais risquer l'incohérence.
> 
> Ainsi, s'il y a une partition réseau, il faut choisir entre la cohérence et la disponibilité

Le simple fait d'avoir une routine qui sauvegarde votre BDD chaque jour à minuit est une partition réseau : que doit-il se passer lorsqu'une requête d'écriture est reçue pendant la sauvegarde ?
Doit-on accepter l'écriture, qui ne sera pas sauvegardée aujourd'hui, ou doit-on la refuser parce qu'on est en train de sauvegarder ?

## Je veux plus d'exemples !
Ca tombe bien, j'en ai :

- Quand on fait un transfert de 100€ entre 2 comptes bancaires, il ne faut pas qu'il existe d'état intermédiaire du type "l'application de gestion des fonds voit les 100€ sur les 2 comptes". Il faut aussi garantir qu'on ne perde pas l'opération si un serveur tombe (imaginez un virement entre 2 banques différentes : on préfère éviter qu'une des banques perde trace du virement !). On veut ici du **C + P** (Cohérence + Tolérance au partitionnement)
- Dans certains cas, on a besoin d'excellentes performances en lecture, et on accepte de ne pas forcément avoir la toute dernière version des données. Pour reprendre l'exemple du moteur de recherches :  quand vous recherchez quelque chose, la réponse doit arriver très vite, mais ce n'est pas grave si les résultats que vous recevez datent d'hier -> on est sur du **A + P** (Disponibilité + Tolérance au partitionnement)

## Super, mais je ne sais toujours pas quelle BDD choisir !
Déjà, quoi qu'il arrive : lisez la doc, et apprenez à configurer la BDD avant de finaliser votre choix !
Typiquement, avant de foncer sur MongoDB, étudiez MongoDB, et pensez au contexte de votre système. L'idée est d'éviter les situations suivantes : 

> Je choisis la BDD Trucmuche NoSQL pour gérer les données de mon projet parce que je sais qu'elle existe.
> Je code mon appli.
> Quelques mois passent, et je me rend compte que je galère à gérer l'évolution de mes données, parce que je veux mettre plein de relations de partout mais que Trucmuche n'a vraiment pas l'air d'aimer ça.

> Je mets en place un moteur de recherches sur mon site : je fais ça avec Elasticsearch.
> Les mois passent, et je finis par comprendre que mes performances sont nazes parce que j'ai laissé les paramètres par défaut : je me suis fait avoir par le sharding et les replicas, et j'essaie de régler dans l'urgence.


Partons du principe qu'on veut **P** (Tolérance au partitionnement), parce que si on perd nos données, on est mal.

Pour le choix entre **A** (Disponibilité) et **C** (Cohérence) : 
- Généralement, les BDD SQL (ou "RDMBS", pour "Relational Database Management System") privilégient le **C**
- Quand on privilégie **A**, on a des options intéressantes en NoSQL
- Cela ne signifie pas qu'on ne peut pas privilégier **C** avec du NoSQL, ni **A** avec du SQL : je ne sais pas tout !

## SQL ? NoSQL ?
En bref : 
  - Si la structure de vos données est prévisible et qu'elles sont fortement liées entre elles, optez pour du SQL (je recommande PostgreSQL : c'est open source, c'est puissant, c'est une bonne référence).
  - Si, à l'inverse, vous avez besoin d'une grande souplesse dans la structure de vos données et qu'elles sont peu liées entre-elles : pensez au NoSQL: MongoDB, CouchDB, Redis, ...
  - les BDD SQL sont généralistes, les BDD NoSQL abandonnent l'aspect "relations" afin de se focaliser sur d'autres aspects.

### SQL : un exemple

Imaginez la gestion des ventes pour un site d'e-commerce : une commande est liée à un client et à une adresse ; une commande n'est possible que si le stock des articles achetés est suffisant.
Ces données sont liées par des relations.

### NoSQL : un exemple

Imaginez un site internet d'e-commerce : on veut généralement que les descriptions des articles et les images se chargent très vite.
Plutôt que de charger systématiquement ces données depuis une BDD SQL, on peut mettre en place un cache avec Redis : il est en effet rarement critique d'afficher la dernière version de ces données, mais il est important qu'elles s'affichent vite.

## J'ai besoin d'une histoire pour mieux comprendre
Le choix entre **A** et **C** se pose surtout lorsque le trafic et/ou le volume de données sont importants.

Imaginez : vous faites une appli de liste de courses juste pour votre famille : vous n'aurez probablement pas de problème de performance, même si vous partez sur un modèle **C + P**.
Vous pouvez sans trop vous inquiéter héberger vos données dans un PostgreSQL managé par [Supabase](https://supabase.com/) ou [OVH](https://www.ovhcloud.com/fr/public-cloud/postgresql/).

Votre famille est très contente, et veut ajouter des utilisateur·rice·s : les voisin·e·s, les collègues, etc. 
Vous cogitez sur le cloisonnement et la sécurisation des données, mais c'est tout : votre modèle **C + P** permet encore des performances adéquates.

Votre appli fonctionne bien : vous voulez la publier sur l'Apple Store et le Play Store.
C'est à ce moment que se pose la question du partitionnement des données, car le modèle "toutes mes données sont sur le même serveur" va montrer ses limites.

## J'ai mal au crâne
C'est normal.
J'arrête là, mais pour aller plus loin voici un peu de lecture : 
1. Pour démystifier le partitionnement des données, lisez [#9 System Design: Sharding](https://devblossoms.hashnode.dev/9-system-design-sharding) par Aishwarya Ravichandran
2. Lisez ce comparatif SQL vs NoSQL écrit par [MongoDB](https://www.mongodb.com/compare/relational-vs-non-relational-databases)
3. Lisez théorème CAP d'après [CouchDB](https://docs.couchdb.org/en/3.2.2/intro/consistency.html)
4. Lisez théorème CAP d'après [IBM](https://www.ibm.com/fr-fr/cloud/learn/cap-theorem)
5. Lisez le bonnes pratiques selon [Redis](https://redis.com/wp-content/uploads/2021/10/tdwi-10m-q2-2021-redis-web.pdf) (origine : [cette page](https://redis.com/docs/avoid-these-10-nosql-deployment-mistakes/))

Plus vous vous renseignez, et plus vous augmentez les chances d'utiliser le bon outil pour votre besoin !