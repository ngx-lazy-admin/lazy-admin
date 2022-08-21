import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FullScreenService {

  isFullscreen: boolean = false;

  request (element?: Element) {
    return new Observable ((observed: any) => {
      if (!this.isFullscreen)  {
        if (element) {
          element.requestFullscreen()
        } else {
          document.body.requestFullscreen()
        }
        this.isFullscreen = true
      }
    })
  }

  exit () {
    return new Observable ((observed: any) => {
      if (this.isFullscreen) {
        document.exitFullscreen()
        this.isFullscreen = false
      }
    })
  }

  toggle(element?: Element) {
    return this.isFullscreen ? this.exit() : this.request(element);
  }
}
