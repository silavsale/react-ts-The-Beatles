import React from "react"
import { IState as IProps } from "../App"

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p className="">{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

  return <ul className="">{renderList()}</ul>
}

export default List
