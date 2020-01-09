import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatemedicalcheck',
  templateUrl: './updatemedicalcheck.page.html',
  styleUrls: ['./updatemedicalcheck.page.scss'],
})
export class UpdatemedicalcheckPage implements OnInit {

  goSearchMedicalCheck() {
    this.router.navigate(['searchudmedicalcheck']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
