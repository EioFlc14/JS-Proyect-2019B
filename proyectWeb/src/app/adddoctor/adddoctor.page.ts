import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.page.html',
  styleUrls: ['./adddoctor.page.scss'],
})
export class AdddoctorPage implements OnInit {

  goPrincipal() {
    this.router.navigate(['principal']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
