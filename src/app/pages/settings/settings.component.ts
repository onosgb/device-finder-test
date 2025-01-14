import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  settings = [
    {
      title: 'App Usage Problem',
      img: '/app-usage.png',
    },
    {
      title: 'Features',
      img: '/features.png',
    },
    {
      title: 'Lock Installation',
      img: '/lock.png',
    },
    {
      title: 'Normal Trouble shooting',
      img: '/warning.png',
      description: 'Enable or disable notifications',
    },
  ];
}
