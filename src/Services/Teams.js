// function Teams(appwrite) {
//   const teams = appwrite.teams;
//   this.createTeam = ( teamname , onSuccess , onFailure) => {
//     teams.create("unique()", teamname).then(
//       function (response) {
//         onSuccess(response)
//       },
//       function (error) {
//         onFailure(error)
//       }
//     );
//   };

//   this.listTeams = (onSuccess, onFailure) => {
//     teams.list().then(
//       function (response) {
//         onSuccess(response.teams.id , response.teams.name);
//       },
//       function (error) {
//         onFailure(error);
//       }
//     );
//   };
// }
