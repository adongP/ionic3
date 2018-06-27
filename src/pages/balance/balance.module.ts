import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BalancePage } from './balance';

import { BalanceInfoPage } from '../../pages/balance-info/balance-info'

@NgModule({
  declarations: [
    BalancePage,
    BalanceInfoPage
  ],
  imports: [
    IonicPageModule.forChild(BalancePage),
  ],
  entryComponents: [ //不会在模板中使用的模块
    BalancePage,
  ],
  providers: [
    BalancePage
  ],
  exports: [
    BalancePage
  ]

})
export class BalancePageModule { }
