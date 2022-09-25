import { FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";
export class SearchBookModel{
    title:string='';
    publisher:string='';
    author:string='';

    release:string='';
    id:number=0;


    formReader:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formReader=_builder.group({});
    this.formReader.addControl("TitleControl",new FormControl('',Validators.required));
    this.formReader.addControl("CategoryControl",new FormControl('',Validators.required));
    this.formReader.addControl("AuthorControl",new FormControl('',Validators.required));
    this.formReader.addControl("ImageControl",new FormControl('',Validators.required));
    this.formReader.addControl("PriceControl",new FormControl('',Validators.required));
    this.formReader.addControl("ActiveControl",new FormControl('',Validators.required));
    this.formReader.addControl("ContentControl",new FormControl('',Validators.required));
    this.formReader.addControl("PublisherControl",new FormControl('',Validators.required));

        
    }

}