import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public loadScript(url, cb) {
    let isFound = false;
    let scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').indexOf("noonpayments") != -1) {
        isFound = true;
      }
    }

    if (!isFound) {
      let node = document.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      // node.async = false;
      node.charset = 'utf-8';
      // node.onreadystatechange = cb;
      node.onload = cb;

      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  callBackFunction(res) {
    console.log(res)
  }

  ionViewDidLoad() {
    console.log("I'm alive!");
    const jsUrl = ""; //insert the hosted JS URL here
    this.loadScript(jsUrl, function () {
      const settings = {
        Checkout_Method: "3",
        SecureVerification_Method: "1",
        Call_Back: this.callBackFunction,
        Frame_Id: "noonpayGateway",
      };
      console.log("in then", settings);
      const response = ProcessCheckoutPayment(settings);
    });
  }

}
