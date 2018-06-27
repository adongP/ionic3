import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

// 解决ngFor报错
import { BrowserModule } from '@angular/platform-browser';


import { PaymentComponent } from './payment/payment';
import { FundinfoComponent } from './fundinfo/fundinfo';

@NgModule({
    declarations: [
        FundinfoComponent,
        PaymentComponent
    ],
    imports: [
        IonicModule,
        BrowserModule
    ],
    exports: [
        FundinfoComponent,
        PaymentComponent
    ]
})
export class ComponentsModule { }
