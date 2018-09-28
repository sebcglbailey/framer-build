Layer::addDraggable = (@options) ->
	unless @options.draggable then return

	@draggable.enabled = if @options.draggable.enabled != undefined then @options.draggable.enabled else true

	for key, value of @options.draggable
		@draggable[key] = value

Layer::addAnimations = (@options) ->
	unless @options.animateIn || @options.animateOut then return

	if @options.animateIn
		@props = @options.animateIn.start
		@animate Object.assign @options.animateIn.end, {options: @options.animateIn.options}

class exports.Build extends Layer
	constructor: (@options={}) ->

		_.defaults @options,
			backgroundColor: null
			size: Screen.size
		
		super @options

		for layer, props of @options.children
			if props.type
				type = eval props.type
				child = new type
			else
				child = new Layer

			if props.parentLayer
				child.parent = @selectChild props.parentLayer
			else
				child.parent = @

			child.props = props
			child.addDraggable(props)
			child.addAnimations(props)
			child.name = layer
			@[layer] = child

			for prop, value of props
				hasFunc = prop.split("on")[1]
				isFunc = typeof value == "function"
				if hasFunc && isFunc && Events[hasFunc]
					do (value) ->
						child.on Events[hasFunc], ->
							value()

		@addDraggable(@options)
		@addAnimations(@options)

	animateLeave: ->
		@animate Object.assign @options.animateOut.end, {options: @options.animateOut.options}
		@onAnimationEnd ->
			@destroy()

	delete: (sudden) ->
		if sudden? || !@options.animateOut then @destroy()
		else if @options.animateOut then @animateLeave()
		else @destroy()
	remove: (sudden) ->
		if sudden? || !@options.animateOut then @destroy()
		else if @options.animateOut then @animateLeave()
		else @destroy()