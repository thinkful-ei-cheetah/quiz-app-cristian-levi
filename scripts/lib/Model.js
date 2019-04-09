'use strict';
class Model {       //eslint-disable-line no-unused-vars
  constructor() {
    if (!Model.viewMap) Model.viewMap = new WeakMap();
    Model.viewMap.set(this, []);
  }

  bindView(view) {
    const views = Model.viewMap.get(this);
    views.push(view);
  }

  update() {
    const views = Model.viewMap.get(this);
    if (!views || views.length === 0) return;

    views.forEach(view => view.render());
  }
}