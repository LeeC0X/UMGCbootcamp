# React Router Patterns

## Part 1 - React Router Dog Finder
An app that routes to different dogs and displays information on that dog when you’re at that route.

The routes should look like this:
* /dogs is the homepage and shows all three dogs
* Clicking on a dog from the homepage takes you to that dog’s route. For example, clicking on Whiskey will take you to /dogs/whiskey.
* every other endpoint not listed should redirect you to /dogs.

## Part 2 - React Router Color Factory
Use React Router to build an app that lets you view colors and add new colors.

User Stories
* As a user, I can go to /colors to see a list of all available colors.
* As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.
  * (The route here should be /colors/:color )
* As a user, I can click on a button to show a form that will let me add a new color.
  * Note that you can give an input a type of color if you’re trying to select a color. (The route here should be /colors/new)
* As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.
* As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page.
* As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page

## Further Study - React Router Calculator
A calculator that supports routes like:

* /add/1/2
  * should render a component that displays 3.
* /subtract/3/2
  * should render a component that displays 1.
* /multiply/6/4
  * should render a component that displays 24.
* /divide/20/5
  * should render a component that displays 4.
