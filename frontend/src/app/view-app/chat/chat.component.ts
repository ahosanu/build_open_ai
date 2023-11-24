import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: any = [{
    "role": "user",
    "content": this.api.homeText
  }];
  message: FormControl = new FormControl('');

  fromView: FormGroup = new FormGroup<any>({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    zip_code: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl('')
  });


  constructor(private api: ApiService) {



  }

  getMessage() {
    this.api.show = true;
    this.messages.push({
      "role": "user",
      "content": this.message.value.trim()
    });

    this.message.setValue('');


    this.api.getAPIChat(this.messages).subscribe(
      (next: any) => {
        this.messages.push(next.choices[0].message);
        this.api.show = false;
      }
    );
  }

  autoFillMessage() {

    this.api.show = true;
    this.message.setValue('');


    this.api.getAPIChat([...this.messages, {
      "role": "user",
      "content": 'fill-up the json template using summary {"first_name": "[enter first name]", "last_name": "[enter last name]", "email": "[enter Email address]", "address" : "[ enter address]" , "zip_code": "[enter zip code]", "city": "[enter city]", "state": "[enter state]", "country": "[enter country]"}'
    }]).subscribe(
      (next: any) => {
        console.log(next.choices[0].message.content)
        this.fromView.setValue(JSON.parse(next.choices[0].message.content.split("```")[1]));
        this.api.show = false;
      }
    );




  }
}
