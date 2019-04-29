import { Component, OnInit } from '@angular/core';
import { UrlService } from '../services/url.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss']
})
export class ShortenUrlComponent implements OnInit {
  resultData: any;
  constructor(private urlService: UrlService) {}

  ngOnInit() {}

  onShorten(form: NgForm) {
    this.urlService.shortenUrl(form.value).subscribe(result => {
      this.resultData = result;
    });
  }
}
