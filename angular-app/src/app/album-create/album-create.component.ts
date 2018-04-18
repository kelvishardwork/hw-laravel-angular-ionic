import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {
  name = '';
  baseUrl = 'http://localhost:8000/api/albums';

  constructor(private  http: HttpClient, private router: Router) {
  }

  ngOnInit() {

  }

  create() {
    this.http.post(this.baseUrl, {name: this.name})
    //.subscribe(data => console.log(data));
      .subscribe(data => this.router.navigate(['albums']));
  }

}
