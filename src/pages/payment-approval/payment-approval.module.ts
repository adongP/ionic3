import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentApprovalPage } from './payment-approval';


//  components模块 组件
// import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PaymentApprovalPage
  ],
  imports: [
    // ComponentsModule,
    IonicPageModule.forChild(PaymentApprovalPage),
  ],
  exports: [
    PaymentApprovalPage,

  ]
  // ,entryComponents: [
  //   PaymentApprovalPage
  // ]
})
export class PaymentApprovalPageModule { }
