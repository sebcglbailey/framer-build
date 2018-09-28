require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"build":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Layer.prototype.addDraggable = function(options) {
  var key, ref, results, value;
  this.options = options;
  if (!this.options.draggable) {
    return;
  }
  this.draggable.enabled = this.options.draggable.enabled !== void 0 ? this.options.draggable.enabled : true;
  ref = this.options.draggable;
  results = [];
  for (key in ref) {
    value = ref[key];
    results.push(this.draggable[key] = value);
  }
  return results;
};

Layer.prototype.addAnimations = function(options) {
  this.options = options;
  if (!(this.options.animateIn || this.options.animateOut)) {
    return;
  }
  if (this.options.animateIn) {
    this.props = this.options.animateIn.start;
    return this.animate(Object.assign(this.options.animateIn.end, {
      options: this.options.animateIn.options
    }));
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
      child.addAnimations(props);
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
    this.addAnimations(this.options);
  }

  Build.prototype.animateLeave = function() {
    this.animate(Object.assign(this.options.animateOut.end, {
      options: this.options.animateOut.options
    }));
    return this.onAnimationEnd(function() {
      return this.destroy();
    });
  };

  Build.prototype["delete"] = function(sudden) {
    if ((sudden != null) || !this.options.animateOut) {
      return this.destroy();
    } else if (this.options.animateOut) {
      return this.animateLeave();
    } else {
      return this.destroy();
    }
  };

  Build.prototype.remove = function(sudden) {
    if ((sudden != null) || !this.options.animateOut) {
      return this.destroy();
    } else if (this.options.animateOut) {
      return this.animateLeave();
    } else {
      return this.destroy();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NlYmFzdGlhbmJhaWxleS9Eb2N1bWVudHMvQ2xlYXJTY29yZS9Sb2d1ZSBPbmUvR2l0SHViL2ZyYW1lci1idWlsZC9idWlsZC10ZXN0LmZyYW1lci9tb2R1bGVzL215TW9kdWxlLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3NlYmFzdGlhbmJhaWxleS9Eb2N1bWVudHMvQ2xlYXJTY29yZS9Sb2d1ZSBPbmUvR2l0SHViL2ZyYW1lci1idWlsZC9idWlsZC10ZXN0LmZyYW1lci9tb2R1bGVzL2J1aWxkLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIkxheWVyOjphZGREcmFnZ2FibGUgPSAoQG9wdGlvbnMpIC0+XG5cdHVubGVzcyBAb3B0aW9ucy5kcmFnZ2FibGUgdGhlbiByZXR1cm5cblxuXHRAZHJhZ2dhYmxlLmVuYWJsZWQgPSBpZiBAb3B0aW9ucy5kcmFnZ2FibGUuZW5hYmxlZCAhPSB1bmRlZmluZWQgdGhlbiBAb3B0aW9ucy5kcmFnZ2FibGUuZW5hYmxlZCBlbHNlIHRydWVcblxuXHRmb3Iga2V5LCB2YWx1ZSBvZiBAb3B0aW9ucy5kcmFnZ2FibGVcblx0XHRAZHJhZ2dhYmxlW2tleV0gPSB2YWx1ZVxuXG5MYXllcjo6YWRkQW5pbWF0aW9ucyA9IChAb3B0aW9ucykgLT5cblx0dW5sZXNzIEBvcHRpb25zLmFuaW1hdGVJbiB8fCBAb3B0aW9ucy5hbmltYXRlT3V0IHRoZW4gcmV0dXJuXG5cblx0aWYgQG9wdGlvbnMuYW5pbWF0ZUluXG5cdFx0QHByb3BzID0gQG9wdGlvbnMuYW5pbWF0ZUluLnN0YXJ0XG5cdFx0QGFuaW1hdGUgT2JqZWN0LmFzc2lnbiBAb3B0aW9ucy5hbmltYXRlSW4uZW5kLCB7b3B0aW9uczogQG9wdGlvbnMuYW5pbWF0ZUluLm9wdGlvbnN9XG5cbmNsYXNzIGV4cG9ydHMuQnVpbGQgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0Xy5kZWZhdWx0cyBAb3B0aW9ucyxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0c2l6ZTogU2NyZWVuLnNpemVcblx0XHRcblx0XHRzdXBlciBAb3B0aW9uc1xuXG5cdFx0Zm9yIGxheWVyLCBwcm9wcyBvZiBAb3B0aW9ucy5jaGlsZHJlblxuXHRcdFx0aWYgcHJvcHMudHlwZVxuXHRcdFx0XHR0eXBlID0gZXZhbCBwcm9wcy50eXBlXG5cdFx0XHRcdGNoaWxkID0gbmV3IHR5cGVcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y2hpbGQgPSBuZXcgTGF5ZXJcblxuXHRcdFx0aWYgcHJvcHMucGFyZW50TGF5ZXJcblx0XHRcdFx0Y2hpbGQucGFyZW50ID0gQHNlbGVjdENoaWxkIHByb3BzLnBhcmVudExheWVyXG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNoaWxkLnBhcmVudCA9IEBcblxuXHRcdFx0Y2hpbGQucHJvcHMgPSBwcm9wc1xuXHRcdFx0Y2hpbGQuYWRkRHJhZ2dhYmxlKHByb3BzKVxuXHRcdFx0Y2hpbGQuYWRkQW5pbWF0aW9ucyhwcm9wcylcblx0XHRcdGNoaWxkLm5hbWUgPSBsYXllclxuXHRcdFx0QFtsYXllcl0gPSBjaGlsZFxuXG5cdFx0XHRmb3IgcHJvcCwgdmFsdWUgb2YgcHJvcHNcblx0XHRcdFx0aGFzRnVuYyA9IHByb3Auc3BsaXQoXCJvblwiKVsxXVxuXHRcdFx0XHRpc0Z1bmMgPSB0eXBlb2YgdmFsdWUgPT0gXCJmdW5jdGlvblwiXG5cdFx0XHRcdGlmIGhhc0Z1bmMgJiYgaXNGdW5jICYmIEV2ZW50c1toYXNGdW5jXVxuXHRcdFx0XHRcdGRvICh2YWx1ZSkgLT5cblx0XHRcdFx0XHRcdGNoaWxkLm9uIEV2ZW50c1toYXNGdW5jXSwgLT5cblx0XHRcdFx0XHRcdFx0dmFsdWUoKVxuXG5cdFx0QGFkZERyYWdnYWJsZShAb3B0aW9ucylcblx0XHRAYWRkQW5pbWF0aW9ucyhAb3B0aW9ucylcblxuXHRhbmltYXRlTGVhdmU6IC0+XG5cdFx0QGFuaW1hdGUgT2JqZWN0LmFzc2lnbiBAb3B0aW9ucy5hbmltYXRlT3V0LmVuZCwge29wdGlvbnM6IEBvcHRpb25zLmFuaW1hdGVPdXQub3B0aW9uc31cblx0XHRAb25BbmltYXRpb25FbmQgLT5cblx0XHRcdEBkZXN0cm95KClcblxuXHRkZWxldGU6IChzdWRkZW4pIC0+XG5cdFx0aWYgc3VkZGVuPyB8fCAhQG9wdGlvbnMuYW5pbWF0ZU91dCB0aGVuIEBkZXN0cm95KClcblx0XHRlbHNlIGlmIEBvcHRpb25zLmFuaW1hdGVPdXQgdGhlbiBAYW5pbWF0ZUxlYXZlKClcblx0XHRlbHNlIEBkZXN0cm95KClcblx0cmVtb3ZlOiAoc3VkZGVuKSAtPlxuXHRcdGlmIHN1ZGRlbj8gfHwgIUBvcHRpb25zLmFuaW1hdGVPdXQgdGhlbiBAZGVzdHJveSgpXG5cdFx0ZWxzZSBpZiBAb3B0aW9ucy5hbmltYXRlT3V0IHRoZW4gQGFuaW1hdGVMZWF2ZSgpXG5cdFx0ZWxzZSBAZGVzdHJveSgpIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURBQSxJQUFBOzs7QUFBQSxLQUFLLENBQUEsU0FBRSxDQUFBLFlBQVAsR0FBc0IsU0FBQyxPQUFEO0FBQ3JCLE1BQUE7RUFEc0IsSUFBQyxDQUFBLFVBQUQ7RUFDdEIsSUFBQSxDQUFPLElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBaEI7QUFBK0IsV0FBL0I7O0VBRUEsSUFBQyxDQUFBLFNBQVMsQ0FBQyxPQUFYLEdBQXdCLElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQW5CLEtBQThCLE1BQWpDLEdBQWdELElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQW5FLEdBQWdGO0FBRXJHO0FBQUE7T0FBQSxVQUFBOztpQkFDQyxJQUFDLENBQUEsU0FBVSxDQUFBLEdBQUEsQ0FBWCxHQUFrQjtBQURuQjs7QUFMcUI7O0FBUXRCLEtBQUssQ0FBQSxTQUFFLENBQUEsYUFBUCxHQUF1QixTQUFDLE9BQUQ7RUFBQyxJQUFDLENBQUEsVUFBRDtFQUN2QixJQUFBLENBQUEsQ0FBTyxJQUFDLENBQUEsT0FBTyxDQUFDLFNBQVQsSUFBc0IsSUFBQyxDQUFBLE9BQU8sQ0FBQyxVQUF0QyxDQUFBO0FBQXNELFdBQXREOztFQUVBLElBQUcsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFaO0lBQ0MsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQztXQUM1QixJQUFDLENBQUEsT0FBRCxDQUFTLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBakMsRUFBc0M7TUFBQyxPQUFBLEVBQVMsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBN0I7S0FBdEMsQ0FBVCxFQUZEOztBQUhzQjs7QUFPakIsT0FBTyxDQUFDOzs7RUFDQSxlQUFDLE9BQUQ7QUFFWixRQUFBO0lBRmEsSUFBQyxDQUFBLDRCQUFELFVBQVM7SUFFdEIsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxJQUFDLENBQUEsT0FBWixFQUNDO01BQUEsZUFBQSxFQUFpQixJQUFqQjtNQUNBLElBQUEsRUFBTSxNQUFNLENBQUMsSUFEYjtLQUREO0lBSUEsdUNBQU0sSUFBQyxDQUFBLE9BQVA7QUFFQTtBQUFBLFNBQUEsWUFBQTs7TUFDQyxJQUFHLEtBQUssQ0FBQyxJQUFUO1FBQ0MsSUFBQSxHQUFPLElBQUEsQ0FBSyxLQUFLLENBQUMsSUFBWDtRQUNQLEtBQUEsR0FBUSxJQUFJLEtBRmI7T0FBQSxNQUFBO1FBSUMsS0FBQSxHQUFRLElBQUksTUFKYjs7TUFNQSxJQUFHLEtBQUssQ0FBQyxXQUFUO1FBQ0MsS0FBSyxDQUFDLE1BQU4sR0FBZSxJQUFDLENBQUEsV0FBRCxDQUFhLEtBQUssQ0FBQyxXQUFuQixFQURoQjtPQUFBLE1BQUE7UUFHQyxLQUFLLENBQUMsTUFBTixHQUFlLEtBSGhCOztNQUtBLEtBQUssQ0FBQyxLQUFOLEdBQWM7TUFDZCxLQUFLLENBQUMsWUFBTixDQUFtQixLQUFuQjtNQUNBLEtBQUssQ0FBQyxhQUFOLENBQW9CLEtBQXBCO01BQ0EsS0FBSyxDQUFDLElBQU4sR0FBYTtNQUNiLElBQUUsQ0FBQSxLQUFBLENBQUYsR0FBVztBQUVYLFdBQUEsYUFBQTs7UUFDQyxPQUFBLEdBQVUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFYLENBQWlCLENBQUEsQ0FBQTtRQUMzQixNQUFBLEdBQVMsT0FBTyxLQUFQLEtBQWdCO1FBQ3pCLElBQUcsT0FBQSxJQUFXLE1BQVgsSUFBcUIsTUFBTyxDQUFBLE9BQUEsQ0FBL0I7VUFDSSxDQUFBLFNBQUMsS0FBRDttQkFDRixLQUFLLENBQUMsRUFBTixDQUFTLE1BQU8sQ0FBQSxPQUFBLENBQWhCLEVBQTBCLFNBQUE7cUJBQ3pCLEtBQUEsQ0FBQTtZQUR5QixDQUExQjtVQURFLENBQUEsQ0FBSCxDQUFJLEtBQUosRUFERDs7QUFIRDtBQWxCRDtJQTBCQSxJQUFDLENBQUEsWUFBRCxDQUFjLElBQUMsQ0FBQSxPQUFmO0lBQ0EsSUFBQyxDQUFBLGFBQUQsQ0FBZSxJQUFDLENBQUEsT0FBaEI7RUFuQ1k7O2tCQXFDYixZQUFBLEdBQWMsU0FBQTtJQUNiLElBQUMsQ0FBQSxPQUFELENBQVMsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFDLENBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFsQyxFQUF1QztNQUFDLE9BQUEsRUFBUyxJQUFDLENBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUE5QjtLQUF2QyxDQUFUO1dBQ0EsSUFBQyxDQUFBLGNBQUQsQ0FBZ0IsU0FBQTthQUNmLElBQUMsQ0FBQSxPQUFELENBQUE7SUFEZSxDQUFoQjtFQUZhOzttQkFLZCxRQUFBLEdBQVEsU0FBQyxNQUFEO0lBQ1AsSUFBRyxnQkFBQSxJQUFXLENBQUMsSUFBQyxDQUFBLE9BQU8sQ0FBQyxVQUF4QjthQUF3QyxJQUFDLENBQUEsT0FBRCxDQUFBLEVBQXhDO0tBQUEsTUFDSyxJQUFHLElBQUMsQ0FBQSxPQUFPLENBQUMsVUFBWjthQUE0QixJQUFDLENBQUEsWUFBRCxDQUFBLEVBQTVCO0tBQUEsTUFBQTthQUNBLElBQUMsQ0FBQSxPQUFELENBQUEsRUFEQTs7RUFGRTs7a0JBSVIsTUFBQSxHQUFRLFNBQUMsTUFBRDtJQUNQLElBQUcsZ0JBQUEsSUFBVyxDQUFDLElBQUMsQ0FBQSxPQUFPLENBQUMsVUFBeEI7YUFBd0MsSUFBQyxDQUFBLE9BQUQsQ0FBQSxFQUF4QztLQUFBLE1BQ0ssSUFBRyxJQUFDLENBQUEsT0FBTyxDQUFDLFVBQVo7YUFBNEIsSUFBQyxDQUFBLFlBQUQsQ0FBQSxFQUE1QjtLQUFBLE1BQUE7YUFDQSxJQUFDLENBQUEsT0FBRCxDQUFBLEVBREE7O0VBRkU7Ozs7R0EvQ21COzs7O0FEWDVCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAifQ==
