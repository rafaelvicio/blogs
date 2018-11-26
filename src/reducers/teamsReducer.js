export const teamsReducer = () => {
  return [
    { id: "01", title: "Made In Brazil", slug: "MIBR" },
    { id: "02", title: "Luminosity", slug: "LG" },
    { id: "03", title: "SK Gaming", slug: "SK" }
  ];
};

export const selectedTeamReducer = (selectedTeam = null, action) => {
  if (action.type === "TEAM_SELETED") {
    return action.payload;
  }

  return selectedTeam;
};
