import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-updatemedicalcheck',
  templateUrl: './updatemedicalcheck.page.html',
  styleUrls: ['./updatemedicalcheck.page.scss'],
})
export class UpdatemedicalcheckPage implements OnInit {

  check = {
    code : '',
    patientIdentification: '',
    admit: '',
    discharge: '',
    blood: 0,
    weightP: 0,
    diagnosis: '',
  };

  medicalCheck(form) {
    console.log(form);
  }

  goSearchMedicalCheck() {
    this.router.navigate(['searchudmedicalcheck']);
  }

  constructor(
      private router: Router,
      public alertController: AlertController,
      public toastController: ToastController
  ) { }

  async updateConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure that you want to update this Medical check',
      buttons: [
        {
          text: 'Create',
          handler: () => {
            this.updateMessageConfirmation();
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

  async updateMessageConfirmation() {
    const toast = await this.toastController.create({
      message: 'Medical Check Updated.',
      duration: 2000
    });

    toast.present();
  }

  ngOnInit() {
  }

}
