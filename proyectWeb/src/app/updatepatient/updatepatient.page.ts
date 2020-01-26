import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.page.html',
  styleUrls: ['./updatepatient.page.scss'],
})

export class UpdatepatientPage implements OnInit {

  patient = {
    identification: '',
    names: '',
    lastnames: '',
    birthdate: '',
    allergies: '',
    medicalRecord: '',
  };

  updatePatient(form) {
    console.log(form);
  }

  goSearchPatient() {
    this.router.navigate(['searchudpatient']);
  }

  constructor(
      private router: Router,
      public alertController: AlertController,
      public toastController: ToastController
  ) { }

  async updateConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure that you want to update patient <strong>' + this.patient.lastnames + '</strong>',
      buttons: [
        {
          text: 'Update',
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
      message: 'Patient Updated.',
      duration: 2000
    });

    toast.present();
  }

  ngOnInit() {
  }

}
