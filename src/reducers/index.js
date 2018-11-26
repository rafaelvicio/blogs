import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const teamsReducer = () => {
  return [
    { id: "01", title: "Made In Brazil", slug: "MIBR" },
    { id: "02", title: "Luminosity", slug: "LG" },
    { id: "03", title: "SK Gaming", slug: "SK" }
  ];
};

const selectedTeamReducer = (selectedTeam = null, action) => {
  if (action.type === "TEAM_SELETED") {
    return action.payload;
  }

  return selectedTeam;
};

export default combineReducers({
  teams: teamsReducer,
  selectedTeam: selectedTeamReducer,
  posts: postsReducer
});

// import { combineReducers } from "redux";

// import teamsReducer from "./teamsReducer";
// import selectedTeamReducer from "./teamsReducer";

// export default combineReducers({
//   teams: teamsReducer,
//   selectedTeam: selectedTeamReducer
// });
