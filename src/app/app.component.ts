import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formvalidation';


  formGroup! : FormGroup
  constructor(private builder: FormBuilder){
this.formGroup=this.builder.group({
  name:["", [Validators.required, Validators.minLength(4)]],
  email:["", [Validators.required, Validators.email, ]],
  country:["", [Validators.required, Validators.minLength(3)]],
  phoneno:["", [Validators.required, Validators.pattern(/^\d{10}$/)]],
  password:["", [Validators.required, Validators.maxLength(10)]],
  finalcheck:["", [Validators.requiredTrue]]
})
  }

get name(): any{
      return this.formGroup.get("name");
}
get email(): any{
  return this.formGroup.get("email")
}
get country(): any{
  return this.formGroup.get("country")
}
get phoneno(): any{
  return this.formGroup.get("phoneno")
}
get password(): any{
  return this.formGroup.get("password")
}
get finalcheck(): any{
  return this.formGroup.get("finalcheck")
}

save(): void{
  console.log(this.formGroup.value)
  this.formGroup.reset()

}





}
