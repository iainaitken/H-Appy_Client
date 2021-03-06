# H-Appy

| [Team Members](#team-members) | [Description](#description) | [Usage](#usage) | [Tech Stack](#tech-stack) | [Installation](#installation) | [Project goals](#project-goals) |

An activity finder app in the style of a restaurant menu, to remind you of fun things to do that make you happy.

A group project, being the final project of the Makers Academy software development bootcamp. The aim of the project is to work in a team, using high-quality processes to build an app (see [below](#project-goals) for more detailed project goals).

There are two repos associated with this project. This repo is for the app client; the repo for our server can be found at [https://github.com/AJ8GH/h-appy-server](https://github.com/AJ8GH/h-appy-server).

To watch the demo video, demonstrating a typical user narrative, click [here](https://user-images.githubusercontent.com/48794743/116425852-86ea3e80-a83a-11eb-941c-3df61d2b3949.mp4). You can also see the video in the 'Usage' section of this README.

Shout-outs to [Mosh](https://www.youtube.com/watch?v=0-S5a0eXPoc&t=1007s&ab_channel=ProgrammingwithMosh) and [Traversy Media](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=3434s&ab_channel=TraversyMedia) for their React Native and React tutorial videos.

Our slides from presenting the app are visible below. Click on the thumbnails to see a bigger version.

<p float="left">
<a href="/screenshot/slide1.png?raw=true"><img src="/screenshot/slide1.png" alt="H-Appy : Feed your boredom" width="300" /></a>
<a href="/screenshot/slide2.png?raw=true"><img src="/screenshot/slide2.png" alt="What is a dopamine menu?" width="300" /></a>
<a href="/screenshot/slide3.png?raw=true"><img src="/screenshot/slide3.png" alt="App Design" width="300" /></a>
<a href="/screenshot/slide4.png?raw=true"><img src="/screenshot/slide4.png" alt="Tech Stack" width="300" /></a>
<a href="/screenshot/slide5.png?raw=true"><img src="/screenshot/slide5.png" alt="Teamwork" width="300" /></a>
<a href="/screenshot/slide6.png?raw=true"><img src="/screenshot/slide6.png" alt="Learning journey" width="300" /></a>
  </p>


---

## Team Members

[Adam Jonas](https://github.com/AJ8GH)

[Iain Aitken](https://github.com/iainaitken)

[Jack Gumoes](https://github.com/jgumoes)

[Joey Hornsby](https://github.com/jshorns)

[Nicolas Bermejo](https://github.com/NicolasBermejo)

[Peter Allen](https://github.com/peter-james-allen)

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Description

An IOS/Android app based around the idea of a [dopamine menu](https://www.youtube.com/watch?v=-6WCkTwW6xg).

When you're bored, it can be difficult to choose an activity to relieve that boredom, in the same way that it can be difficult to make good food decisions when you're already hungry. Often, we end up doing things that just don't make us feel any better - like spending all day on social media, or eating unhealthy food.

A dopamine menu is a list of activities grouped into different categories. It can help you decide what to do to alleviate your boredom in an appropriate way.

Our app uses concepts found in restaurant menus to provide an easy-to-understand user interface:

* Looking for something to provide a quick dopamine boost? Check out the appetiser menu.
* Looking for a much more involved activity that will give you real satisfaction and fulfillment? Try the mains instead.
* How about an indulgent activity that you really shouldn't do very often? You'll find what you're looking for in the desserts section.
* Don't fancy anything on the menu? Maybe one of the Chef's Specials can tempt you instead.

By default, users will see a list of suggestions provided by the app. A signed-in user can tailor the menu suggestions by marking some of those suggested activities as favourites, which appear at the top of the menu.

Users can also add their own bespoke activities to the menu. We viewed customisation as an important tool - users would be far more likely to find the app's suggestions useful if they could tailor them to their own interests and needs. Activities belong to a menu section, have a name, a description, a score for accessibility and a score for cost. We included the latter two to reduce the number of assumptions our app would be making about its users and enable a further degree of tailoring and customization.

There is a separate back-end database that holds details of activities and users, hosted [here](https://github.com/AJ8GH/h-appy-server). It is accessed through an API, which we have hosted on https://happy-haddocks.herokuapp.com/. The app has full CRUD functionality, in that users can create, read, edit and delete activities.

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Usage

### Main Menu

On opening the app, the main menu will be displayed. This is collapsible by menu section:

<p float="left">
<img src="/screenshot/main-menu.png" alt="The main menu" width="296" />
<img src="/screenshot/menu-collapsing-gif.gif" alt="The main menu" width="296" />
  </p>

### Activity search

Users can view all 'chef's special' activities for a particular menu section through the drawer navigator. Users can also search all specials based on type, accessibility and cost.

<p float="left">
<img src="/screenshot/menu-section.gif" alt="Menu category browsing" width="296" />
<img src="/screenshot/search-function-gif.gif" alt="The search function" width="296" />
  </p>
  
### Creating an activity

Users can add their custom activities through the 'Create a Recipe' screen. They can then view the details of that activity from the menu.

<p float="left">
<img src="/screenshot/add-an-activity.png" alt="Menu category browsing" width="296" />
<img src="/screenshot/individual-activity.png" alt="Individual activity page" width="296" />
  </p>


### Editing/Deleting an activity

To enhance customisation, users can edit activities (perhaps to reflect their personal circumstances) and remove activities (if they are, for example, out of budget or not of interest).

<p float="left">
<img src="/screenshot/editing-activity.gif" alt="Editing an activity" width="296" />
<img src="/screenshot/deleting-activity.gif" alt="Deleting an activity" width="296" />
  </p>
  
### Helping the user

An about screen can be navigated to through the drawer navigator, to read about the concept of the dopamine menu and get a link to the youtube video. Help alerts on the search and add activity pages also explain properties like accessibility and cost.

<p float="left">
<img src="/screenshot/about-page.gif" alt="The about screen" width="296" />
<img src="/screenshot/help-alerts.gif" alt="Help alerts on dish categories" width="296" />
  </p>

### User narrative

This demo video shows a typical user narrative - signing in, looking at available activities in a particularly category based on the time they have available, adding a custom one, adding one from the database to favourites, and then searching for one.

https://user-images.githubusercontent.com/48794743/116425852-86ea3e80-a83a-11eb-941c-3df61d2b3949.mp4


---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Project Goals

The primary goal of the project is to create an app in a development team, using industry-standard development processes.

In particular:

* Use of Agile methodologies to develop the project.
* Identify a Minimum Viable Product at the outset and work to getting that up and running before adding any other features.
* Use of Test-Driven Development to build the project, achieving a high level of test coverage.
* Making use of user stories to outline the application and as the basis for writing feature tests.
* Use git branching to implement a successful workflow pattern.
* Pair programming.
* Good distribution of work; all members of the team should understand why any part of the application exists and how it works.
* High-quality work.

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Tech Stack

### Codebase

* React Native
* MongoDB
* Express
* Node
* Expo

### Testing Framework

Front-end:

* Jest

Back-end:

* Chai

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>

## Installation

Clone this repo:

```bash
git clone https://github.com/peter-james-allen/h-appy-client.git
```

Navigate to the project folder:

```bash
cd h-appy-client
```

Install dependencies:

```
npm i
```

You will need to have Expo CLI installed to run the app. Type 'expo start' into the command line to get the app running.

You will then see a series of instructions from expo. To run the app on your phone, you will need to have installed the Expo App. You can then scan the QR code with your camera app (Android) or the expo app (Iphone) to run the app on your phone. On your mac, you can follow the instructions to run the app on a simulator. Bear in mind you will need to have XCode installed to do the latter option.

---

<div style="text-align: right"><a href="#makers-bnb">Back to top</a></div>
