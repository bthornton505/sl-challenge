fetch('https://api.sawatchlabs.com/models/13/2017')
  .then(res => res.json())
  .then(res => {
    let output = '<tr></tr>'
    res.data.forEach((car) => {
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
  });
