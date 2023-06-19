import { Injectable } from "@angular/core";
import { add } from '@nx-zone-js-repro/shared/util';


@Injectable()
export class MathService {
  add(x: number, y: number): number {
    return add(x, y);
  }
}
