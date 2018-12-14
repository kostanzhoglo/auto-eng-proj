const femaleNameSameLength = () => {
  fetch('https://randomuser.me/api/?results=25')
  .then((response) => response.json())
  .then((data) => {
    let females = data.results.filter((user) => {
      return user.gender === "female"
    })
    console.log(females)
    let femalesFirstLastSameLength = females.filter((female) => {
      return female.name.first.length === female.name.last.length
    })
    console.log(femalesFirstLastSameLength)
  })
}


femaleNameSameLength();
