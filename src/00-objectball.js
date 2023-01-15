function gameObject() {
    return {
        "home": {
            "teamName" : "Brooklyn Nets",
            "colors" : ["Black", "White"],
            "players" : {
                "Alan Anderson" : {
                    "number" : 0,
                    "shoe" : 16, 
                    "points" : 22,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 1,
                },
                "Reggie Evans" : {
                    "number" : 30,
                    "shoe" : 14, 
                    "points" : 12,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15,
                },
                "Brook Lopez" : {
                    "number" : 11,
                    "shoe" : 17, 
                    "points" : 17,
                    "rebounds" : 19,
                    "assists" : 10,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15,
                },
                "Mason Plumlee" : {
                    "number" : 1,
                    "shoe" : 19, 
                    "points" : 26,
                    "rebounds" : 12,
                    "assists" : 6,
                    "steals" : 3,
                    "blocks" : 8,
                    "slamDunks" : 5,
                },
                "Jason Terry" : {
                    "number" : 31,
                    "shoe" : 15, 
                    "points" : 19,
                    "rebounds" : 2,
                    "assists" : 2,
                    "steals" : 4,
                    "blocks" : 11,
                    "slamDunks" : 1,
                },
            }
        },
        "away" :{
            "teamName" : "Charlotte Hornets",
            "colors" : ["Turquoise", "Purple"],
            "players" : {
                "Jeff Adrien" : {
                    "number" : 4,
                    "shoe" : 18, 
                    "points" : 10,
                    "rebounds" : 1,
                    "assists" : 1,
                    "steals" : 2,
                    "blocks" : 7,
                    "slamDunks" : 2,
                },
                "Bismak Biyombo" : {
                    "number" : 0,
                    "shoe" : 16, 
                    "points" : 12,
                    "rebounds" : 4,
                    "assists" : 7,
                    "steals" : 7,
                    "blocks" : 15,
                    "slamDunks" : 10,
                },
                "DeSagna Diop" : {
                    "number" : 2,
                    "shoe" : 14, 
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamDunks" : 5,
                },
                "Ben Gordon" : {
                    "number" : 8,
                    "shoe" : 15, 
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamDunks" : 0,
                },
                "Brendan Haywood" : {
                    "number" : 33,
                    "shoe" : 15, 
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12,
                },
           },
      }
    }
}

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
//   console.log(homeTeamName());
//   // logs "Brooklyn Nets"

function numPointsScored(playerName) {
    let game = gameObject();
    let points = Object.keys(game)
        for(let i of points){
            let players = Object.keys(game[i]["players"])
            for(let p of players) {
              if(p === playerName) {
                return game[i]["players"][p]["points"];
             }
         }
     }
}

function shoeSize(playerName) {
    let game = gameObject();
    let teams = Object.keys(game);
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        for(let player of players) {
            if(player === playerName) {
                return game[team]["players"][player]["shoe"];
            }
        }
    }
}

function teamColors(teamName) {
    let game = gameObject();
    let teams = Object.keys(game);
    for(let i of teams) {
        if(game[i]["teamName"] === teamName) {
            return game[i]["colors"];
        }
    }
}

function teamNames() {
    let game = gameObject();
    let teams = Object.keys(game);
    let teamNames = [];
    for(let team of teams) {
        teamNames.push(game[team]["teamName"]);
    }
    return teamNames;
}

function playerNumbers(teamName) {
    let game = gameObject();
    let teams = Object.keys(game);
    let playerNumbers = [];
    for(let team of teams) {
        if(game[team]["teamName"] === teamName) {
            let players = Object.keys(game[team]["players"]);
            for(let player of players) {
                playerNumbers.push(game[team]["players"][player]["number"]);
            }
        }
    }
    return playerNumbers;
}

function playerStats(playerName) {
    let game = gameObject();
    let teams = Object.keys(game);
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        for(let player of players) {
            if(player === playerName) {
                return game[team]["players"][player];
            }
        }
    }
}

function bigShoeRebounds() {
    let game = gameObject();
    let teams = Object.keys(game);
    let largestShoeSize = 0;
    let playerWithBiggestShoe;
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        for(let player of players) {
            if(game[team]["players"][player]["shoe"] > largestShoeSize) {
                largestShoeSize = game[team]["players"][player]["shoe"];
                playerWithBiggestShoe = game[team]["players"][player];
            }
        }
    }
    return playerWithBiggestShoe["rebounds"];
}

function mostPointsScored() {
    let game = gameObject();
    let teams = Object.keys(game);
    let mostPoints = 0;
    let playerWithMostPoints;
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        for(let player of players) {
            if(game[team]["players"][player]["points"] > mostPoints) {
                mostPoints = game[team]["players"][player]["points"];
                playerWithMostPoints = player;
            }
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    let game = gameObject();
    let teams = Object.keys(game);
    let mostPoints = 0;
    let winningTeam;
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        let teamPoints = 0;
        for(let player of players) {
            teamPoints += game[team]["players"][player]["points"];
        }
        if(teamPoints > mostPoints) {
            mostPoints = teamPoints;
            winningTeam = game[team]["teamName"];
        }
    }
    return winningTeam;
}

function playerWithLongestName() {
    let game = gameObject();
    let teams = Object.keys(game);
    let longestName = "";
    let playerWithLongestName;
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        for(let player of players) {
            if(player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
        }
    }
    return playerWithLongestName;
}

function doesLongNameStealATon() {
    let game = gameObject();
    let teams = Object.keys(game);
    let longestName = "";
    let playerWithLongestName;
    let mostSteals = 0;
    let playerWithMostSteals;
    for(let team of teams) {
        let players = Object.keys(game[team]["players"]);
        for(let player of players) {
            if(player.length > longestName.length) {
                longestName = player;
                playerWithLongestName = player;
            }
            if(game[team]["players"][player]["steals"] > mostSteals) {
                mostSteals = game[team]["players"][player]["steals"];
                playerWithMostSteals = player;
            }
        }
    }
    return playerWithLongestName === playerWithMostSteals;
}




