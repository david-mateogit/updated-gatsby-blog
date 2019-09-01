---
title: "Google Maps development quirks I've encountered. \U0001F914"
date: 2019-09-01T15:55:36.051Z
description: Google Maps auto select first result on Enter.
---
###Greetings.

Today I would like to share a minor quirk I found while implementing a google map for a project.

I like to do some minor user experience type test on my code to adapt it and make it comfortable to use.

While developing the map I found that when we create it with Place Autocomplete, although it correctly, well sometimes 😅, predicts what you want on the first try, it doesn't auto select the first option when pressing Enter. 🤨

```js
const autocomplete = new google.maps.places.Autocomplete(input);
autocomplete.addListener('place_changed', () => {
  const place = autocomplete.getPlace();
  //code to handle the query.
  place.geometry.location.lat();
  place.geometry.location.lng();
});
```

Actually it throws an error because it was querying the location of an empty object. The error can be handled with an if check:

```js
if (!place.geometry) return;
```

But I was still annoyed that I couldn't auto select the first result on enter.

After an afternoon searching on Stack Overflow and other places on google, I found a couple of solutions posted by various devs on this topic. Also I felt validated that some people felt it wasn't right too.

At the end the solutions provided felt very hacky like simulating a keydown when getting a result then pressing enter.

I couldn't believe we had to go to such measures to implement something simple like this. I'm sure Google had this figured out by now.

It didn't help that on StackOverflow the solution to this topic with the key simulation hack is on this year 2019. 😞

I went back to the drawing board on the google maps platform documentation and noticed the code examples that they use.

https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete

On the places autocomplete it has the ux issue of this post BUT then I noticed the example on the Places Search Box.

https://developers.google.com/maps/documentation/javascript/examples/places-searchbox

And It Works! 🎉

```js
const searchBox = new google.maps.places.SearchBox(input);
searchBox.addListener('places_changed', () => {
  const places = searchBox.getPlaces();
  if (places.length == 0) return;
  //code to handle the query.
  places[0].geometry.location.lat(); 
  places[0].geometry.location.lng();
});
```

Now I can continue working without this quirk.

Thanks for reading!
