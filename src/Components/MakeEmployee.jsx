import { useState } from "react";

export default function MakeEmployee() {
  const [name, setName] = useState();
  const [offDay, setOffDay] = useState([]);

  const employee = {
    name: name,
    offDay: offDay,
  };

  return <div></div>;
}
