import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-searchudmedicalcheck',
  templateUrl: './searchudmedicalcheck.page.html',
  styleUrls: ['./searchudmedicalcheck.page.scss'],
})
export class SearchudmedicalcheckPage implements OnInit {

  constructor(private router: Router,
              public alertController: AlertController,
              public toastController: ToastController
  ) { }

  modificarEstaFuncion() {
    console.log('varios pacientes');
  }

  goUpdateMedicalCheck() {
    this.router.navigate(['updatemedicalcheck']);
  }

  async removeConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure that you want to remove <strong>EDISON SANANGO</strong>',
      buttons: [
        {
          text: 'Remove',
          handler: () => {
            this.removeMessageConfirmation();
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

  async removeMessageConfirmation() {
    const toast = await this.toastController.create({
      message: 'Medical Check removed.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
