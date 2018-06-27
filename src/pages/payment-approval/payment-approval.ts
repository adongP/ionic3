import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PaymentApprovalPartPage } from '../../pages/payment-approval-part/payment-approval-part'
/**
 * Generated class for the PaymentApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-approval',
  templateUrl: 'payment-approval.html',
})
export class PaymentApprovalPage {
  public lists: Array<any> = [
    {
      "part": "新钢原料采购部门/科室",
      "xian": "20,0000元",
      "qi": "20,0000.00元",
      "tip": "10"
    },
    {
      "part": "新钢原料采购部门/科室",
      "xian": "20,0000元",
      "qi": "20,0000.00元",
      "tip": "10"
    },
    {
      "part": "新钢原料采购部门/科室",
      "xian": "20,0000元",
      "qi": "20,0000.00元",
      "tip": "10"
    },
    {
      "part": "新钢原料采购部门/科室",
      "xian": "20,0000元",
      "qi": "20,0000.00元",
      "tip": "10"
    }
  ]
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentApprovalPage');
  }
  godetail() {
    this.navCtrl.push(PaymentApprovalPartPage);
    // console.log(1);
  }
}
