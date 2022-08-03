import { Observable } from "rxjs";
import { base64Encode } from "./base64";

export const loadScript = (path: string, innerContent?: string):  Observable<any> => {
  return new Observable ((observed) => {

    const id = base64Encode(path).slice(32)
    const removedThemeStyle = document.getElementById(id);
    const successResult = {
      path,
      status: 'ok'
    };

    if (removedThemeStyle) {
      observed.next(successResult)
      return
    }
    
    const node = window.document.createElement('script') as HTMLScriptElement;
    node.type = 'text/javascript';
    node.id = id;
    if (path) {
      node.src = path || '';
    }
    if (innerContent) {
      node.innerHTML = innerContent;
    }

    window.document.body.appendChild(node);
    observed.next(successResult)
  });
}

export const loadStyle = (path: string, innerContent?: string): Observable<any> => {
  return new Observable ((observed) => {
    const id = base64Encode(path).slice(32);
    const removedThemeStyle = document.getElementById(id);
    const successResult = {
      path,
      status: 'ok'
    };

    if (removedThemeStyle) {
      observed.next(successResult)
      return
    }

    const node = window.document.createElement('link') as HTMLLinkElement;
    node.rel = 'stylesheet';
    node.id = id
    node.type = 'text/css';
    node.href = path;
    if (innerContent) {
      node.innerHTML = innerContent;
    }
    window.document.head.appendChild(node);
    observed.next(successResult)
  });
}
