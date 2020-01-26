import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-addmedicalcheck',
    templateUrl: './addmedicalcheck.page.html',
    styleUrls: ['./addmedicalcheck.page.scss'],
})
export class AddmedicalcheckPage implements OnInit {

    myControl = new FormControl();
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;

    check = {
        code : '',
        patientIdentification: '',
        admit: '',
        discharge: '',
        blood: 0,
        weightP: 0,
        diagnosis: '',
    };



    goPrincipal() {
        this.router.navigate(['principal']);
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
        );
    }

    addMedicalCheck(form) {
        console.log(form);
    }

    constructor(
        private router: Router,
        public alertController: AlertController,
        public toastController: ToastController
    ) { }

    async addConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirmation',
            message: 'Are you sure that you want to create this medical check',
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
            message: 'Medical Check Created.',
            duration: 2000
        });

        toast.present();
    }

    correctWeight(): boolean {
        if (Number(this.check.weightP) >= 0) {
            console.log('aaaaa');
            return true;
        } else {
            console.log('bbbb');
            return false;
        }
    }
}
