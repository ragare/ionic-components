import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCttl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCttl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Rafa',
        pais: 'España'
      }
    });

    await modal.present();
  }

}
