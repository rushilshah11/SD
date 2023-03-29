import "../App.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Employees() {
  const showEmployees = true;
  const [employees] = useState([
    {
      name: "Grishma",
      role: "Dentist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngElsE90FhssTHnGV-9ZdMFkR6hsNNsKwzPAUsHpJ4w&s",
      linkedIn: "https://www.linkedin.com/in/grishma-shah-95317a68/",
    },
    {
      name: "Rushil",
      role: "Web Dev Intern",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngElsE90FhssTHnGV-9ZdMFkR6hsNNsKwzPAUsHpJ4w&s",
      linkedIn: "https://www.linkedin.com/in/rushilshahh/",
    },
    {
      name: "Marisol",
      role: "Dental Assistant",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngElsE90FhssTHnGV-9ZdMFkR6hsNNsKwzPAUsHpJ4w&s",
      linkedIn: "https://www.linkedin.com/in/rushilshahh/",
    },

    {
      name: "Akshat",
      role: "Web Dev Intern",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngElsE90FhssTHnGV-9ZdMFkR6hsNNsKwzPAUsHpJ4w&s",
      linkedIn: "https://www.linkedin.com/in/rushilshahh/",
    },
  ]);

  return (
    <div className="App">
    
      {showEmployees ? (
        <div>
          <div className="flex flex-wrap justify-center grid grid-rows-2 grid-flow-col">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  image={employee.image}
                  linkedIn={employee.linkedIn}
                ></Employee>
              );
            })}
          </div>
        </div>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
