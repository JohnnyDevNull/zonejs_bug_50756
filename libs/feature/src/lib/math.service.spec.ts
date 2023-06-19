import * as utils from '@nx-zone-js-repro/shared/util';
import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    service = new MathService();
  })

  it('should add default', () => {
    expect(service.add(4, 5)).toBe(9);
  })

  it('should add mock', () => {
    jest.spyOn(utils, 'add').mockImplementation(() => 42);
    expect(service.add(4, 5)).toBe(42);
  })
});
