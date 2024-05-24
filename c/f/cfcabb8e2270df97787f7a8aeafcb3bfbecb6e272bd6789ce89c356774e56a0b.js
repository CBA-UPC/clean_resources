import groups  from "../opta/opta-group.json"  assert { type: "json" }
import matches from "../opta/opta-match.json"  assert { type: "json" }
import players from "../opta/opta-player.json" assert { type: "json" }
import teams   from "../opta/opta-team.json"   assert { type: "json" }

window.getOptaGroups  = function getOptaGroups()  { return groups; }
window.getOptaMatches = function getOptaMatches() { return matches; }
window.getOptaPlayers = function getOptaPlayers() { return players; }
window.getOptaTeams   = function getOptaTeams()   { return teams; }