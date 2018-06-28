import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// 解决ngFor报错
import { CommonModule } from '@angular/common';


import { PaymentComponent } from './payment/payment';
import { FundinfoComponent } from './fundinfo/fundinfo';

@NgModule({
    declarations: [
        FundinfoComponent,
        PaymentComponent
    ],
    imports: [
      //  IonicModule, 假如你的自定义组件中包含表单元素，还需要引入  FormsModule, ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        FundinfoComponent,
        PaymentComponent
    ]
})
export class ComponentsModule { }
