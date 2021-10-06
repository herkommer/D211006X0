let dataURL = '../data/cars.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL); 
req.responseType='json'; 
req.send(); 

console.log('data received');

req.onload = () => {
    const data = req.response;
    console.log(data);

    const cars = data['cars'];

    const myList = document.createElement('ul');
    
    for (let i = 0; i < cars.length; i++) {
        console.log(i);
        const listItem = document.createElement('li');
        listItem.textContent = cars[i].make;
        myList.appendChild(listItem);
    };

    document.getElementById('mycars').appendChild(myList);
};