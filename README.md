# noonpay-ionic
Setup to integrate noonpay with ionic framework

1. Fork this repo and clone in your machine. 
2. Go to the folder and run `npm install`. You need node(version 7) and npm installed on your machine.
3. In `src/pages/home/home.ts`, insert the hosted js url in `ionViewDidLoad` method. 
4. Run `ionic serve` from command line. This will spin a server at `localhost:8100` and launch it in browser.
5. By the time app loads, the error page would probably be there. Click on close (a close link at top of app will be displayed) to get the noonpay iframe. 
