# framer-build

Frustrated of having to generate every single layer at the beginning of your project?

This is for you!

Setup all of your layers as objects, rather than creating them all. Then you can just pass in the properties to `Build` and it build the layer as and when you need it. Also, delete layers from the DOM when you don't need them any more.

## Installation

### Manual installation

Download and move the `build.coffee` file to your modules folder.

Require the module at the top of your file with the following code:

```coffeescript
{Build} = require "build"
```

## Setup your layer properties

```coffeescript
page1Props =
    backgroundColor: "#222"
    children:
        layer1:
            backgroundColor: "#f00"
            width: Screen.width
            height: 100
        content:
            type: "TextLayer"
            text: "This is some content."
            parentLayer: "layer1"
            x: Align.center
            y: Align.center

page2Props =
    children:
        layer1:
            backgroundColor: "#00f"
            y: 150
            height: 50
            width: page1.width
            draggable:
                momentum: false
                constraints:
                    x: 0, y: 0
                    width: Screen.width, height: Screen.height
```

## Build your layers

```coffeescript
page1 = new Build page1Props
```

## Include builds within functions of your object

```coffeescript
page1Props =
    backgroundColor: "#222"
    children:
        layer1:
            backgroundColor: "#f00"
            width: Screen.width
            height: 100
            onTap: ->
                page2 = new Build page2Props
        content:
            type: "TextLayer"
            text: "This is some content."
            parentLayer: "layer1"
            x: Align.center
            y: Align.center
```

## Animating your builds

Just add `animateIn` or `animateOut` to your objects, and any properties you want the animations to have.

`animateIn` takes two options: `start`, and `options`
`animateOut` takes two options: `end`, and `options`

Simply add in the properties you want the layer to start or end with, and it will animate to the default properties that you apply to the layer normally

```coffeescript
page1props =
	backgroundColor: "#222"
	animateOut:
		end:
			x: -Screen.width
		options:
			time: 0.5
			curve: Bezier.easeInOut
    children:
        layer1:
            backgroundColor: "#f00"
            width: Screen.width
            height: 100
            onTap: ->
                page2 = new Build page2Props
        content:
            type: "TextLayer"
            text: "This is some content."
            parentLayer: "layer1"
            x: Align.center
            y: Align.center

page2Props =
    animateIn:
		start:
			x: Screen.width
		end:
			x: 0
		options:
			curve: Spring(damping: 0.5)
			time: 1 
    children:
        layer1:
            backgroundColor: "#00f"
            y: 150
            height: 50
            width: page1.width
            draggable:
                momentum: false
                constraints:
                    x: 0, y: 0
                    width: Screen.width, height: Screen.height
```