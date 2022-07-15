function save(event){
    const payload = {
        Title:"hi"
    }
    console.log(event);
    fetch("http://localhost:3000/orders",{
        method:'POST',
        body: JSON.stringify(payload),
        headers:{
            'Content-type':'application/json'
        }
    });
    
}