import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.page.html',
  styleUrls: ['./updatedoctor.page.scss'],
})
export class UpdatedoctorPage implements OnInit {

  goSearchDoctor() {
    this.router.navigate(['searchuddoctor']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
