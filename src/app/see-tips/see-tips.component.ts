import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }  from '@angular/router';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-see-tips',
  templateUrl: './see-tips.component.html',
  styleUrls: ['./see-tips.component.css']
})
export class SeeTipsComponent implements OnInit {

  constructor(private router: Router,
    private sessionStorage: SessionStorageService) { }

  ngOnInit() {

    let id = this.sessionStorage.retrieve('id');
  }

}
