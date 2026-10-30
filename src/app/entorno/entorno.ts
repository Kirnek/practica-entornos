import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  template: '<section class="entorno" [style.border-top-color]="color"><h1>Práctica Entornos</h1><p class="bienvenida">Bienvenido a la aplicación de gestión de entornos.</p><span class="etiqueta" [style.background-color]="color">{{ etiqueta }}</span><p class="mensaje">{{ mensaje }}</p></section>',
  styles: [`
    .entorno { width: 100%; max-width: 560px; background: #ffffff; border-radius: 14px; border-top: 10px solid; padding: 32px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); text-align: center; }
    h1 { margin: 0 0 8px; font-size: 2rem; }
    .bienvenida { margin: 0 0 24px; color: #4b5563; }
    .etiqueta { display: inline-block; padding: 6px 14px; border-radius: 999px; color: #ffffff; font-weight: 700; letter-spacing: 1px; }
    .mensaje { margin: 16px 0 0; font-size: 1.25rem; font-weight: 600; }
  `]
})
export class EntornoComponent {
  readonly etiqueta = 'QA';
  readonly mensaje = 'Entorno de pruebas QA';
  readonly color = '#ea580c';
}
