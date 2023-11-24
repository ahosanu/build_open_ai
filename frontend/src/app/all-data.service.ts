import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {

  _showAlert: boolean = false;
  _showAlertOBJ: any;
  _msg: any;

  rebateList = [{
    id: 1,
    title: "CooperVision",
    logo: "/assets/image 1.png",
    status: false
  },
    {
      id: 2,
      title: "Bausch & Lomb",
      logo: "/assets/image 2.png",
      status: false
    },
    {
      id: 3,
      title: "Alcon",
      logo: "/assets/image 3.png",
      status: false
    }];
  constructor() { }


  showAlert(msg: string){
    this._msg = msg;
    if(this._showAlertOBJ)
      clearTimeout(this._showAlertOBJ);

    this._showAlert = true;
    setTimeout(()=>{
      this._showAlert = false;
    }, 5000);
  }

  _hideAlert() {
    if(this._showAlertOBJ)
      clearTimeout(this._showAlertOBJ);
    this._showAlert = false;
  }
}
