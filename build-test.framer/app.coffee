{Build} = require "build"

# Page 1
page1props =
	backgroundColor: "#222"
	animateOut:
		end:
			x: -Screen.width
		options:
			time: 0.5
			curve: Bezier.easeInOut
	children:
		header:
			backgroundColor: "#00f"
			y: 100
			height: 100
			width: Screen.width
			onTap: _.once ->
				page2 = new Build page2props
		other:
			backgroundColor: "#f00"
			y: 200
			height: 50
			width: Screen.width
		text:
			type: "TextLayer"
			parentLayer: "header"
			text: "Click me!"
			color: "#fff"
			x: Align.center
			y: Align.center

# Page 2
page2props =
	animateIn:
		start:
			x: Screen.width
		options:
			curve: Spring(damping: 0.5)
			time: 1
	children:
		test:
			backgroundColor: "#0f0"
			width: Screen.width
			y: 300
			height: 100
			onDragStart: _.once ->
				page3 = new Build page3props
			draggable:
				friction: 200
				constraints:
					x: 0, y: 0
					width: Screen.width, height: Screen.height
		text:
			type: "TextLayer"
			text: "Drag me to show #3"
			parentLayer: "test"
			fontSize: 24
			x: Align.center
			y: Align.center
			color: "#000"

# Page 3
page3props =
	animateIn:
		start:
			opacity: 0
		end:
			opacity: 1
		options:
			curve: "linear"
			time: 0.5
	children:
		test:
			backgroundColor: "#f00fdd"
			width: Screen.width
			y: 450
			height: 50
			index: -1
			onTap: ->
				page1?.delete()
		text:
			type: "TextLayer"
			color: "#000"
			parentLayer: "test"
			text: "Click and see..."
			x: Align.center
			y: Align.center


page1 = new Build page1props