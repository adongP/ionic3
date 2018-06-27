import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalanceInfoPage } from './balance-info';

@NgModule({
  declarations: [
    BalanceInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(BalanceInfoPage),
  ],
  entryComponents: [ //不会在模板中使用的模块
    BalanceInfoPage
  ],
  providers: [
    BalanceInfoPage
  ],
  exports: [
    BalanceInfoPage
  ]

})
export class BalanceInfoPageModule { }
