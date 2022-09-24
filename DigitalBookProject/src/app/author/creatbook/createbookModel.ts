import { NgForm,FormGroup,Validators,FormBuilder,FormControl } from "@angular/forms";
export class CreateBook{
    title:string='';
    category:string='';
    image:string='';
    price:string='';
    publisher:string='';
    active:string='';
    contents:string='';
    authorEmail:string='';
    id:number=0;


    public formAuthorGroup:FormGroup;
    constructor(){
    var _builder=new FormBuilder();
    this.formAuthorGroup=_builder.group({});
    this.formAuthorGroup.addControl("TitleControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("CategoryControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("AuthorControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("ImageControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("PriceControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("ActiveControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("ContentControl",new FormControl('',Validators.required));
    this.formAuthorGroup.addControl("PublisherControl",new FormControl('',Validators.required));

    var validationTitle=[];
    validationTitle.push(Validators.required);
    //validationTitle.push(Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"));
        this.formAuthorGroup.addControl("TitleControl",new FormControl('',Validators.compose(validationTitle)));

        var validationCategory=[];
        validationCategory.push(Validators.required);
       // validationCategory.push(Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$"));
        this.formAuthorGroup.addControl("CategoryControl",new FormControl('',Validators.compose(validationCategory)));   
        
        var validationAuthor=[];
        validationAuthor.push(Validators.required);
        //validationAuthor.push(Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$"));
        this.formAuthorGroup.addControl("AuthorControl",new FormControl('',Validators.compose(validationAuthor)));   

        var validationImage=[];
        validationImage.push(Validators.required);
        //validationImage.push(Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$"));
        this.formAuthorGroup.addControl("ImageControl",new FormControl('',Validators.compose(validationImage)));   

        var validationPrice=[];
        validationPrice.push(Validators.required);
        validationPrice.push(Validators.pattern("^[0-9]+$"));
        this.formAuthorGroup.addControl("PriceControl",new FormControl('',Validators.compose(validationPrice)));   

        var validationActive=[];
        validationActive.push(Validators.required);
       // validationActive.push(Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$"));
        this.formAuthorGroup.addControl("ActiveControl",new FormControl('',Validators.compose(validationActive)));   

        
    }

}