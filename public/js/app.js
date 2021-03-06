let dataURL = '../data/cars.json';
let req = new XMLHttpRequest();
req.open('GET', dataURL); 
req.responseType='json'; 
req.send(); 

console.log('data received');

req.onload = () => {
    const data = req.response;
    console.log(data);

    const cars = data;

    const myList = document.createElement('ul');
    
    for (let i = 0; i < cars.length; i++) {
        console.log(i);
        const listItem = document.createElement('li');
        listItem.textContent = cars[i].make + " " + cars[i].model;
        myList.appendChild(listItem);
    };

    document.getElementById('mycars').appendChild(myList);
};

GetCarById = () =>  {

    let CarId = document.getElementById('CarId').value;

    let GetCarById_URL = '../cars/' + CarId;
    let req = new XMLHttpRequest();
    req.open('GET', GetCarById_URL); 
    req.responseType='json'; 
    req.send();

    req.onload = () => {
        const data = req.response;
        console.log(data);
    
        const carData = document.createElement('ul');
        
        //Finding all properties of the car
        // console.log(Object.getOwnPropertyNames(data));
        // Object.getOwnPropertyNames(data).forEach(
        //     function (val, idx, array) {
        //       console.log(val + ' -> ' + data[val]);
        //     }
        //   );

        //refactoring
        Object.getOwnPropertyNames(data).forEach(
            function (val, idx, array) {
                let listItem = document.createElement('li');
                listItem.textContent = data[val];
                carData.appendChild(listItem);
            });
    
        document.getElementById('carDetails').appendChild(carData);
    };
   
};