/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TracksService } from './tracks.service';

describe('Service: Tracks', () => {
  beforeEach(() => {
    addProviders([TracksService]);
  });

  it('should ...',
    inject([TracksService],
      (service: TracksService) => {
        expect(service).toBeTruthy();
      }));
});
