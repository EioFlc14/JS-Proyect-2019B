import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router: Router) { }

  goAddDoctor() {
    this.router.navigate(['adddoctor']);
  }

  goSearchDoctor() {
    this.router.navigate(['searchuddoctor']);
  }

  goAddPatient() {
    this.router.navigate(['addpatient']);
  }

  goSearchPatient() {
    this.router.navigate(['searchudpatient']);
  }

  goAddMedicalCheck() {
    this.router.navigate(['addmedicalcheck']);
  }


  ngOnInit() {
  }

}
