import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentApprovalPartPage } from './payment-approval-part';

@NgModule({
  declarations: [
    PaymentApprovalPartPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentApprovalPartPage),
  ],
})
export class PaymentApprovalPartPageModule {}
