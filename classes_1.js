// defining a class 

class RailwayForm{
    // defining some member functions in the class 
    submit(){
        alert("Form has been submitted sucessfully ");
    }

    cancel(){
        alert("form has been canceled");
    }

}

// defining an object for the class
let harryForm = new RailwayForm();
let RohanForm = new RailwayForm();

// calling the member functions
harryForm.submit();
RohanForm.submit();
RohanForm.cancel();
