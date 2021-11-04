import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }

  image (url: string, filename = '') {
    
    this.http.get(url, {
      responseType: "blob",
    }).subscribe(resp => {

      const ContentType = resp?.type

      if (ContentType && !filename.substring(0, filename.lastIndexOf("."))) {
        const type = ContentType.split('/')[1];
        filename = filename + '.' + type
      }

      if (resp) {
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.target = '_blank';
        eleLink.style.display = 'none';

        var blob = new Blob([resp], {type: 'application/octet-stream'});

        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        setTimeout(() => {
          document.body.removeChild(eleLink);
        }, 100);
      }
    })
  }

  file (url: string, filename = '') {
    const eleLink = document.createElement('a');
    filename ? eleLink.download = filename : null
    eleLink.style.display = 'none';
    eleLink.href = url;
    eleLink.target = '_blank';
    document.body.appendChild(eleLink);
    eleLink.click();
    setTimeout(() => {
      document.body.removeChild(eleLink);
    }, 100);
  }
}
