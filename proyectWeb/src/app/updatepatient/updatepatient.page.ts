import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.page.html',
  styleUrls: ['./updatepatient.page.scss'],
})

export class UpdatepatientPage implements OnInit {

  goSearchPatient() {
    this.router.navigate(['searchudpatient']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
