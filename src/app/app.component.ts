import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newForm: FormGroup;
  projectstatuses: string[] = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectnames = ['Test'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.newForm);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenProjectnames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

}

// export class AppComponent implements OnInit {
//   genders = ['male', 'female'];
//   signupForm: FormGroup;
//   private forbiddenUsernames = ['Chris', 'Anna'];

//   constructor(private formBuilder: FormBuilder) {}

//   ngOnInit() {
//     this.signupForm = new FormGroup({
//       'userData': new FormGroup({
//         'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
//         'email': new FormControl(null, [Validators.required, Validators.email]),
//       }),
//       'gender': new FormControl('male'),
//       'hobbies': new FormArray([])
//     });
//     this.signupForm.statusChanges.subscribe(
//       (status) => console.log(status)
//     );
//     this.signupForm.setValue({
//       'userData': {
//         'username': 'Max',
//         'email': 'max@test.com'
//       },
//       'gender': 'male',
//       'hobbies': []
//     });
//     this.signupForm.patchValue({
//       'userData': {
//         'username': 'Anna',
//       }
//     });
//   }

//   onSubmit() {
//     console.log(this.signupForm);
//     this.signupForm.reset();
//   }

//   onAddHobby() {
//     const control = new FormControl(null, Validators.required);
//     (<FormArray>this.signupForm.get('hobbies')).push(control);
//   }

//   forbiddenNames(control: FormControl): {[s: string]: boolean} {
//     if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
//       return { 'nameIsForbidden': true };
//     }
//     return null;
//   }

//   forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
//     const promise = new Promise<any>((resolve, reject) => {
//       setTimeout(() => {
//         if (control.value === 'test@test.com') {
//           resolve({'emailIsForbidden': true});
//         } else {
//           resolve(null);
//         }
//       }, 1500);
//     });
//     return promise;
//   }

  // get() {
  //   hobbyControl { return this.signupForm.get('hobbies'); }
  // }

  // get hobbyControl() { return <FormArray>this.signupForm.get('hobbies'); }

// }
