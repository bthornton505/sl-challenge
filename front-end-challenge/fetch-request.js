fetch('https://api.sawatchlabs.com/models/13/2017')
  .then(res => res.json())
  .then(cars => sortedCars(cars.data))
  .then(sortedCars => createTable(sortedCars))
  
const sortedCars = (cars) => {
  let sortedCars = cars.sort((a, b) => (a.vehicle_model > b.vehicle_model) ? 1 : -1)
  return sortedCars
}

const createTable = (sortedCars) => {
  let output = '<tr></tr>'
  sortedCars.forEach((car) => {
    output += `
      <tr id="${car.id}">
        <td>${car.vehicle_year}</td>
        <td>${car.make}</td>
        <td>${car.vehicle_model}</td>
        <td>${car.displacement}</td>
        <td>${car.cylinders}</td>
        <td>${car.class}</td>
      </tr>
    `
  })
  document.getElementById('swt-table-body').innerHTML = output;
}
