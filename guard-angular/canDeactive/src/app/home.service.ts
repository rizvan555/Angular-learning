import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  edit: boolean = false;
  constructor() {}

  checkIsEdit() {
    if (this.edit) {
      let result = confirm('Do you confirm your exit from the page?');
      return result;
    }
    return true;
  }
}
