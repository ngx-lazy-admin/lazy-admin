import { Observable } from "rxjs";
import { SafeAny } from "../services/api/apis.type";

// 加载JavaScript
export const loadScript = (path?: string, innerContent?: string):  Observable<any> => {
  return new Observable ((observed) => {
    const node = window.document.createElement('script') as HTMLScriptElement;
    node.type = 'text/javascript';
    if (path) {
      node.src = path || '';
    }
    if (innerContent) {
      node.innerHTML = innerContent;
    }

    window.document.getElementsByTagName('body')[0].appendChild(node);
    console.log(innerContent)
    const item = {
      path,
      status: 'ok'
    };
    observed.next(item)
  });
}

// 加载JavaScript
export const loadStyle = (path: string, rel: string = 'stylesheet', innerContent?: string): Observable<any> => {
  return new Observable ((observed) => {
    const node = window.document.createElement('link') as HTMLLinkElement;
    node.rel = rel;
    node.type = 'text/css';
    node.href = path;
    if (innerContent) {
      node.innerHTML = innerContent;
    }
    window.document.getElementsByTagName('head')[0].appendChild(node);
    const item = {
      path,
      status: 'ok'
    };
    observed.next(item)
  });
}