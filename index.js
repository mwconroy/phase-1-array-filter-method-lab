// Code your solution here


function findMatching(drivers, name){
    return drivers.filter(function (Name){ 
        return Name.toLowerCase() === name.toLowerCase()
    })
}
function matchName(drivers, name){
  return drivers.filter( city => city.name === name)
}

  function fuzzyMatch(nameList, partOfName){
    let name = partOfName.length
      return nameList.filter(function (nameOfDriver){
          return nameOfDriver.slice(0, name) ===partOfName
      })
  }
