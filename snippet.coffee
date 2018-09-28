{Build} = require "build"

# Page 1 setup
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

# Page 2 setup
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


# Build page 1

page1 = new Build page1Props