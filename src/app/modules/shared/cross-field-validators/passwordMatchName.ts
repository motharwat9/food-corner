// import { passwordMatchName } from 'src/app/modules/shared/cross-field-validators/passwordMatchName';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
// export function passwordMatchName(): ValidatorFn {
//    return (formGroup:AbstractControl): ValidationErrors | null =>{
//       const password = formGroup.get('password');
//       const userName = formGroup.get('userName');

//       if (!password || !userName || !password.value || !userName.value) {
//          return null; // Don't perform validation if either field is empty
//       }
//       let nameErr={'nameMatchedPassword': {'pass': password?.value, 'name': userName?.value}}

//       const NameNotSpace = userName?.value.replace(/\s/g,"");
//       return password.value.includes(NameNotSpace)?nameErr:null;
//    }
// }

export const PasswordMatchName = (passwordControlName:string , userNameControlName:string)=>{
   const validator = (form:AbstractControl)=>{

      const passwordControl = form.get(passwordControlName);
      const userNameControl = form.get(userNameControlName);
      if(!passwordControl || !userNameControl || !passwordControl.value || !userNameControl.value){
         return;
      }
      const nameNotSpace = userNameControl?.value.replace(/\s/g,"");

      if(passwordControl.value.includes(nameNotSpace)){
         passwordControl.setErrors({nameMatchedPassword:true});
      }else {
         const errors = passwordControl.errors
         if(!errors) return;
         delete errors['nameMatchedPassword'];
         passwordControl.setErrors(errors)
      }
   }
   return validator;
}