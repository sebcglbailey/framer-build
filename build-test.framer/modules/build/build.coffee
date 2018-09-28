Layer::addDraggable = (@options) ->
	if @options.draggable
		@draggable.enabled = if @options.draggable.enabled != undefined then @options.draggable.enabled else true

		for key, value of @options.draggable
			@draggable[key] = value

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

	delete: ->
		@destroy()
	remove: ->
		@destroy()