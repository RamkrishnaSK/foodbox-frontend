import { FormControl, ValidationErrors } from '@angular/forms';

export class MyValidators {
  //whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors {
    //check if string contains only whitespace
    if (control.value != null && control.value.trim().length === 0) {
      //if invalid, return error object
      return { notOnlyWhitespace: true };
    } else {
      //if valid, return null
      return null;
    }
  }
}
