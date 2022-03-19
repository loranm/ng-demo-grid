import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlockGeneratorService {
  generate(blocks = 10): number[] {
    return Array(blocks);
  }
}
