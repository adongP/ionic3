import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { PaymentApprovalPage } from '../payment-approval/payment-approval';
// import { FundPage } from '../fund/fund';
// import { DistributionPage } from '../distribution/distribution';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: any;
  list: Array<any> = [
    {
      one1: [
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/57.png",
          "text": "计划审批"
        },
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/58.png",
          "text": "资金申请"
        },
        {
          "name": "FinancePage",
          "imgUrl": "../../assets/imgs/index/Coins.png",
          "text": "财务分配"
        },
        {
          "name": "BalancePage",
          "imgUrl": "../../assets/imgs/index/Coin.png",
          "text": "结余额度"
        }
      ]
    },
    {
      one1: [
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/75.png",
          "text": "付款情况"
        },
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/76.png",
          "text": "分配情况"
        },
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/77.png",
          "text": "付款审批"
        },
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/78.png",
          "text": "分配审批"
        }
      ]

    }]

  jieyu: any = [

    {
      title: "结余",
      one1: [
        {
          "name": "BalancePage",
          "imgUrl": "../../assets/imgs/index/dd.png",
          "text": "财务结余额度"
        },
        {
          "name": "BalancePage",
          "imgUrl": "../../assets/imgs/index/4a.png",
          "text": "部门结余额"
        },
        {
          "name": "BalancePage",
          "imgUrl": "../../assets/imgs/index/4.png",
          "text": "科室结余额"
        }
      ]
    },
    {
      title: '审批',
      one1: [
        {
          "name": "FundPage",
          "imgUrl": "../../assets/imgs/index/100.png",
          "text": "资金申请"
        },
        {
          "name": "DistributionPage",
          "imgUrl": "../../assets/imgs/index/16sucai.png",
          "text": "分配审批"
        },
        {
          "name": "PaymentApprovalPage",
          "imgUrl": "../../assets/imgs/index/24.png",
          "text": "付款审批"
        }
      ],
    },
  ]


  constructor(public navCtrl: NavController) {


  }
  getkeys(item) {
    return Object.keys(item);
  }

  gopage(item) {
    this.navCtrl.push(item.name)
    console.log(item.name);
  }
}

// fund = FundPage;
// distribution = DistributionPage;
// payment = PaymentApprovalPage;

// }
