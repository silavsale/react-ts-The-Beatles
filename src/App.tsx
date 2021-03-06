import React, { useState } from "react"
import "./App.css"
import AddToList from "./components/AddToList"
import List from "./components/List"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  // const [people, setPeople] = useState([
  //   {
  //     name: "Paul McCartney",
  //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/440px-Paul_McCartney_in_October_2018.jpg",
  //     age: 79,
  //     note: "Singer songwriter musician record and film producer businessman",
  //   },
  // ])

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John Lennon",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/440px-John_Lennon_1969_%28cropped%29.jpg",
      age: 39,
      note: "Singer songwriter musician",
    },
  ])

  return (
    <div className="App">
      <h1>The Beatles</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App
