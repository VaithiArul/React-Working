import React from "react"
import Person from "./Person"

function NameList() {

  /*
  const person = [
    {
      id: 1,
      name: "Steeve",
      age: 30,
      skill: "Planning",
    },
    {
      id: 2,
      name: "T Challa",
      age: 25,
      skill: "Technology",
    },
    {
      id: 3,
      name: "Quint",
      age: 25,
      skill: "Archery",
    },
  ];
    
  const personList = person.map((person) => (<Person key={person.name} person={person} />))
  return <div>{personList}</div>
  */

  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const nameList = names.map((name, index) => <h2 key={index}>{index}-{name}</h2>)
  return <div>{nameList}</div>
}

export default NameList
