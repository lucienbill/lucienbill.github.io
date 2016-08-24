---
layout: post
title: Automatiser les tests de webservices avec SoapUI
---

# Introduction
 
Cet article présente les travaux que j'ai réalisés pour automatiser des tests de webservices avec SoapUI 5.2.1 durant l'été 2016. Voici un résumé :

1. SoapUI est une application avec une interface graphique et permet d'appeler des webservices (SOAP et REST) 
  * Il est possible de mettre en place des vérifications automatiques
  * SoapUI supporte le langage de scripting "Groovy" (qui permet de faire presque tout et n'importe quoi, du moment qu'on le code)

2. J'ai créé un projet SoapUI qui utilise les vérifications automatiques et les Groovy Scripts 

  * Ce projet lit un fichier CSV qui contient les données à envoyer au service et les éléments à vérifier dans la réponse du webservice. Pour l'utiliser il faut créer les cas de tests (dans le fichier CSV), paramétrer le projet SoapUI puis cliquer sur le bouton d'exécution -> un rapport d'exécution indiquera le résultat des tests

3. On peut piloter l'exécution de ce projet SoapUI avec Maven 

  * C'est ici que l'automatisation commence vraiment
  * C'est également ici que ça se complique (le plugin maven de SoapUI n'est pas "plug and play")

4. L'outil est pilotable depuis Jenkins
5. L'outil est pilotable depuis Squash TA, mais présente quelques défauts (mineurs)
6. Squash VS Jenkins : que choisir ?
7. Aller plus loin : sujets annexes pouvant être intéressants pour plus tard
8. FAQ + résolution de problèmes
 
# SoapUI : tester des webservices

## Le commencement

Nous allons supposer que vous devez tester un webservice, que votre scénario de tests est prêt est que vous savez comment accéder au webservice. Nous supposerons également que vous avez installé **SoapUI 5.2.1** (ou une version ultérieure) sur votre poste.

### Créer un nouveau projet

Cliquez sur **File > New SOAP/REST Project**, puis renseignez l'adresse du service à tester

![New project]({{ site.baseurl }}/images/SUI/SUI_new.png)
 
### Ouvrir un projet existant

Cliquez sur **File > Import Projet**.

![Import project]({{ site.baseurl }}/images/SUI/SUI_import.png)
 
### Les premières requêtes

Lorsqu'on a peu de requêtes à passer au webservice, on peut se contenter de lier les requêtes directement à la déclaration du service.

![First requests]({{ site.baseurl }}/images/SUI/SUI_firstRequest.png)

Tester un webservice de cette façon fonctionne, cependant lorsqu'il y a beaucoup de cas à tester cela devient lassant : il faut lancer chaque requête une à une et il n'y a aucune possibilité d'automatisation. L'être humain lambda sait lire, mais il est rarement passionné à l'idée de parser un flux XML avec les yeux. Heureusement, on peut faire autrement.

### Tests Suites et Test cases

Dans SoapUI, il est possible de grouper les cas de test, et de les exécuter les uns à la suite des autres **en cliquant sur un seul bouton** grâce aux Test Suites et aux Test Cases.

![Test Suite]({{ site.baseurl }}/images/SUI/SUI_TestSuites.png)
 
**_Imbrication des Test Suites / Cases / Steps_**

> * Un **projet** peut contenir plusieurs **Test Suites** 
>   * Une Test Suite peut contenir plusieurs **Test Cases** 
>     * Un Test Case peut contenir plusieurs **Test Steps**
>       * Un Test Step est une action unique, indivisible (exemple : appel d'un webservice, exécution d'une requête SQL)
 
#### Créer une Test Suite

Effectuez un clic droit sur le projet auquel vous voulez ajouter une Test Suite, et sélectionnez "New TestSuite".

![New Test Suite]({{ site.baseurl }}/images/SUI/SUI_newTestSuite.png)
 
#### Créer un Test Case

Effectuez un clic droit sur une Test Suite, puis cliquez sur "New TestCase"

![New Test Case]({{ site.baseurl }}/images/SUI/SUI_newTestCase.png)
 
#### Ajouter des étapes à un Test Case

##### Nouvelle étape

Effectuez un clic droit sur le Test Case ou sur l'élément "Test Steps", et choisissez le type d'étape à ajouter

