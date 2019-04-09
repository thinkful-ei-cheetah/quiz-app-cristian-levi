'use strict';
// eslint-disable-next-line no-unused-vars
const Renderer = function(){
  const renderers = [];

  class Renderer {
    constructor(model, el) {
      this.model = model;
      this.model.bindView(this);
      this.$el = $(el);

      if (this.getEvents) {
        const events = this.getEvents();
        const eventKeys = Object.keys(events);

        eventKeys.forEach(eventString => {
          const [ eventName, selector ] = eventString.split(' ');
          const fn = this[events[eventString]];
          this.$el.on(eventName, selector, fn.bind(this));
        }); 
      }
      
      renderers.push(this);
      this.render();
    } 

    renderAll() {
      renderers.forEach(renderer => renderer.render());
    }

    render() {
      this.$el.html(this.template());
    }
  }

  return Renderer;
}();
