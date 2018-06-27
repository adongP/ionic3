import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentApprovalPartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-approval-part',
  templateUrl: 'payment-approval-part.html',
})
export class PaymentApprovalPartPage {
public lists:Array<any>=[
  {
    "shou":"收:",
    "shouText":"新钢肯德基看电视剧付",
    "fu":"付:",
    "riqi":"2018-6-21",
    "shuliang":"2,000,000.00元",
    "piao":"票"
  },
  {
    "shou":"收:",
    "shouText":"新钢肯德基看电视剧付",
    "fu":"付:",
    "riqi":"2018-6-21",
    "shuliang":"2,000,000.00元",
    "piao":"票"
  },
  {
    "shou":"收:",
    "shouText":"新钢肯德基看电视剧付",
    "fu":"付:",
    "fuText":"铁路的九分裤的减肥健康",
    "riqi":"2018-6-21",
    "shuliang":"2,000,000.00元",
    "piao":"票"
  },
  {
    "shou":"收:",
    "shouText":"新钢肯德基看电视剧付",
    "fu":"付:",
    "riqi":"2018-6-21",
    "shuliang":"2,000,000.00元",
    "piao":"票"
  },
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentApprovalPartPage');
  }

}
