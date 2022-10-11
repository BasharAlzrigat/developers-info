/* eslint-disable no-lone-blocks */
let initialState = {
  idCounter: 1,
  developers: [],
};

export default function Developer(action,state = initialState) {
  switch (action.type) {
    case "ADD_DEVELOPER":
      {
        state.developers.push({
          id: state.idCounter,
          name: action.payload.name,
          programmingLanguage: action.payload.programmingLanguage,
          technologies: action.payload.technologies,
          favoriteFood: action.payload.favoriteFood,
          favoriteDrink: action.payload.favoriteDrink,
        });
        state.idCounter++;
      }
      initialState={...state}
      return state;
    case "REMOVE_DEVELOPER": {
      state.developers.forEach((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "technologoies") {
            item.technologies.splice(
              item.technologies.indexOf(action.payload.item),
              1
            );
            console.log("state.developers", state.developers);
          } else {
            item.programmingLanguage.splice(
              item.programmingLanguage.indexOf(action.payload.itemName),
              1
            );
          }
        }
      });
      initialState={...state}
      return state;
    }
    default: {
      return state;
    }
  }
}
export const ADD_DEVELOPER = (itemToAdd) => {
  return {
    type: "ADD_DEVELOPER",
    payload: itemToAdd,
  };
};
export const REMOVE_DEVELOPER = (itemToDelete) => {
  return {
    type: "REMOVE_DEVELOPER",
    payload: itemToDelete,
  };
};
