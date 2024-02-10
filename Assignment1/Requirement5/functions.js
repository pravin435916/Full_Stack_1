const JsonData = [
    {
        "name": "Amit",
        "city": "Mumbai",
        "skills": [
            "Actng",
            "Singing",
            "Dancing"
        ],
        "vehicle": {
            "model": "BMW",
            "year": 2021
        }
    },
    {
        "name": "Rahul",
        "city": "Jaipur",
        "skills": [
            "Swiming",
            "Walking",
            "Dancing"
        ],
        "vehicle": {
            "model": "Scoda",
            "year": 2019
        }
    },
    {
        "name": "Vijay",
        "city": "Pune",
        "skills": [
            "Sarcasm",
            "Debate",
            "RTI"
        ],
        "vehicle": {
            "model": "M80",
            "year": 1999
        }
    }
];
  
  const mappedArray = JsonData.map(item => (
    { name: item.name,
     year: item.vehicle.year,
     skills : item.skills.map((s) => s ),
     model: item.vehicle.model
    }));
  
  console.log("Mapped Array:");
  console.log(mappedArray);
  
  const filteredArray = JsonData.filter(item => item.vehicle.year > 2020);
  
  console.log("\nFiltered Array Year more than 2020:");
  console.log(filteredArray);
  