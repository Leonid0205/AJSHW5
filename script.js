function createCars(data) {
    data.forEach(element => {
        const carEL = document.createElement('div');
        carEL.classList.add('car');
        carBoxEl.appendChild(carEL);
    
        const carELID = document.createElement('p');
        carELID.classList.add('car__id');
        carELID.textContent = element.MakeId;
        carEL.appendChild(carELID);
    
        const carELName = document.createElement('p');
        carELName.classList.add('car__name');
        carELName.textContent = element.MakeName;
        carEL.appendChild(carELName);
    
        const carELVehicleTypeId = document.createElement('p');
        carELVehicleTypeId.classList.add('car__vehicletypeid');
        carELVehicleTypeId.textContent = element.VehicleTypeId;
        carEL.appendChild(carELVehicleTypeId);
    
        const carELVehicleTypeName = document.createElement('p');
        carELVehicleTypeName.classList.add('car__vehicletypeid');
        carELVehicleTypeName.textContent = element.VehicleTypeName;
        carEL.appendChild(carELVehicleTypeName);
    });
}
const dataCars  = JSON.parse(data);
const carBoxEl = document.createElement('div');
carBoxEl.classList.add('car-box');
document.body.prepend(carBoxEl);
createCars(dataCars);