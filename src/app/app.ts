import { Component } from '@angular/core';
import { EntornoComponent } from './entorno/entorno';

@Component({
  selector: 'app-root',
  imports: [EntornoComponent],
  template: '<main><app-entorno /></main>',
  styles: [`main { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 16px; }`]
})
export class App {}
