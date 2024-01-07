# EN (translated from the french version with deepl):

The AmazingCompany wants to test the possibility of delivering to its customers using drones.

drones. To do this, it wants to validate its practical application by developing a

simulator.

To deliver a Habitant (that's what we call our customers), the drone must

dʼabordantly pick up a product from a AmazingCompany store, then fly to the customer

to the customer's home to drop off the order. Each store has a limited stock of

goods.

Constraints

Here are the constraints you'll need to take into account in the simulator:

1\. A drone must be at the exact position of the store to pick up the order.

2\. A drone must be at the exact position of the inhabitant to drop off the order.

3\. A drone has an autonomy of 100 kilometers before becoming unusable.

4\. A drone moves in a straight line on a 2-dimensional plane.

horizontally, vertically and diagonally

5\. A drone can only carry one object at a time.

6\. A drone moves instantaneously and consumes the necessary energy

Objectif

Design and develop a Web graphical interface enabling AmazingCompany employees to plan drone flights to deliver to Residents.

The interface must enable visualization of:

● The list of orders (identifier, name of the Resident, products ordered,

formatted as follows: _[quantity]x [product]_. Separated by commas)

● List of drones (ID, range, X position, Y position)

● Store inventories

● Flight plans created

**Drone stocks and autonomy must be updated in real time, every**

**creation of a flight plan.**

Realization

You can choose your tools from the following list: Angular, VueJS, React, TypeScript,

JavaScript.

You can rely on the following design (see design.png file), you can make the modifications

you deem necessary and relevant.

The various data from the AmazingCompany repositories are provided in JSON format

format below.

You can supply your project as an archive (e.g. zip) or via a

source code repository (Github, Gitlab, etc.).

Test files

List of drones

UAVs are identified by **id** and are initially positioned at coordinates **x** and **y** and

have an autonomy set by the **autonomy** field.

```json
[
  {
    "id": "Alpha",

    "x": 5,

    "y": 10,

    "autonomy": 100
  },

  {
    "id": "Beta",

    "x": 2,

    "y": 7,

    "autonomy": 100
  },

  {
    "id": "Gamma",

    "x": 6,

    "y": 20,

    "autonomy": 100
  },

  {
    "id": "Delta",

    "x": 4,

    "y": 43,

    "autonomy": 100
  },

  {
    "id": "Epsilon",

    "x": 9,

    "y": 9,

    "autonomy": 100
  }
]
```

Store list

Stores are identified by **id** and are positioned at coordinates **x** and **y**. Each

store has a dedicated stock, associating a product with a limited quantity.

```json
[
  {
    "id": "Villeneuve",

    "x": 3,

    "y": 3,

    "stock": [
      {
        "productId": "Axe",

        "quantity": 10
      },

      {
        "productId": "Hammer",

        "quantity": 2
      }
    ]
  },

  {
    "id": "Roncq",

    "x": 23,

    "y": 45,

    "stock": [
      {
        "productId": "Axe",

        "quantity": 1
      },

      {
        "productId": "Nail",

        "quantity": 3
      }
    ]
  },

  {
    "id": "Lesquin",

    "x": 10,

    "y": 14,

    "stock": [
      {
        "productId": "Nail",

        "quantity": 2
      },

      {
        "productId": "Hammer",

        "quantity": 1
      }
    ]
  }
]
```

Customer list

Customers are identified by **id** and positioned at coordinates **x** and **y**.

```json
[
  {
    "id": "Jean Dupont",

    "x": 5,

    "y": 8
  },

  {
    "id": "Michelle Smith",

    "x": 20,

    "y": 20
  },

  {
    "id": "Robert Martin",

    "x": 12,

    "y": 3
  }
]
```

Order list

Customer orders are identified by **id**, and associate a customer **customerId** with a list of

list of pairs (**productId**, **quantity**) in the **basket**.

```json
[
  {
    "id": "LMFRORDER-1",

    "customerId": "Jean Dupont",

    "basket": [
      {
        "productId": "Axe",

        "quantity": 5
      },

      {
        "productId": "Nail",

        "quantity": 1
      },

      {
        "productId": "Hammer",

        "quantity": 1
      }
    ]
  },

  {
    "id": "LMFRORDER-2",

    "customerId": "Michelle Smith",

    "basket": [
      {
        "productId": "Nail",

        "quantity": 1
      },

      {
        "productId": "Hammer",

        "quantity": 1
      }
    ]
  },

  {
    "id": "LMFRORDER-3",

    "customerId": "Robert Martin",

    "basket": [
      {
        "productId": "Hammer",

        "quantity": 1
      },

      {
        "productId": "Axe",

        "quantity": 5
      }
    ]
```

# FR:

La société AmazingCompany souhaite tester la possibilité de livrer ses clients par l'intermédiaire

de drones. Pour cela, elle souhaite valider sa mise en pratique par le développement dʼun

simulateur.

Pour livrer un Habitant (c’est comme cela que nous appelons nos clients), le drone doit

dʼabord récupérer obligatoirement un produit dans un magasin AmazingCompany puis se rendre

au domicile du client pour déposer sa commande. Chaque magasin dispose d'un stock de

marchandises limité.

Contraintes

Voici les contraintes que vous devrez prendre en compte dans le simulateur :

1\. Un drone doit être à la position exacte du magasin pour retirer la commande

2\. Un drone doit être à la position exacte de l’Habitant pour déposer sa commande

3\. Un drone a une autonomie de 100 kilomètres avant de devenir inutilisable

4\. Un drone se déplace en ligne droite, sur un plan en 2 dimensions, il peut se déplacer

horizontalement, verticalement et en diagonale

5\. Un drone ne peut porter quʼun objet à la fois

6\. Un drone se déplace instantanément et consomme l'énergie nécessaire

Objectif

Concevoir et développer une interface graphique Web permettant aux collaborateurs AmazingCompany de planifier les vols des drones pour livrer les Habitants.

L’interface doit permettre de visualiser :

● La liste des commandes (identifiant, nom de l’Habitant, les produits commandés,

formatés comme suit : _[quantité]x [produit]_. Séparés par des virgules)

● La liste des drones (identifiant, autonomie, position X, position Y)

● L’état des stocks des magasins

● Les plans de vols créés

**Les stocks et l’autonomie des drones doivent être mis à jour en temps réel, à chaque**

**création d’un plan de vol.**

Réalisation

Vous pouvez choisir vos outils parmi la liste suivante : Angular, VueJS, React, TypeScript,

JavaScript.

<a name="br2"></a>

Vous pouvez vous appuyer sur la maquette suivante, vous pouvez apporter les modifications

que vous jugez nécessaires et pertinentes.

Les différentes données issues des référentiels AmazingCompany sont fournies au format JSON

ci-dessous.

Vous pouvez fournir votre réalisation sous forme d’archive (zip par exemple) ou par

l'intermédiaire d’un dépôt de code source (Github, Gitlab, …).

Les fichiers de test

Liste des drones

Les drones sont identifiés par **id** et sont positionnés initialement aux coordonnées **x** et **y** et

possèdent une autonomie fixé par le champ **autonomy**.

```json
[
  {
    "id": "Alpha",

    "x": 5,

    "y": 10,

    "autonomy": 100
  },

  {
    "id": "Beta",

    "x": 2,

    "y": 7,

    "autonomy": 100
  },

  {
    "id": "Gamma",

    "x": 6,

    "y": 20,

    "autonomy": 100
  },

  {
    "id": "Delta",

    "x": 4,

    "y": 43,

    "autonomy": 100
  },

  {
    "id": "Epsilon",

    "x": 9,

    "y": 9,

    "autonomy": 100
  }
]
```

Liste des magasins

Les magasins sont identifiés par **id** et sont positionnés aux coordonnées **x** et **y**. Chaque

magasin possède un stock dédié associant un produit à une quantité limitée.

```json
[
  {
    "id": "Villeneuve",

    "x": 3,

    "y": 3,

    "stock": [
      {
        "productId": "Axe",

        "quantity": 10
      },

      {
        "productId": "Hammer",

        "quantity": 2
      }
    ]
  },

  {
    "id": "Roncq",

    "x": 23,

    "y": 45,

    "stock": [
      {
        "productId": "Axe",

        "quantity": 1
      },

      {
        "productId": "Nail",

        "quantity": 3
      }
    ]
  },

  {
    "id": "Lesquin",

    "x": 10,

    "y": 14,

    "stock": [
      {
        "productId": "Nail",

        "quantity": 2
      },

      {
        "productId": "Hammer",

        "quantity": 1
      }
    ]
  }
]
```

Liste des clients

Les clients sont identifiés par **id** et sont positionnés aux coordonnées **x** et **y**.

```json
[
  {
    "id": "Jean Dupont",

    "x": 5,

    "y": 8
  },

  {
    "id": "Michelle Smith",

    "x": 20,

    "y": 20
  },

  {
    "id": "Robert Martin",

    "x": 12,

    "y": 3
  }
]
```

Liste des commandes

Les commandes clients sont identifiées par **id**, elles associent un client **customerId** à une

liste de couples (**productId**, **quantity**) dans le panier d’achat **basket**.

```json
[
  {
    "id": "LMFRORDER-1",

    "customerId": "Jean Dupont",

    "basket": [
      {
        "productId": "Axe",

        "quantity": 5
      },

      {
        "productId": "Nail",

        "quantity": 1
      },

      {
        "productId": "Hammer",

        "quantity": 1
      }
    ]
  },

  {
    "id": "LMFRORDER-2",

    "customerId": "Michelle Smith",

    "basket": [
      {
        "productId": "Nail",

        "quantity": 1
      },

      {
        "productId": "Hammer",

        "quantity": 1
      }
    ]
  },

  {
    "id": "LMFRORDER-3",

    "customerId": "Robert Martin",

    "basket": [
      {
        "productId": "Hammer",

        "quantity": 1
      },

      {
        "productId": "Axe",

        "quantity": 5
      }
    ]
  }
]
```
