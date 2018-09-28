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