class RailwayForm{
    submit(){
        alert(this.name+" form has been submitted sucessfully for "+this.trainno);

    }
    cancel(){
        alert(`${this.name} your form has been cancelled for  ${this.trainno}`);
    }

    fill(name,trainno){
        this.name=name;
        this.trainno=trainno;
    }


}

let harryForm = new RailwayForm();
let rohanForm = new RailwayForm();

harryForm.fill("HARRY",45321);
harryForm.submit();

rohanForm.fill("ROHAN",45981);
rohanForm.submit();
rohanForm.cancel();