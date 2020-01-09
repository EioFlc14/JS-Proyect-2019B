import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.page.html',
  styleUrls: ['./addpatient.page.scss'],
})
export class AddpatientPage implements OnInit {

  goPrincipal() {
    this.router.navigate(['principal']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
