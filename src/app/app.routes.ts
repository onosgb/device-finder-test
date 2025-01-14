import { Routes } from '@angular/router';
import { DevicesComponent } from './pages/devices/devices.component';
import { ConnectableComponent } from './pages/connectable/connectable.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', component: DevicesComponent },
  { path: 'connectable', component: ConnectableComponent },
  { path: 'settings', component: SettingsComponent },
];
