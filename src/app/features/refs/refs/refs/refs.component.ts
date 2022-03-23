import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export interface Ref {
  url: string;
  description: string;
  author: string;
  label: string;
}
@Component({
  templateUrl: './refs.component.html',
  styleUrls: ['./refs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefsComponent {
  title = '🧇 Conseils, références, tuto, recettes de gauffres 🧇';
  refs: Ref[] = [
    {
      label: "CSS GRID. let's get griddy",
      url: 'https://cssgrid.io/',
      description: "Cours complet avec une multitude d'exemples",
      author: 'Wes Bos',
    },
    {
      label: 'Angular and CSS Grid: Get ready to fall in love',
      url: 'https://youtu.be/lh6n0JxXD_g',
      description:
        "NgConf - plein de bonnes idées d'implementation de Grid dans une app Angular",
      author: 'William Odom',
    },
    {
      label: 'Learn CSS the easy way',
      url: 'https://youtu.be/rg7Fvvl3taU',
      description:
        'Vidéo qui a inspiré ce petit dej. Sans rentrer trop dans les détails',
      author: 'Kevin Powell',
    },
    {
      label: 'Gauffres Liégeoises',
      url: 'https://www.marmiton.org/recettes/recette_gaufres-liegeoises_11171.aspx',
      description: 'Gaufres liégeoises - 23 min - très facile',
      author: 'Marmiton',
    },
  ];
}
