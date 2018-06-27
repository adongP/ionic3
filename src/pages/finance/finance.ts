import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html',
})
export class FinancePage {
  public lists: Array<any> = [
    {
      "part": "新钢原料采购部门/科室",
      "start": "起始",
      "riqi": "2018-02-02",
      "over": "结束",
      "ovardate": "2018-02-03",
      "qiText": "20,000,00"
    },
    {
      "part": "新钢原料采购部门/科室",
      "start": "起始",
      "riqi": "2018-02-02",
      "over": "结束",
      "ovardate": "2018-02-03",
      "qiText": "20,000,00"
    },
    {
      "part": "新钢原料采购部门/科室",
      "start": "起始",
      "riqi": "2018-02-02",
      "over": "结束",
      "ovardate": "2018-02-03",
      "qiText": "20,000,00"
    },
    {
      "part": "新钢原料采购部门/科室",
      "start": "起始",
      "riqi": "2018-02-02",
      "over": "结束",
      "ovardate": "2018-02-03",
      "qiText": "20,000,00"
    },
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinancePage');
  }
  godetail() {
    console.log("财务分配");
  }
}
