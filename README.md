# About

This repo is an X-Tag custom web-component stub that can be used as a starting point when building new elements.  It provides that basic tools and grunt tasks to get started.

## How to use it
``` html
<x-github-card user="Gioyik"></x-github-card>
```

Result:

![Gioyik profile](demo/example.png)

## Dev Setup
```
Fork this repo, rename it, then clone it.

$ npm install	// install bower tasks
$ bower install	// install components
$ grunt build   // build the dependencies
```

## FAQ
Please read before everything:

### Nice idea.
Yes it's nice all the idea, but I am not the person that has all the credit. This was made first by [Guille Paz](https://github.com/pazguille/github-card)

### Ok, now I am seeing that are the same thing?
Yes and not. `github-card` by Guille Paz is a webcomponent made on Polymer by Google (the demo only works on Chrome). This is `x-github-card` a port of Guille work to X-Tag by Mozilla (works on most of the browser, not only Chrome or Firefox). If you see it's the same result, yes it is, but made differently to support more browsers.

### So, this is made using x-tag?
Yes

### Why x-tag?
X-Tag is made by Mozilla and it's a really good work. The demo by Guille is great but sucks running only on Chrome. With x-tag the components you make work on most of the browser.

### Why you tried with X-Tag? Is not popular as Polymer is.
That was one of the reason to make this real. People think X-Tag are not cool as Polymer is, and most of the webcomponents made with Polymer are done using Polymer because X-Tag could not make that too. This demo should show that X-Tag and Polymer are to gret projects that could make the same ideas real, the unique difference is the browser restriction in Polymer.

## Links
[X-Tags Docs](http://x-tags.org/docs)

[Guide for creating X-Tag Components](https://github.com/x-tag/core/wiki/Creating-X-Tag-Components)

[Using X-Tag components in your applications](https://github.com/x-tag/core/wiki/Using-our-Web-Components-in-Your-Application)

[github-card](https://github.com/pazguille/github-card)