import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo = 'Alert Page';

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      },
      {
        text: 'OK',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
        }
      }]
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertCtrl.create({
      header: 'Introduzca su nombre',
      inputs: [{
        name: 'nombre',
        type: 'text',
        placeholder: 'Su nombre...'
      }],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: ({ nombre }) => {
            console.log('Confirm Ok', nombre);
            this.titulo = nombre;
          }
        }
      ]
    });
    await alert.present();
  }


}
