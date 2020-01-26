import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.page.html',
  styleUrls: ['./addpatient.page.scss'],
})
export class AddpatientPage implements OnInit {

  patient = {
    identification: '',
    names: '',
    lastnames: '',
    birthdate: '',
    allergies: '',
    medicalRecord: '',
  };

  goPrincipal() {
    this.router.navigate(['principal']);
  }

  addPatient(form) {
    console.log(form);
  }

  constructor(
      private router: Router,
      public alertController: AlertController,
      public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async addConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure that you want to create this patient',
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
      message: 'Patient Created.',
      duration: 2000
    });

    toast.present();
  }

}
