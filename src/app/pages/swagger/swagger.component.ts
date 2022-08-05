
import { AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import { combineLatest  } from 'rxjs';
import { loadScript, loadStyle } from 'src/app/utils/script';

declare global {
  interface Window {
    SwaggerUIBundle: any,
    ui: any
  }
}

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styleUrls: ['./swagger.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwaggerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const scriptUrl = 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js'
    const styleUrl = 'https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css'
    const JSONUrl = 'https://petstore3.swagger.io/api/v3/openapi.json'

    combineLatest([
      loadScript(scriptUrl),
      loadStyle(styleUrl)
    ]).subscribe(val => {
      window.ui = window.SwaggerUIBundle({
        url: JSONUrl,
        dom_id: '#swagger-ui',
      });
    });
  }
}
