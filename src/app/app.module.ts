// 系统模块
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//  components模块 组件
import { ComponentsModule } from '../components/components.module';


// 根组件
import { MyApp } from './app.component';

// 自定义页面组件
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


// import { BalanceInfoPage } from '../pages/balance-info/balance-info';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // BalanceInfoPage
  ],
  imports: [ //依赖模块
    BrowserModule,
    ComponentsModule,
    // IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonText: ""
    })
  ],
  bootstrap: [IonicApp], //启动模块
  entryComponents: [ //不会在模板中使用的模块
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // BalanceInfoPage
  ],
  providers: [ //配置服务
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
