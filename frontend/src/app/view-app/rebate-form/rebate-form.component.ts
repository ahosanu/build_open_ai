import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AllDataService} from "../../all-data.service";
import {ApiCooperVisionDataService} from "./api-cooper-vision-data.service";
import {data} from "autoprefixer";


@Component({
  selector: 'app-rebate-form',
  templateUrl: './rebate-form.component.html',
  styleUrls: ['./rebate-form.component.scss']
})
export class RebateFormComponent {
  title: any;
  logo: any;
  selectedInvoiceFile: any;
  selectedLensFile: any;
  selectedBoxFile: any;
  selectedBoxPrescriptionFile: any;
  locationNames: any = [];
  models: any = [];
  pressing: any;


  isLinear = false;
  messages: any = [];
  message: FormControl = new FormControl('');


  file: any = [];


  fromView: FormGroup = new FormGroup<any>({
    zip_code: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl('')
  });

  fromPatient: FormGroup = new FormGroup<any>({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    location: new FormControl(''),
    lens_purchase_date: new FormControl(''),
    exam_date: new FormControl(''),
    invoice_num: new FormControl('')
  });


  fromView_final: FormGroup = new FormGroup<any>({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    suite: new FormControl(''),
    zip_code: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    rebate_program: new FormControl(''),
    account_number: new FormControl(''),
    service_address: new FormControl(''),
    service_suite: new FormControl(''),
    sevice_city: new FormControl(''),
    service_State: new FormControl(''),
    service_zipcode: new FormControl(''),
  });

  fromView_final_preview: FormGroup = new FormGroup<any>({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    zip_code: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('')
  });
  showProduct2: boolean = false;
  programsList: any = [];
  genderLists: any = ['Male', 'Female', 'Transgender', 'Non-binary/non-conforming', 'Prefer not to respond'];
  ageLists: any = ['12 and under', '13-17', '18-24', '25-34', '35-44', '45-54', '55+'];
  lensesLists: any = ['ACUVUE® OASYS®', 'ACUVUE® VITA®', '1-DAY ACUVUE® MOIST®', 'Air Optix®', 'Other', 'N/A', 'I don\'t know'];

  constructor(private route: ActivatedRoute, private router: Router, private allDataService: AllDataService, private  api: ApiCooperVisionDataService) {

    this.route.params.subscribe(params => {
      let data: any = params;
      data = this.allDataService.rebateList.filter(s => s.id == data.id)[0];
      this.title = data.title;
      this.logo = data.logo;
      if(data.id == 1){
        this.api.getModels().subscribe(res=>{
          if(res.success){

            res.models.map((litem: any) => {
              let i=0;
              for(; this.models.length > i; i++){
                if(litem.productLine.name === this.models[i].name){
                  this.models[i].lists.push({id: litem.id, name: litem.name});
                  break;
                }
              }
              if(i === this.models.length){
                let brand: any = [{id: litem.id, name: litem.name}];
                this.models.push({name: litem.productLine.name, lists: brand});
              }
              //this.models.push();
            });
            console.log(this.models);
          }
        });
      }
    });
  }


  autoFillMessage() {
    this.router.navigate(['/view-app/rebate_history']);
  }


  uploadInvoice(e: any) {
    this.selectedInvoiceFile = e && e.target.files.length > 0 ? e.target.files[0] : '';
  }

  formatBytes(bytes: any, decimals: any = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  uploadLens(e: any) {
    this.selectedLensFile = e && e.target.files.length > 0 ? e.target.files[0] : '';
  }

  uploadBox(e: any) {
    this.selectedBoxFile = e && e.target.files.length > 0 ? e.target.files[0] : '';
  }

  uploadBoxPrescription(e: any) {
    this.selectedBoxPrescriptionFile = e && e.target.files.length > 0 ? e.target.files[0] : '';
  }

  getList(e: any) {
    if(this.pressing)
      clearTimeout(this.pressing);

    this.pressing = setTimeout(()=>{
      this.api.getLocation(this.fromPatient.get('location')?.value).subscribe(
        data => {
          //console.log(data);
          if(data.success){
            data.dealers.map((item: any) => {
              let address = item.address.address1 + ' ' + item.address.address2 + ' ' + item.address.city + ' ' + item.address.province + ' ' + item.address.postalCode
              this.locationNames.push({value: item.name + ' - ' + address, name:item.name, address:  address})
            });
          }
        }
      )
    },500);

  }

  add() {
    this.showProduct2 = true;
  }

  getData() {
    this.api.getPrograms().subscribe((data: any) => {
      if(data.success){
        this.programsList = data.programs;
      }
    });
  }
}
