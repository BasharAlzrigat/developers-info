import React, { useState } from "react";
import Select from "react-select";
import Developer, { ADD_DEVELOPER } from "./Developer";
import DeveloperList from "./DeveloperList";

export default function DeveloperForm() {
  const [programmingLanguage, setprogrammingLanguage] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [developerData, setDeveloperData] = useState([]);

  const programmingLanguageOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
  ];

  const technologiesOptions = [
    { value: "Reactjs", label: "Reactjs" },
    { value: "Express", label: "Express" },
    { value: "Vuejs", label: "Vuejs" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let modifiedProgrammingLanguage = programmingLanguage.map((item) => {
      return item.value;
    });

    let modifiedTechnologies = technologies.map((item) => {
      return item.value;
    });
    const formData = {
      name: e.target.name.value,
      programmingLanguage: modifiedProgrammingLanguage,
      technologies: modifiedTechnologies,
      favoriteFood: e.target.favoriteFood.value,
      favoriteDrink: e.target.favoriteDrink.value,
    };
    const result = ADD_DEVELOPER(formData);
    let { developers } = Developer(result);
    console.log("result2", developers);
    setDeveloperData([...developers]);
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="container mt-5 mb-5 p-4 shadow">
        <form onSubmit={(e) => handleSubmit(e)}>
          <legend className="mb-4">Fill The Developer Form</legend>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input name="name" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="programmingLanguage" className="form-label">
              Programming language
            </label>
            <Select
              onChange={(selectedOptions) => {
                setprogrammingLanguage(selectedOptions);
              }}
              name="programmingLanguage"
              isMulti
              options={programmingLanguageOptions}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="technologies" className="form-label">
              Technologies
            </label>
            <Select
              onChange={(selectedOptions) => {
                setTechnologies(selectedOptions);
              }}
              name="technologies"
              isMulti
              options={technologiesOptions}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="favoriteFood" className="form-label">
              Favorite Food
            </label>
            <input
              name="favoriteFood"
              className="form-control"
              id="favoriteFood"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="favoriteDrink" className="form-label">
              Favorite Drink
            </label>
            <input
              name="favoriteDrink"
              className="form-control"
              id="favoriteDrink"
            />
          </div>
          <button type="submit" value="Submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {developerData.length > 0 && (
        <DeveloperList developerData={developerData} />
      )}
    </div>
  );
}
