import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";
export class CreateBook{
    title:string='';
    category:string='';
    image:string='';
    price:string='';
    publisher:string='';
    active:string='';
    contents:string='';


    formCustomerGroup:FormGroup;//Create

    constructor(){
        var _builder=new FormBuilder();
        this.formCustomerGroup=_builder.group({});
        this.formCustomerGroup.addControl("CustomerNameControl",new FormControl('',Validators.required));
        //this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.required));
        this.formCustomerGroup.addControl("CustomerAmountControl",new FormControl('',Validators.required));

        var validationcollection=[];
        validationcollection.push(Validators.required);
        validationcollection.push(Validators.pattern("^[0-9]{3,3}$"));
        this.formCustomerGroup.addControl("CustomerCodeControl",new FormControl('',Validators.compose(validationcollection)));

    }

}