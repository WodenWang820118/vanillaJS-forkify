export class BaseInterface {
  constructor() {}
  _WARNING(fname = "unknown method") {
    console.warn(`${fname} is not implemented`);
  }
}