![Add Step]({{ site.baseurl }}/images/SUI/SUI_addStep.png)
 
##### Etape existante

On peut vouloir copier une étape vers un Test Case précis. On peut :

* effectuer un clic droit sur la requête à copier, et sélectionner "Add to TestCase",
* effectuer un glisser-déposer.

![Drag And Drop]({{ site.baseurl }}/images/SUI/SUI_dragAndDrop.png)
![Add to Test Case]({{ site.baseurl }}/images/SUI/SUI_addToTestCase.png)
 
**_Astuce_**

> On peut copier une requête d'un projet à un autre : SoapUI ouvrira alors une fenêtre de dialogue pour importer si nécessaire la déclaration du service associé à la requête.

#### Exemple

La capture d'écran suivante représente un TestCase composé des étapes suivantes : 

1.	Une étape manuelle 
  * Lors de l'exécution du TestCase, une fenêtre s'affichera, et l'utilisateur devra interragir avec cette fenêtre afin que SoapUI passe à l'étape suivante. 
  * Note : je recommande de ne pas utiliser ce type d'étapes, c'est incompatible avec l'automatisation (en effet, Jenkins et Squash TA ne vont pas savoir comment les traiter)
2. Un appel à un webservice A
3. Une requête SQL 
  * On peut exécuter des requêtes SQL directement dans SoapUI. Cela peut être utile pour créer un jeu de données, vérifier l'effet d'un service sur la BDD, ou s'assurer qu'une liste de données retournée par un webservice est correcte. Cependant cela demande un peu de configuration : je recommande de ne pas utiliser de requête SQL dans SoapUI. J’écrirai peut-être quelque chose à ce sujet plus tard.
4.	Un appel à un webservice B

![Sample Test Suite]({{ site.baseurl }}/images/SUI/SUI_testCase.png)
 
### Variabiliser les scénarios de tests

Variabiliser les scénarios de tests permet de faciliter leur maintenance. Exemple : on a un scénario qui contient 10 requêtes SOAP vers un webservice, et pour chaque requête on envoie un token d'identification. L'environnement de test change, l'ancien token n'est plus valide et a besoin d'être changé : le modifier à la main dans les 10 requêtes prend du temps. Si on utilise des variables, il n'y a besoin de changer le token qu'à un seul endroit.

Avec SoapUI, on stocke les variables dans des Test Step de type **Properties**. Une étape de ce type est un tableau de données stockées au format "clé ; valeur". L'ordre d'un step de type "Properties" dans un Test Case n'a aucune importance : le comportement de SoapUI sera le même, que le step "properties" soit au début, au milieu ou à la fin de la liste.

![Properties]({{ site.baseurl }}/images/SUI/SUI_addProperties.png)
![Property]({{ site.baseurl }}/images/SUI/SUI_addProperty.png)

On peut ensuite utiliser les variables dans les requêtes. Dans la capture d'écran suivante, on écrit dans la requête SOAP :

```
${Properties_foobar#nom}
```

