import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.page.html',
  styleUrls: ['./adddoctor.page.scss'],
})
export class AdddoctorPage implements OnInit {

  doctor = {
    identification: '',
    names: '',
    lastNames: '',
    specialty: '',
    birthdate: '',
  };

  goPrincipal() {
    this.router.navigate(['principal']);

  }

  constructor(
      private router: Router,
      public alertController: AlertController,
      public toastController: ToastController
  ) { }

  addDoctor(form) {
    console.log(form);
  }

  async addConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure that you want to create this doctor',
      buttons: [
        {
          text: 'Create',
          handler: () => {
            this.addMessageConfirmation();
          }
        }, {
          text: 'Cancel',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  async addMessageConfirmation() {
    const toast = await this.toastController.create({
      message: 'Doctor created.',
      duration: 2000
    });

    toast.present();
  }

  ngOnInit() {
  }

}
