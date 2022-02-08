import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CoreComponent } from '@core/components/core/core.component';
import { FeaturesModule } from '@features/features.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { NavBarModule } from '@commons/nav-bar/nav-bar.component';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'disabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
    HighlightModule,
    FeaturesModule,
    BrowserAnimationsModule,
    SharedModule,
    NavBarModule,
  ],
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
  bootstrap: [CoreComponent],
})
export class CoreModule {}
