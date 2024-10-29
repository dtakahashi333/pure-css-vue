export default class MenuItem {
  constructor(title, link, useVueRouter = false) {
    this._title = title;
    this._link = link;
    this._useVueRouter = useVueRouter;
  }

  get title() {
    return this._title;
  }

  get link() {
    return this._link;
  }

  get useVueRouter() {
    return this._useVueRouter;
  }
}
