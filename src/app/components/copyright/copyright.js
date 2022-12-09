import { implement } from '../../services/utils';
import { AfterViewInit } from '../../../app/interfaces/afterViewInit';

export class Copyright extends implement(HTMLElement, [AfterViewInit]) {
  constructor() {
    super();
  }

  afterViewInit() {}
}
