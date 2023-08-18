interface Car {
    car_name: string,
    car_number: number;
  }

  let car_object:Car={
    car_name:"Cultus",
    car_number:1685
  }


  function greetin(car_object: { color: string,brand: string }):string {
    return `Hello   ${car_object.color} \t ${car_object.brand}` ;
  }

  console.log(`${car_object.car_name} \t ${car_object.car_number}`)

  console.log(greetin({color:"white",brand:"Honda"}))
  