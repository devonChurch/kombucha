# Kombucha 🍵🍶😋

## What 👋

A **Micro Front-end** exploration using the [Single SPA](https://single-spa.js.org/) architecture to present **React**, **Vue**, and **AngularJS** _application verticals_ synergistically. 

## Why 🤔

The ability for _Developers_ to build **isolated** _verticals_ of an application while remaining a **cohesive** experience to _Users_ is an important pillar to an application architecture.

Combining **multiple** Front-end frameworks into a **single** application experience facilitates the incremental evolution of a codebase with an emphasis on longevity. It also allows teams to choose a technology stack that is relevant to a given _verticals_ requirements.

## How 💡

The Single SPA system acts as a high-level routing orchestrator that mounts the relevant _application vertical_. This very light layer of abstraction means that no one UI Framework is controlling the core application architecture.

**_The application is split into three verticals, each associated with a different UI Framework._**

### **Vue**
+ **Section:** _Products_
+ **Pages:** _Listings, Purchases_

### **Angular**
+ **Section:** _Settings_
+ **Pages:** _Profile, Account_

### **React**
+ **Section:** _Create_
+ **Pages:** _Invoice, Ticket_

Each _application vertical_ has a Single SPA wrapper that hooks into their lifecycle methods for mounting.

![Kombucha architecture](https://user-images.githubusercontent.com/15273233/89119139-e9a6e780-d4ff-11ea-9e2b-6121b8455a6c.png)

_Application verticals_ are **deployed independently** and curated at run time via the Single SPA initializer.

![Kombucha terminal](https://user-images.githubusercontent.com/15273233/89119266-13144300-d501-11ea-9822-86ddb663e6fc.png)

## Demo 📺

The demo below shows each _application vertical_ being mounted based on Single SPA's assertion on the current core route.

![Micro Front-end mount/unmount](https://user-images.githubusercontent.com/15273233/89119245-c6c90300-d500-11ea-836e-9a27ef6e8344.gif)

Each **Micro Front-end** can be freely mounted using the [Single SPA Devtools extension](https://single-spa.js.org/docs/devtools/).

![Single SPA Devtools extension](https://user-images.githubusercontent.com/15273233/89119242-bf095e80-d500-11ea-9aaf-835670518c72.gif)