Lorsque l'étape SOAP sera exécutée, SoapUI remplacera cette chaîne de caractères par la valeur de la propriété "nom" de l'étape "Properties_foobar" (dans l'exemple, ce sera "valeur").

![Property use case]({{ site.baseurl }}/images/SUI/SUIi_propertiyUsage.png)
 
**_Plus d'infos sur les propriétés_**

> Il existe d'autres éléments qui peuvent stocker des propriétés. C'est le cas des Test Suites et des Test Case par exemple. Le [site officiel](https://www.soapui.org/functional-testing/properties/working-with-properties.html) les décrit plus en détail. Je me contente généralement d'utiliser des Test Steps de type "Properties".
 
### Vérifications automatiques

Variabiliser les tests pour pouvoir les réutiliser est un bon départ. Implémenter des vérifications automatiques pour ne plus avoir à vérifier soi-même le comportement des webservices, c'est encore mieux !
Pour automatiser les vérifications, SoapUI utilise les **assertions**.

#### Les différents types de vérifications automatiques

![Assert contains]({{ site.baseurl }}/images/SUI/SUI_assertC.png)

A une requête SOAP, REST ou JDBC (i.e. "requête SQL"), on peut attacher autant d'assertions que l'ont veut. Elles peuvent être du type :

* "**Contains**" : le flux retourné par le service doit contenir une chaîne de caractères spécifique
* "**Not Contains**" : le flux retourné par le service ne doit pas contenir une chaîne de caractères spécifique
* Vérification du header HTML
* Vérifier que la réponse est bien au format SOAP
* Vérifier le résultat d'une requête XPath ou XQuery
* Exécuter un script personnalisé
* Vérifier que le temps de réponse est inférieur à une valeur donnée
* etc  .

Voici à quoi ressemblent les résultats d'une requête dont toutes les assertions sont vérifiées, et d'une requête dont au moins une assertion n'est pas vérifiée :

![Assertions: OK]({{ site.baseurl }}/images/SUI/SUI_assertOK.png)
![Assertions: KO]({{ site.baseurl }}/images/SUI/SUI_assertKO.png)

#### Variabiliser les vérifications

Il est possible d'utiliser les propriétés (i.e. les variables) dans les vérifications automatiques

![Variables]({{ site.baseurl }}/images/SUI/SUI_propertyFail.png)
 
#### Exécution d'un Test Case contenant des étapes avec des vérifications automatiques

Il est possible de paramétrer un Test Case :

* l'exécution doit-elle s'arrêter lorsqu'un Test Step rencontre une erreur ?
* le Test Case doit-il être en statut "erreur" dès qu'un Test Step est en erreur ?
* doit-on purger les résultats sans erreur de la mémoire ?
Faites un clic droit sur le TestCase et sélectionnez "Options", ou cliquez sur l'engrenage dans la barre d'outils du TestCase.

![Test Case options]({{ site.baseurl }}/images/SUI/SUI_TCOptions.png)

Je paramètre généralement mes Test Cases comme sur la capture d'écran ci-dessus. Lorsque la mémoire disponible sur la machine est faible, je coche la case "Discard OK Results"
Voici un exemple de Test Case qui se déroule correctement. Le détail du déroulement est affiché dans le "TestCase Log" :

![Test Case log]({{ site.baseurl }}/images/SUI/SUI_TCOK.png)
 
Voici un exemple de Test Case dans lequel au moins un Step est en erreur : 

![Test Case KO]({{ site.baseurl }}/images/SUI/SUI_TCKO.png)
 
**_Le "TestCase Log"_**

> La pop-up de la capture ci-dessus permet de personnaliser le log. Je coche souvent la case "Errors Only" afin que seuls les Test Steps en erreur soient affichés dans le log.

Voici un exemple de **Test Suite** contenant plusieurs **Test Cases**, dont un en échec :

![Test Suite fail]({{ site.baseurl }}/images/SUI/SUI_TSfail.png)

Concrètement, à ce stade on sait que l'on peut faire ceci avec SoapUI :

* Créer un scénario de tests qui s'exécute en appuyant sur un seul bouton, et qui vérifie tout automatiquement (plus besoin de lire soi-même les réponses retournées par les webservices).
 
**_Validité des vérifications automatique_**

> Il faut faire attention à la confiance qui peut être accordée aux vérifications automatiques :
> * Si elles vérifient tout ce qu'un être humain vérifierait lui-même, elles sont suffisantes et on peut s'y fier 
>   * si elles indiquent que le résultat d'un test est bon alors c'est qu'il est bon.
> * S'il est nécessaire que les vérifications automatiques soient complétées par celles effectuées par un être humain, alors les vérifications ne sont pas fiables 
>   * le résultat indiqué par de telles vérifications automatiques n'a aucune valeur, puisqu'un être humain doit les vérifier ensuite.
> Je recommande de faire en sorte que les tests automatiques couvrent le plus de cas d'utilisation possible, cela permet de limiter le nombre d'erreurs qui échapperaient aux tests.
 
### Les Groovy Scripts

SoapUI permet d'utiliser le langage de scripting "Groovy", qui permet concrètement de coder ses propres fonctionnalités et de les ajouter à SoapUI.

On peut, par exemple, implémenter le scénario de test suivant grace aux scripts Groovy :

1. Appeler un service de type "GetList" : il doit retourner une liste de résultats.
2. Pour chaque résultat de cette liste, appeler un service de type "GetDetail" pour obtenir des informations détaillées sur l'entité sélectionnée.

![Groovy get detail]({{ site.baseurl }}/images/SUI/SUI_groovyGetDetail.png)

**_Groovy_**

> Groovy est un langage de scripting intégrable à Java : il peut utiliser des librairies java, mais utilise une syntaxe moins contraignante. Il n'y a pas besoin de savoir développer en Java pour créer un script Groovy, mais je recommande tout de même de coder proprement de façon à rendre le script plus facile à maintenir.
 
# SoapUI : exécuter des cas de tests à l'aide d'un fichier CSV

**_Projet SoapUI_**

> Le projet est disponible [ici]({{ site.baseurl }}/other_resources/SoapUI_Auto_24082016.7z).
 
## Description

Ce projet fonctionne de la manière suivante :

1. Le projet ouvre un fichier CSV contenant des données de test et des vérifications à faire
2. Pour chaque ligne du fichier CSV, SoapUI envoie une requête au webservice : 
  1. le cas de test est nommé automatiquement (c'est utile pour le log)
  2. les données envoyées au webervice sont extraites depuis le CSV
  3. les vérifications automatiques à faire sur la réponse du webservice sont déterminées à partir du CSV.

## Utilité

Sans utiliser le projet ci-dessus, on peut déjà faire de l'automatisation : une fois que le scénario de test est entièrement implémenté dans SoapUI (avec les Test Suites / Cases / Steps) que que chaque Test Step contient toutes les vérifications automatiques nécessaires, les tests peuvent être lancés de manière automatique : l'ordonnanceur (par exemple Jenkins ou Squash TA) générera un rapport de tests.

Le projet SoapUI ci-joint permet de générer un tel scénario de tests à partir d'un fichier de données au format CSV : cela permet d'implémenter et faire évoluer plus facilement et plus rapidement le scénario.

Pour utiliser cet outil, il est recommandé d'étudier le fonctionnement de l'exemple (décrit ci-dessous) afin d'adapter l'outil au service que l'on souhaite tester.

## Utilisation de l'exemple

### Première utilisation

1. Dézippez les fichiers dans le répertoire de votre choix. Importez le fichier "Projet_SoapUI_exemple.xml" dans SoapUI (File > Import Project)
2. Modifiez l'élément TestSuite > Test Case > Looper_properties : 
  * chemin_CSV_absolu doit être vide
  * chemin_CSV doit être renseigné avec le chemin relatif du fichier de données par défaut

![CSV Path]({{ site.baseurl }}/images/SUI/SUI_CSVPath.png)

3. Lancez l'exécution du scénario (son statut d'exécution sera "failed" : c'est normal)

![First execution]({{ site.baseurl }}/images/SUI/SUI_sampleAuto.png)
 
Décortiquons maintenant ce qu'il s'est passé lorsqu'on a lancé le scénario :
1. l'étape "Data_injector" a lu la première ligne du fichier CSV, qui contient le nom des données, puis l'a stocké dans une variable

![Sample data]({{ site.baseurl }}/images/SUI/SUI_csv.png)

2. "Data injector" a ensuite lu la ligne 2 : 
  1. il a écrit les données de cette ligne dans l'étape "Test_properties" (les noms des propriétés sont les noms donnés dans la première ligne du csv)
  2. il a renommé le deuxième Step du Test Case ("nom du cas de test (automatique)") avec la valeur de la priopriété "Tst_name" du step "Test_properties"
3. le Test Step suivant (qui venait d'être renommé) appelle le webservice. 
  1. Les données qu'il lui envoie sont variabilisées : les valeurs proviennent du step "Test_properties". On remarquera le nom du cas de test est écrit dans un commentaire XML : si le renommage automatique du cas de test ne fonctionne pas, alors le flux envoyé au service permettra d'identifier le cas de test car le nom sera écrit dedans.

![Sample properties]({{ site.baseurl }}/images/SUI/SUI_requestAuto.png)
 
  2. Les vérifications automatiques sont également variabilisées. 
 
![Contains]({{ site.baseurl }}/images/SUI/SUI_exp1.png)

**_Nombre d'assertions_**

> L'exemple ne contient que 2 assertions variabilisées (de type "le flux contient / ne contient pas une chaîne de caractères spécifiée"). Un test réel en contiendra vraisemblablement beaucoup plus, mais j'ai préféré ne pas surcharger l'exemple.

4. SoapUI attend 300 millisecondes : cela sert à éviter un bug du [GUI](https://fr.wikipedia.org/wiki/Interface_graphique) de SoapUI
5. Les étapes de propriétés ("Test_Properties" et "Looper_properties") ne sont pas exécutées : elles servent juste à stocker des données
6. Le script Groovy "Looper" vérifie s'il reste des lignes dans le CSV, si c'est le cas on passe à la ligne suivante en revenant au step "Data_injector"
 
**_Simplification_**

> La description ci-dessus est une version simplifiée de ce qu'il se passe vraiment. Je vous invite à ouvrir les groovy scripts pour voir le code. Vous constaterez que "Looper" ne vérifie pas s'il reste des lignes au fichier CSV : il se contente de lire une propriété écrite par le Data_injector, qui écrit une valeur différente si la ligne qu'il lit contient des données ou non.
> ![data injector]({{ site.baseurl }}/images/SUI/SUI_groovyNewLine.png) 
 
### Utiliser l'outil avec un autre webservice

L'opération se déroule en 3 étapes :

1. Créer les données de test
2. Cloner les composants utiles de l'outil,
3. Paramétrer le projet SoapUI et la requête au webservice

#### Créer les données de test

Les données de tests sont celles qui seront contenues dans le fichier CSV que lira l'outil d'automatisation : elles sont créées par le testeur (un être humain) à partir du plan de test et des données de la base de test.

##### Structure des données

Pour chaque cas de test du scénario, le fichier CSV doit contenir les éléments suivants :

* la colonne "Tst_name" (en première position) : sert à nommer le cas de test
* des colonnes pour les données à envoyer au webservice (le nom des colonnes est libre)
* des colonnes qui indiquent quelles sont les données qui doivent figurer dans la réponse du webservice (le nom des colonnes est libre)
* des colonnes qui indiquent quelles sont les données qui ne doivent pas figurer dans la réponse du webservice (le nom des colonnes est libre)
* le nom de chaque colonne doit être unique.

Dans l'exemple fourni avec l'outil, les données sont : 
 
![Sample data]({{ site.baseurl }}/images/SUI/SUI_csv.png)
![Sample properties]({{ site.baseurl }}/images/SUI/SUI_requestAuto.png)
![Contains]({{ site.baseurl }}/images/SUI/SUI_exp1.png)

**_Note sur les vérifications du type "ne contient pas"_**

> Un assertion du type "not contains" vérifie qu'une chaîne de caractères n'est pas dans la réponse retournée par une requête (exemple : une requête SOAP).
> Si on ne donne pas de chaîne de caractère de référence à cette assertion (i.e. si on la laisse vide), alors elle répondra systématiquement "il y a une erreur". Concrètement, cela signifie que si on souhaite ne pas utiliser une assertion de type "not contains" pour un cas de test particulier, il ne faut pas laisser la colonne correspondante vide dans le CSV, mais y écrire quelque chose qui n'a aucune chance de figurer dans le flux. Exemple :

![foobar]({{ site.baseurl }}/images/SUI/SUI_foobar.png)

> *Dans cette exemple, SoapUI vérifiera que le flux de réponse ne contient pas "foobar" : cela n'apporte rien fonctionnellement, mais empêche SoapUI de signaler une réponse comme étant défectueuse alors qu'elle ne l'est pas.*

##### Enregistrer les données

Vous pouvez utiliser un éditeur de texte comme Notepad++ pour créer les données, cependant lorsqu'il y a beaucoup de colonnes cela peut devenir compliqué. Utilisez plutôt Excel ou LibreOffice

###### LibreOffice

Ecrivez vos données.

Lorsque vous les enregistrez, sélectionnez le format "Texte CSV", choisissez un emplacement cohérent (par exemple, dans le répertoire où vous allez enregistrer le projet SoapUI qui testera votre webservice) puis cliquez sur "Enregistrer".
Si LibreOffice vous le demande, confirmez que vous souhaitez bien enregistrer un fichier CSV.
Le séparateur de données est le caractère ";" (point-virgule)
 
![csv separator]({{ site.baseurl }}/images/SUI/SUI_csvExample.png)
![csv save]({{ site.baseurl }}/images/SUI/SUI_utiliserCSV.png)
![csv save options]({{ site.baseurl }}/images/SUI/SUI_csvSeparator.png)
 
###### Excel

Ecrivez vos données.

Lorsque vous les enregistrez, sélectionnez le format "CSV (séparateur point-virgule)", choisissez un emplacement cohérent (par exemple, dans le répertoire où vous allez enregistrer le projet SoapUI qui testera votre webservice) puis cliquez sur "Enregistrer".
Si Excel vous le demande, confirmez que vous souhaitez bien enregistrer un fichier CSV.

![Excel CSV]({{ site.baseurl }}/images/SUI/SUI_csvExample.png)
![Excel CSV confirm]({{ site.baseurl }}/images/SUI/SUI_ExcelCSV.png)

###### Vérifier l'encodage

Ouvrez le fichier CSV avec Notepad++, cliquez sur "Encodage" :

* Si "Encoder en ANSI" est sélectionné, le fichier est bon.
* Sinon, cliquez sur "Convertir en ANSI"

Cette manipulation sert à éviter les problèmes liés aux accents et aux caractères spéciaux.

![ANSI]({{ site.baseurl }}/images/SUI/SUI_ANSI.png)
 
#### Importer l'outil d'automatisation dans un autre projet SoapUI

Copier la TestSuite de l'exemple (projet SoapUI_Auto) dans le projet de votre choix, avec un glisser-déposer ou un clic-droit -> Cloner.
 
![Drag and clone]({{ site.baseurl }}/images/SUI/SUI_dragAndDrop2.png)
![Clone]({{ site.baseurl }}/images/SUI/SUI_clone.png)
 
SoapUI vous demandera si vous souhaitez également copier le lien vers le webservice utilisé par la TestSuite. Vous n'aurez probablement pas besoin de ce lien : vous pouvez l'importer puis le supprimer ensuite, ou vous pouvez demander à SoapUI de ne pas l'importer tout court.

![Missing interface]({{ site.baseurl }}/images/SUI/SUI_Clone2.png)
 
Si vous n'importez pas le lien, SoapUI signalera une erreur : on lui indiquera qu'il faut supprimer le TestStep qui appelle le webservice de l'exemple.

![Remove step]({{ site.baseurl }}/images/SUI/SUI_Clone3.png)

#### Paramétrer l'outil d'automatisation

Avant de pouvoir utiliser l'outil pour votre webservice, il faut lui indiquer quel webservice utiliser, quel fichier CSV lire, et comment utiliser les données du fichier CSV.

Ouvrez le Test Case que vous avez importé et ajoutez une requête SOAP ou REST.

* Le nom n'a pas d'importance
* Il faut que la requête soit en deuxième position (entre "Data_injector" et "Delay")

![Insert step]({{ site.baseurl }}/images/SUI/SUI_InsertStep.png)
 
Indiquez à SoapUI quel service utiliser, et cochez les cases de votre choix.

* Je décoche généralement les 3 premières cases : j'ai souvent des cas de test qui sont incompatibles avec ces vérifications. Exemple : si je sélectionne "Not Soap Fault Assertion", alors SoapUI vérifiera systématiquement que l'appel au webservice ne provoque pas d'erreur Soap. Or j'ai dans mon scénario de test un cas qui doit provoquer une erreur Soap : l'outil d'automatisation signalera que ce cas ne fonctionne pas (alors qu'il fonctionne).
* la case "Create optional elements" est utile pour générer le flux XML "par défaut" du webservice.

![Add request]({{ site.baseurl }}/images/SUI/SUI_addRequest.png)

Ensuite, renseignez la requête à envoyer au webservice afin de faire la correspondance entre les données du CSV et les endroits où elles doivent être utilisées.

![Properties mapping]({{ site.baseurl }}/images/SUI/SUI_csvMap.png)
![Properties mapping 2]({{ site.baseurl }}/images/SUI/SUI_csvMap2.png)
 
#### Rappel des règles à respecter

**_Règles importantes_**

> * La première colonne du fichier CSV soit s'appeler "Tst_name"
> * La requête vers le webservice doit être en deuxième position dans le Test Case
> * Les vérifications automatiques que vous implémentez doivent être suffisantes (i.e. on peut se fier au résultat des vérifications automatiques pour savoir si un cas de test est bon ou en échec)

#### Exécuter le scénario

Lancez le scénario. S'il y a une erreur lors de l'exécution lisez le log pour déterminer s'il s'agit d'une erreur d'implémentation ou d'un bug du webservice.

![Run scenario]({{ site.baseurl }}/images/SUI/SUI_TCLog.png)
 
#Piloter SoapUI depuis Maven

**_Maven ?_**

> Pour résumer, [Maven](https://fr.wikipedia.org/wiki/Apache_Maven) est un outil qui permet d'automatiser la construction d'un projet. Le développeur crée du code, et demande à Maven de faire un "build". Un build basique sera : "compile le code" : s'il y a une erreur lors de la compilation, Maven signalera que le build a échoué et un rapport d'erreur sera produit. Il est possible d'ajouter beaucoup d'étapes à un build.  

Le projet SoapUI qui lit un fichier CSV est livré avec les fichiers nécessaires pour ajouter l'étape suivante au build : "exécute ce scénario de test dans SoapUI ; le build ne sera valide que si les tests ne détectent pas d'erreur" : 

* pom.xml - contient le build qui exécute le projet "Projet_SoapUI_exemple.xml"
* maven_settings.xml - contient les réglages requis par Maven pour exécuter SoapUI
 
**_Le plugin Maven de SoapUI_**

> Bien que très utile, le plugin Maven de SoapUI est beaucoup critiqué par la communauté des utilisateurs, en partie parce que le site officiel de SoapUI décrit assez mal la façon de l'utiliser.
> De plus, le plugin Maven ne se comporte pas tout à fait comme le GUI et cela peut poser quelques problèmes. Par exemple, la portion de code Groovy qui renomme automatiquement la requête vers le webservice fonctionne parfaitement dans le GUI (i.e. la version "sur le poste client" de SoapUI), mais pas avec le plugin Maven.
> 
> ![AutoRename]({{ site.baseurl }}/images/SUI/SUI_AutoName.png)
 
# Piloter SoapUI depuis Jenkins

Piloter SoapUI depuis Jenkins revient à piloter SoapUI depuis Maven, mais sur un serveur qui dispose d'une interface d'administration bien pensée.
Pour utiliser le projer SoapUI d'exemple avec Jenkins, ajoutez une étape maven à un job (ou créez un nouveau job avec une étape maven). Il faudra surtout indiquer à Jenkins qu'il faut utiliser le fichier de settings maven qui accompagne le projet.

![Jenkins]({{ site.baseurl }}/images/SUI/SUI_jenkins.png)

# Piloter SoapUI depuis Squash TA

Le pilotage par Squash TA se fait aussi à l'aide de Maven, il y a donc besoin du fichier "maven_settings.xml". Pour utiliser le projet sur un poste de travail avec Eclipse + Maven, servez-vous du fichier Squash_TA_pom.xml.
Squash TA utilise le sous-répertoire src :

* src\SquashTA\resources contient le scénario SoapUI
* src\SquashTA\tests contient le script Squash TA qui exécute le scénario SoapUI
 
**_Chemin du fichier CSV_**

> Pour que Squash TA puisse exécuter correctement le scénario SoapUI, il faut que le scénario SoapUI soit paramétré pour charger le fichier CSV depuis un chemin absolu (Squash TA ne fonctionne pas avec le chemin relatif). Il faudra indiquer ce chemin dans la propriété "**chemin_CSV_absolu**" du Test Step "**Looper_properties**" : SoapUI ignorera alors la valeur inscrite dans la propriété "chemin_CSV"
 
#Pour automatiser : Squash TA ou Jenkins ?

Dans l'idéal, voici le scénario d'automatisation à mettre en place (ce scénario serait exécuté automatiquement à chaque nouveau commit ou chaque jour à minuit) :

* compiler le code
* initialiser les bases de données et y insérer les jeux de données pour les tests automatisés
* exécuter les tests automatisés
* générer un rapport d'exécution

Dans l’entité pour laquelle je travaillais au moment de la mise en place de l’automatisation des tests des webservices, ce qu'on utilisait ressemblait à ceci :

1. Jenkins ordonne de compiler le code
2. Jenkins ordonne à Squash TA d'exécuter son script 
  1. Squash TA initialise les bases de données et y insère les jeux de données pour les tests automatisés
  2. Squash TA exécute les tests automatisés
  3. Squash TA génère un rapport de tests
3. Jenkins génère un rapport d'exécution
 
SoapUI a une particularité : on peut le piloter avec Squash ou avec Jenkins, et dans les 2 cas ce sont 2 manières très différentes de faire :

* Jenkins utilise le plugin Maven de SoapUI
* Squash TA utilise un module spécifique à Squash

Utiliser Squash TA ou Jenkins ne revient donc pas au même, voici les différences :

## Jenkins

Dans l'absolu, Jenkins est capable de faire tout ce qu'il faut pour l'automatisation des tests, et lorsqu'il utilise SoapUI il produit un rapport qui est facile à interpréter.

Dans la réalité, on avait besoin que Jenkins demande à Squash de s'occuper des bases de données et des tests. L’idée était également de pouvoir faire le lien entre les scénarios de tests écrits dans Squash TM et les tests automatisés (gérés par Squash TA), ce qui était déjà fait pour d’autres composants de l’application.

Mettre en place un Jenkins qui gèrerait toutes les étapes lui-même aurait donc demandé une refonte plutôt chronophage de l’existant, et garder le lien entre le scénario de test et les exécutions automatiques aurait demandé un travail supplémentaire.

## Squash TA

Pour ce projet, Squash TA gèrait les bases de données et l'exécution des tests automatisés. L'intérêt de Squash TA est que les tests automatisés sont liés à leurs équivalents "manuels" dans Squash TM : cela permet de faire un suivi et de faire évoluer les tests plus facilement que si on n'utilisait que Jenkins.

L'inconvénient est que le fonctionnement du plug-in SoapUI de Squash TA n'est ni celui du plugin Maven, ni celui du [GUI]( https://fr.wikipedia.org/wiki/Interface_graphique) de SoapUI :

* Squash TA charge le projet SoapUI à exécuter dans un dossier temporaire. Cela oblige à indiquer le chemin absolu du fichier CSV à lire : il faut y penser lorsqu'on transfère un scénario depuis/vers le plugin Squash vers/depuis une autre version de SoapUI.
* Le rapport de test produit par le plugin Squash TA de SoapUI est inexploitable avec ce type de projet SoapUI : il ne contient que la moitié des informations nécessaires à l'identification d'un problème.
 
## Solution

Pour résumer, on avait le choix entre :

* utiliser Jenkins, ce qui fonctionne parfaitement mais implique de :  
  * modifier totalement la façon dont on fait les tests automatisés
  * perdre le lien avec Squash TM
* utiliser Squash TA, ce qui est plus simple à mettre en œuvre mais qui : 
  * nécessite de faire attention au chemin relatif / absolu du fichier CSV
  * produit un rapport de test inexploitable pour SoapUI
 
On a donc choisi d'utiliser Squash TA. L'automatisation permet dans ce de différentier les 2 situations suivantes :

1. Les tests automatisés ne relèvent aucune erreur
2. Les tests automatisés relèvent au moins une erreur
En cas d'erreur, l’identification des cas de tests qui posent problèmes se déroule de la façon suivante :
1. Configuration de l'environnement de test (= configuration du webservice + initialisation de la base de données)
2. Exécution du scénario de test dans le GUI SoapUI
3. Lecture du rapport d'exécution produit par le GUI de SoapUI
 
**_Alternative_**
> Comme alternative au GUI de SoapUI, on peut utiliser le plugin Maven : le rapport généré sera le même, il sera juste présenté différemment.
 
# Aller plus loin

## Tests de performances

Avec SoapUI, il est également possible de faire des tests de performances (souvent appelés "benchmark").

![Benchmarck]({{ site.baseurl }}/images/SUI/SUI_benchmark.png)

On peut paramétrer le nombre d'appels simultanés à envoyer, la fréquence à laquelle chaque groupe d'appels et lancé, et on peut mesurer les temps de réponses ainsi que la quantité de données envoyées.

Exemple : une architecture de webservices X doit être capable d'avoir un temps de réponse de moins de 250 millisecondes avec 300 utilisateurs concurrents envoyant une requête par seconde pendant 2 heures ininterrompues. On met en place un environnement de benchmark : il s'agit de l'environnement qu'on prévoit de mettre en production (même type de ressources, même volume de données dans les bases etc  .), mais il ne sera accessible qu'à un groupe spécifique de machines. Ce groupe de machines peut être sous certaines conditions réduit à "un". La machine en question utilisera SoapUI pour simuler les conditions d'utilisation visées (300 requêtes par secondes pendant 2 heures) et mesurer les temps de réponse.

# FAQ - Troubleshooting

Dans cette section je répondrai à vos éventuelles questions.
