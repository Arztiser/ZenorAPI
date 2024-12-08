// Function to fetch and process random data from template
fetch('person.json')
  .then(response => response.json())  // Fetch and parse the template JSON
  .then(template => {
    // Pick random values from the JSON template
    const randomName = template.name[Math.floor(Math.random() * template.name.length)];
    const randomAge = template.age[Math.floor(Math.random() * template.age.length)];
    const randomIsStudent = template.isStudent[Math.floor(Math.random() * template.isStudent.length)];
    const randomHobbies = template.hobbies.sort(() => 0.5 - Math.random()).slice(0, 3);  // Pick 3 random hobbies
    const randomCity = template.address.cities[Math.floor(Math.random() * template.address.cities.length)];
    const randomZip = template.address.zipCodes[Math.floor(Math.random() * template.address.zipCodes.length)];

    // Create a new JSON object with random values
    const randomJSON = {
      name: randomName,
      age: randomAge,
      isStudent: randomIsStudent,
      hobbies: randomHobbies,
      address: {
        city: randomCity,
        zip: randomZip
      }
    };

    // Log the new randomized JSON
    console.log("Randomized JSON:", JSON.stringify(randomJSON, null, 2));
  })
  .catch(error => {
    console.error("Error fetching or processing the template:", error);
  });
