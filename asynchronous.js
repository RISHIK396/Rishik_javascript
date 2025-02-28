function getData(dataId,getNextD){
    setTimeout(()=>{
        console.log("Data = ",dataId);
        // to stop when there is no getNext function
        if(getNextD){
            getNextD();
        }
    },2000);
}

// in this way we can handle the 2 seconds delay in the same function when multile calls are passed
getData(1,()=>{
    getData(2,()=>{
        getData(3);
    })
});
