import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-connectable',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './connectable.component.html',
  styleUrl: './connectable.component.scss',
})
export class ConnectableComponent {
  menus = [
    {
      name: 'Away Mode',
      icon: 'bi-house-door',
      link: '/away-mode',
    },
    {
      name: 'Activities',
      icon: 'bi-bell',
      link: '/activities',
    },
    {
      name: 'Share',
      icon: 'bi-share',
      link: '/share',
    },
    {
      name: 'Settings',
      icon: 'bi-gear',
      link: '/settings',
    },
  ];
}
