import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

const usedMatModules = [MatButtonModule, MatTabsModule, MatCardModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, usedMatModules, HighlightModule],
  exports: [usedMatModules, HighlightModule],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
        themePath: 'assets/styles/atom-one-dark.css',
      },
    },
  ],
})
export class SharedModule {}
