import { BaseInterface } from "./baseInterface.js";

export class AfterViewInit extends BaseInterface {
  constructor() {
    super();
  }

  afterViewInit() {
    this._WARNING("afterViewInit");
  }
}
