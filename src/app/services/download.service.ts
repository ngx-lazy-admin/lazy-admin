import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }

  // 下载图片, 避免浏览器直接打开
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
        var blob = new Blob([resp], {type: 'application/octet-stream'});
        this.file(URL.createObjectURL(blob), filename)
      }
    })
  }

  // 下载文件
  file (url: string, filename = '') {
    const eleLink = document.createElement('a');
    eleLink.style.display = 'none';
    eleLink.target = '_blank';
    eleLink.href = url;
    if (filename) {
      eleLink.download = filename;
    }
    document.body.appendChild(eleLink);
    eleLink.click();
    setTimeout(() => {
      document.body.removeChild(eleLink);
    }, 100);
  }
}
