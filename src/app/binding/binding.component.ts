import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
})
export class BindingComponent {
  userName1 = 'masrur';
  userName2 = 'bilu';
  addUserState = false;
  bindStatus = false;
  addUserConfirmation = '';
  userName = '';
  serverName = '';
  bindingName = '';

  getuserName2() {
    return `${this.userName2} --string interpolation`;
  }
  setUser() {
    this.addUserState = true;
    this.addUserConfirmation = 'new user added  ---property binding';
  }
  getUserName(event: Event) {
    this.userName = `${
      (<HTMLInputElement>event.target).value
    } ---event binding`;
  }
  // getServerName(event: Event) {
  //   this.serverName = `${
  //     (<HTMLInputElement>event.target).value
  //   } ---event binding`;
  // }
  getBindingStatus() {
    this.bindStatus = true
  }
}
