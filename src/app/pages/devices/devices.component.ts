import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss',
})
export class DevicesComponent {
  menus = [
    {
      name: 'Devices',
      icon: 'bi-phone-fill',
      link: '/',
    },
    {
      name: 'Member',
      icon: 'bi-people',
      link: '/member',
    },
    {
      name: 'Inbox',
      icon: 'bi-chat-square',
      link: '/inbox',
    },
    {
      name: 'Me',
      icon: 'bi-emoji-smile',
      link: '/me',
    },
  ];
}
