import React, { useEffect, useState } from "react";
import Developer, { REMOVE_DEVELOPER } from "./Developer";

export default function DeveloperList({ developerData }) {
  const [devData, setDevData] = useState([...developerData]);
  const handleTechnologyDelete = (technology, developer) => {
    const itemToDelete = {
      id: developer.id,
      type: "technologoies",
      item: technology,
    };
    const result = REMOVE_DEVELOPER(itemToDelete);
    const { developers } = Developer(result);
    setDevData([...developers]);
  };
  const handleProgrammingLanguageDelete = (language, developer) => {
    const itemToDelete = {
      id: developer.id,
      type: "programming",
      item: language,
    };
    const result = REMOVE_DEVELOPER(itemToDelete);
    const { developers } = Developer(result);
    setDevData([...developers]);
  };

  useEffect(() => {
    setDevData([...developerData]);
  }, [developerData]);

  return (
    <>
      {devData.map((developer) => {
        return (
          <div key={developer.id} className="w-50 mb-5 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">developer: {developer.name}</h5>
                <div className="mb-3">
                  <p>Technologies: </p>
                  {developer.technologies.map((technology) => {
                    return (
                      <div
                        key={technology}
                        className="d-flex align-items-center"
                      >
                        <div className="w-25">{technology}</div>
                        <button
                          onClick={() =>
                            handleTechnologyDelete(technology, developer)
                          }
                          className="p-2 w-25 bg-danger text-light"
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="mb-3">
                  <p>Programming Language: </p>
                  {developer.programmingLanguage.map((language) => {
                    return (
                      <div key={language} className="d-flex align-items-center">
                        <div className="w-25">{language}</div>
                        <button
                          onClick={() =>
                            handleProgrammingLanguageDelete(language, developer)
                          }
                          className="p-2 w-25 bg-danger text-light"
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className=" mb-3 card-text d-flex flex-column">
                  <p>Favorite Food: {developer.favoriteFood}</p>
                  <p>Favorite Drink: {developer.favoriteDrink}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
