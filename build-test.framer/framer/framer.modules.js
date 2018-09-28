require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"build":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Layer.prototype.addDraggable = function(options) {
  var key, ref, results, value;
  this.options = options;
  if (this.options.draggable) {
    this.draggable.enabled = this.options.draggable.enabled !== void 0 ? this.options.draggable.enabled : true;
    ref = this.options.draggable;
    results = [];
    for (key in ref) {
      value = ref[key];
      results.push(this.draggable[key] = value);
    }
    return results;
  }
};

exports.Build = (function(superClass) {
  extend(Build, superClass);

  function Build(options) {
    var child, hasFunc, isFunc, layer, prop, props, ref, type, value;
    this.options = options != null ? options : {};
    _.defaults(this.options, {
      backgroundColor: null,
      size: Screen.size
    });
    Build.__super__.constructor.call(this, this.options);
    ref = this.options.children;
    for (layer in ref) {
      props = ref[layer];
      if (props.type) {
        type = eval(props.type);
        child = new type;
      } else {
        child = new Layer;
      }
      if (props.parentLayer) {
        child.parent = this.selectChild(props.parentLayer);
      } else {
        child.parent = this;
      }
      child.props = props;
      child.addDraggable(props);
      child.name = layer;
      this[layer] = child;
      for (prop in props) {
        value = props[prop];
        hasFunc = prop.split("on")[1];
        isFunc = typeof value === "function";
        if (hasFunc && isFunc && Events[hasFunc]) {
          (function(value) {
            return child.on(Events[hasFunc], function() {
              return value();
            });
          })(value);
        }
      }
    }
    this.addDraggable(this.options);
  }

  Build.prototype["delete"] = function() {
    return this.destroy();
  };

  Build.prototype.remove = function() {
    return this.destroy();
  };

  return Build;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NlYmFzdGlhbmJhaWxleS9Eb2N1bWVudHMvQ2xlYXJTY29yZS9Sb2d1ZSBPbmUvR2l0SHViL2ZyYW1lci1idWlsZC9idWlsZC10ZXN0LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NlYmFzdGlhbmJhaWxleS9Eb2N1bWVudHMvQ2xlYXJTY29yZS9Sb2d1ZSBPbmUvR2l0SHViL2ZyYW1lci1idWlsZC9idWlsZC10ZXN0LmZyYW1lci9tb2R1bGVzL2J1aWxkLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIkxheWVyOjphZGREcmFnZ2FibGUgPSAoQG9wdGlvbnMpIC0+XG5cdGlmIEBvcHRpb25zLmRyYWdnYWJsZVxuXHRcdEBkcmFnZ2FibGUuZW5hYmxlZCA9IGlmIEBvcHRpb25zLmRyYWdnYWJsZS5lbmFibGVkICE9IHVuZGVmaW5lZCB0aGVuIEBvcHRpb25zLmRyYWdnYWJsZS5lbmFibGVkIGVsc2UgdHJ1ZVxuXG5cdFx0Zm9yIGtleSwgdmFsdWUgb2YgQG9wdGlvbnMuZHJhZ2dhYmxlXG5cdFx0XHRAZHJhZ2dhYmxlW2tleV0gPSB2YWx1ZVxuXG5jbGFzcyBleHBvcnRzLkJ1aWxkIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChAb3B0aW9ucz17fSkgLT5cblxuXHRcdF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHNpemU6IFNjcmVlbi5zaXplXG5cdFx0XG5cdFx0c3VwZXIgQG9wdGlvbnNcblxuXHRcdGZvciBsYXllciwgcHJvcHMgb2YgQG9wdGlvbnMuY2hpbGRyZW5cblx0XHRcdGlmIHByb3BzLnR5cGVcblx0XHRcdFx0dHlwZSA9IGV2YWwgcHJvcHMudHlwZVxuXHRcdFx0XHRjaGlsZCA9IG5ldyB0eXBlXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNoaWxkID0gbmV3IExheWVyXG5cblx0XHRcdGlmIHByb3BzLnBhcmVudExheWVyXG5cdFx0XHRcdGNoaWxkLnBhcmVudCA9IEBzZWxlY3RDaGlsZCBwcm9wcy5wYXJlbnRMYXllclxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQgPSBAXG5cblx0XHRcdGNoaWxkLnByb3BzID0gcHJvcHNcblx0XHRcdGNoaWxkLmFkZERyYWdnYWJsZShwcm9wcylcblx0XHRcdGNoaWxkLm5hbWUgPSBsYXllclxuXHRcdFx0QFtsYXllcl0gPSBjaGlsZFxuXG5cdFx0XHRmb3IgcHJvcCwgdmFsdWUgb2YgcHJvcHNcblx0XHRcdFx0aGFzRnVuYyA9IHByb3Auc3BsaXQoXCJvblwiKVsxXVxuXHRcdFx0XHRpc0Z1bmMgPSB0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdGlmIGhhc0Z1bmMgJiYgaXNGdW5jICYmIEV2ZW50c1toYXNGdW5jXVxuXHRcdFx0XHRcdGRvICh2YWx1ZSkgLT5cblx0XHRcdFx0XHRcdGNoaWxkLm9uIEV2ZW50c1toYXNGdW5jXSwgLT5cblx0XHRcdFx0XHRcdFx0dmFsdWUoKVxuXG5cdFx0QGFkZERyYWdnYWJsZShAb3B0aW9ucylcblxuXHRkZWxldGU6IC0+XG5cdFx0QGRlc3Ryb3koKVxuXHRyZW1vdmU6IC0+XG5cdFx0QGRlc3Ryb3koKSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEQUEsSUFBQTs7O0FBQUEsS0FBSyxDQUFBLFNBQUUsQ0FBQSxZQUFQLEdBQXNCLFNBQUMsT0FBRDtBQUNyQixNQUFBO0VBRHNCLElBQUMsQ0FBQSxVQUFEO0VBQ3RCLElBQUcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFaO0lBQ0MsSUFBQyxDQUFBLFNBQVMsQ0FBQyxPQUFYLEdBQXdCLElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQW5CLEtBQThCLE1BQWpDLEdBQWdELElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQW5FLEdBQWdGO0FBRXJHO0FBQUE7U0FBQSxVQUFBOzttQkFDQyxJQUFDLENBQUEsU0FBVSxDQUFBLEdBQUEsQ0FBWCxHQUFrQjtBQURuQjttQkFIRDs7QUFEcUI7O0FBT2hCLE9BQU8sQ0FBQzs7O0VBQ0EsZUFBQyxPQUFEO0FBRVosUUFBQTtJQUZhLElBQUMsQ0FBQSw0QkFBRCxVQUFTO0lBRXRCLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBQyxDQUFBLE9BQVosRUFDQztNQUFBLGVBQUEsRUFBaUIsSUFBakI7TUFDQSxJQUFBLEVBQU0sTUFBTSxDQUFDLElBRGI7S0FERDtJQUlBLHVDQUFNLElBQUMsQ0FBQSxPQUFQO0FBRUE7QUFBQSxTQUFBLFlBQUE7O01BQ0MsSUFBRyxLQUFLLENBQUMsSUFBVDtRQUNDLElBQUEsR0FBTyxJQUFBLENBQUssS0FBSyxDQUFDLElBQVg7UUFDUCxLQUFBLEdBQVEsSUFBSSxLQUZiO09BQUEsTUFBQTtRQUlDLEtBQUEsR0FBUSxJQUFJLE1BSmI7O01BTUEsSUFBRyxLQUFLLENBQUMsV0FBVDtRQUNDLEtBQUssQ0FBQyxNQUFOLEdBQWUsSUFBQyxDQUFBLFdBQUQsQ0FBYSxLQUFLLENBQUMsV0FBbkIsRUFEaEI7T0FBQSxNQUFBO1FBR0MsS0FBSyxDQUFDLE1BQU4sR0FBZSxLQUhoQjs7TUFLQSxLQUFLLENBQUMsS0FBTixHQUFjO01BQ2QsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsS0FBbkI7TUFDQSxLQUFLLENBQUMsSUFBTixHQUFhO01BQ2IsSUFBRSxDQUFBLEtBQUEsQ0FBRixHQUFXO0FBRVgsV0FBQSxhQUFBOztRQUNDLE9BQUEsR0FBVSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsQ0FBaUIsQ0FBQSxDQUFBO1FBQzNCLE1BQUEsR0FBUyxPQUFPLEtBQVAsS0FBZ0I7UUFDekIsSUFBRyxPQUFBLElBQVcsTUFBWCxJQUFxQixNQUFPLENBQUEsT0FBQSxDQUEvQjtVQUNJLENBQUEsU0FBQyxLQUFEO21CQUNGLEtBQUssQ0FBQyxFQUFOLENBQVMsTUFBTyxDQUFBLE9BQUEsQ0FBaEIsRUFBMEIsU0FBQTtxQkFDekIsS0FBQSxDQUFBO1lBRHlCLENBQTFCO1VBREUsQ0FBQSxDQUFILENBQUksS0FBSixFQUREOztBQUhEO0FBakJEO0lBeUJBLElBQUMsQ0FBQSxZQUFELENBQWMsSUFBQyxDQUFBLE9BQWY7RUFqQ1k7O21CQW1DYixRQUFBLEdBQVEsU0FBQTtXQUNQLElBQUMsQ0FBQSxPQUFELENBQUE7RUFETzs7a0JBRVIsTUFBQSxHQUFRLFNBQUE7V0FDUCxJQUFDLENBQUEsT0FBRCxDQUFBO0VBRE87Ozs7R0F0Q21COzs7O0FESDVCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAifQ==
