import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";
export class UserModel{
    userName:string='';
    password:string='';

    formCustomerGroup:FormGroup;//Create
    

    constructor(){

        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({
            UserNameControl:new FormControl('',Validators.compose([Validators.required,Validators.email])),
            PasswordControl:new FormControl('',Validators.compose([Validators.required,Validators.pattern("[0-9]+.{3,3}")]))
        });

        // var _builder=new FormBuilder();
        // this.formCustomerGroup=_builder.group({});
        // this.formCustomerGroup.addControl("UserNameControl",new FormControl('',Validators.required));
        // //this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.required));
        // this.formCustomerGroup.addControl("PasswordControl",new FormControl('',Validators.required));

        

    }

}