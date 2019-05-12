# VisualDon – Projet
## Le jeu de données
J'ai sélectionné les statistiques liés au nombre d'enfants n'ayant pas accès à l'éducation. J'ai sélectionné les jeux de données des enfants de sexe masculin et féminin.
https://data.worldbank.org/indicator/SE.PRM.UNER.FE
https://data.worldbank.org/indicator/SE.PRM.UNER.MA

## Transformation des données
Pour pouvoir utiliser mes données convenablement, j'ai dû beaucoup les retravailler, les trier, etc. 
Étant donné que je souhaitais représenter plusieurs types de graphiques avec des données différentes, j'ai choisi de séparer chaque tri de données dans un fichier dédié. J'ai tout d'abord utilisé un convertisseur (CSV > JSON) et ai ensuite effectué tous les traitements nécessaire au travers de scripts javascripts. Ils se trouvent tous dans le dossier data de mon projet. 

## Choix effectués
La mise en forme de mes données JSON est relativement spécifique. J'ai décidé d'utiliser la librairie billboard.js et j'ai donc décidé de formater mes données au mieux pour cette dernière. Étant donné le large volume de données que je souhaitais traiter, j'ai jugé bon de réaliser ces nombreux scripts pour la mise en forme de mes données.

## Visualisation des données
Afin de simplifier la visualisation des données et aux vus des graphiques que je souhaitais réaliser, j'ai tout de suite décider d'utiliser la librarie billboard.js. Celle-ci a parfaitement rempli son rôle et est très adaptée à mes besoins quant aux graphiques que j'ai utilisé. Elle m'a permis de développer des interactions plus complexes grâce au temps qu'elle m'a fait gagner.

Pour ce qui est de la carte interactive, j'ai décidé d'utiliser la librairie datamaps.js, qui avait un avantage clé. Chaque pays possède une classe CSS qui est en fait le code du pays (par exemple, Canana = CAN, etc.). Étant donné que mes données comprenaient également le code du pays, il a été très facile d'implémenter une visualisation basée sur cet aspect. J'ai ensuite pu mettre en place l'interaction principale, à savoir l'évolution automatique de chaque pays en fonction du nombre d'enfants sans accès à l'école dans chaque pays.

## Les types de graphique
Pour illustrer les tendances, j'ai utilisé des graphiques de type "line" afin d'illustrer au mieux l'évolution temporelle du phénomène.
De plus, j'ai utilisé un graphique de type "camembert" afin de visualiser le rapport entre les différentes régions du monde (contients).
Enfin, j'ai utilisé une carte afin de représenter l'évolution de chaque pays du monde.
Ces différents types de représentations se complètent bien et permettent d'avoir un point de vue plus objectif. 

## Ce que je souhaite démontrer
Avec ces statistiques, je souhaiterais illustrer l'évolution de la problématique des enfants n'ayant pas accès à l'éducation.
Je souhaiterais également illustrer la/ les différences de cette évolution entre les enfants de sexe féminin et masculin et entre les différentes régions du monde.
On parle souvent de l'égalité homme/femme, et j'étais persuadé que ce phénomène faisait également l'objet de disparités. Heureusement, les visualisations ont démontrés que ces dernières ont largement diminué au fil du temps. On peut imaginer que c'est notamment au travers de mouvements féministes mondiaux qu'elles ont diminués.
D'un point de vue général, j'ai voulu démontré que ce phénomène était directement lié au niveau de développement des régions du monde. Sans surprise, l'Afrique est l'un des continents principaux à être concerné par cette problématique. Même si la problématique a diminué de plus de 50% depuis 1970, il est tout de même surprenant de constater que 63 millions d'enfants n'ont toujours pas accès à l'école, surtout lorsque l'on voit la technologie d'aujourd'hui.

À l'heure où le savoir est plus que jamais facilement partageable, le constat actuel reste attristant et est synonyme de la complexité de la problématique. 

## Le public cible
Le public cible de cette visualisation sont les organisations éducatives, afin de prendre conscience de la problématique, de son évolution et des progrès qu'il reste à effectuer. Et les États sont aussi visés. Ce type de représentation peut parfaitement faire prendre conscience de la problématique et cela pourrait permettre aux États de prendre plus de mesures pour offrir l'éducation à tous. En ayant un point de vue le plus objectif possible, cela permet d'avoir une argumentation solide et défendable.


