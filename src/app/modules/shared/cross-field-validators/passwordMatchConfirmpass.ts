import { AbstractControl } from '@angular/forms';

export const PasswordsMatchValidator = (passwordControlName: string, confirmPasswordControlName: string) => {
   const validator = (form:AbstractControl)=>{
      const passwordControl = form.get(passwordControlName);
      const confirmPasswordControl = form.get(confirmPasswordControlName) 
      if(!passwordControl || !confirmPasswordControl || !passwordControl.value || !confirmPasswordControl.value){
         return ;
      }
      if(passwordControl.value !== confirmPasswordControl.value){
         confirmPasswordControl.setErrors({UnmatchedPassword:true});
      }else {
         const errors = confirmPasswordControl.errors
         if(!errors)  return ;
         delete errors['UnmatchedPassword'];

         confirmPasswordControl.setErrors(errors)
      }
   }
   return validator;
}
