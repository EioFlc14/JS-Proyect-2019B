import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.page.html',
  styleUrls: ['./updatedoctor.page.scss'],
})
export class UpdatedoctorPage implements OnInit {


  doctor = {
    identification: '',
    names: '',
    lastNames: '',
    specialty: '',
    birthdate: '',
  };

  goSearchDoctor() {
    this.router.navigate(['searchuddoctor']);
  }

  updateDoctor(form) {
    console.log(form);
  }

  async updateConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure that you want to update Dr. <strong>' + this.doctor.lastNames + '</strong>',
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
      message: 'Doctor updated.',
      duration: 2000
    });

    toast.present();
  }

  constructor(
      private router: Router,
      public alertController: AlertController,
      public toastController: ToastController
  ) { }

  ngOnInit() {
  }

}
