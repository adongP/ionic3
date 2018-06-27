import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BalanceInfoPage } from '../../pages/balance-info/balance-info'
/**
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {
  public lists: Array<any> = [
    {
      "part": "新钢原料采购部门/科室",
      "riqi": "2018-02-02",
      "xian": "现款",
      "xianText": "20,333,00",
      "qi": "期票",
      "qiText": "20,000,00"
    },
    {
      "part": "新钢原料采购部门/科室",
      "riqi": "2018-02-02",
      "xian": "现款",
      "xianText": "20,333,00",
      "qi": "期票",
      "qiText": "20,000,00"
    },
    {
      "part": "新钢原料采购部门/科室",
      "riqi": "2018-02-02",
      "xian": "现款",
      "xianText": "20,333,00",
      "qi": "期票",
      "qiText": "20,000,00"
    },
    {
      "part": "新钢原料采购部门/科室",
      "riqi": "2018-02-02",
      "xian": "现款",
      "xianText": "20,333,00",
      "qi": "期票",
      "qiText": "20,000,00"
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalancePage');
  }
  godetail() {
    // this.navCtrl.push(BalanceInfoPage);
    console.log(1);
  }

}
