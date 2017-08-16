import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BaseComponent } from '../../core/base-component/base-component.component'



@Component({
  selector: 'app-consent-modal',
  templateUrl: './consent-modal.component.html',
  styleUrls: ['./consent-modal.component.scss']
})
export class ConsentModalComponent extends BaseComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    super();
   }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    console.log('openModal called');
    this.bsModalRef = this.modalService.show(ModalContentComponent);
  }

}



@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Lorem ipsum dolor sit amet, graece graeci constituto mei ei. Dicunt electram splendide cum et, quod eros dissentias nec ut, sit eu reque hendrerit. Lobortis facilisis ea pro, cum te accusata vulputate referrentur. Ea tacimates consequuntur sit. Oporteat expetenda intellegam vis id, tamquam eloquentiam sea te. Usu simul habemus honestatis ex, nam veritus insolens eu.</p>
      <p>Ius omnis tacimates intellegat eu, vel quod aperiri salutandi ei. Has eripuit equidem splendide ad. Ei ius delectus singulis. Nisl facer mucius ius ad, no dictas pertinacia sea. Albucius volutpat adversarium id mel, qualisque salutatus ut sit, tantas euripidis scribentur mea ad.</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>

      <button [disabled]="!agreeCheck" class="btn btn-block btn-primary pull-left" type="submit" (click)="continue()">Continue</button>
    </div>
  `
})
export class ModalContentComponent {
  public title: string;
  public list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}
}
