// Make our initial api request for vehicle data
fetch('https://api.sawatchlabs.com/models/13/2017')
  .then(res => res.json())
  .then(cars => sortCars(cars.data))
  .then(sortedCars => createTable(sortedCars))

// This function will sort the vehicles by model in alphabetical order
const sortCars = (cars) => {
  let sortedCars = cars.sort((a, b) => (a.vehicle_model > b.vehicle_model) ? 1 : -1)
  return sortedCars
}

// This function will then take the sorted cars and create a table to display them
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
  // Last, we take the value of our function and place it into the table body
  document.getElementById('swt-table-body').innerHTML = output;
}
