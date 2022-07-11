function count(event) {
    console.log(event.target.value.length);
    const counterElement = document.getElementById('counter');
    counterElement.innerText = event.target.value.length;
}

function handlekeydown(event){
    console.log('handlekeydown')
}