import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient
  ) { }

  // 下载文件, 浏览器能直接预览的使用blob, 浏览器无法预览的直接下载
  downloadFileByBlob (url: string, filename: string = '') {
    this.http.get(url, {
      responseType: "blob",
    }).subscribe(resp=>{

      const ContentType = resp?.type
      if (ContentType && !filename.substring(0, filename.lastIndexOf("."))) {
        const type = ContentType.split('/')[1];
        filename = filename + '.' + type
      }

      var blob = new Blob([resp], { type: 'application/octet-stream' });
      const BlobURL = URL.createObjectURL(blob);
      this.downloadFileByUrl(BlobURL, filename)
    })
  }

  // 下载文件
  downloadFileByUrl (url: string, filename: string = '') {
    const eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    eleLink.href = url;
    eleLink.target = '_blank';
    document.body.appendChild(eleLink);
    eleLink.click();
    setTimeout(() => {
      document.body.removeChild(eleLink);
    }, 0);
  }

  // 下载文件
  downloadFile (url: string, filename: string = '') {
    // 待补充
    const mediaTypeArr = [
      // 图片
      '.png', '.bmp', 'gif', 'jpg', 'jpeg',

      // 视频
      '.avi', '.mov', '.mpv', '.wmv',

      // 音频
      '.txt', '.png', '.doc', '.xml'
    ]

    if (mediaTypeArr.some(str => filename.endsWith(str))) {
      this.downloadFileByBlob(url, filename)
    } else {
      this.downloadFileByBlob(url, filename)
    }
  }
}
