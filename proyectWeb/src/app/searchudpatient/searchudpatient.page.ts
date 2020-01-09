import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-searchudpatient',
  templateUrl: './searchudpatient.page.html',
  styleUrls: ['./searchudpatient.page.scss'],
})
export class SearchudpatientPage implements OnInit {

  constructor(private router: Router,
              public alertController: AlertController,
              public toastController: ToastController
  ) { }

  goPrincipal() {
    this.router.navigate(['principal']);
  }

  modificarEstaFuncion() {
    console.log('varios pacientes');
  }

  goUpdatePatient() {
    this.router.navigate(['updatepatient']);
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
      message: 'Patient removed.',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
