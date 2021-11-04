import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../../services/download.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(
    private download: DownloadService
  ) { }

  ngOnInit(): void {
  }

  donwloadFile (url: string) {
    this.download.file(url)
  }

  donwloadImage (url: string) {
    this.download.image(url)
  }

}
