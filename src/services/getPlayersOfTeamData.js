import PlayerSchema from '../models/player.js';

export default async function getPlayerOfTeam (IdTeam) {
    return PlayerSchema.find({idEquipo: IdTeam}).select("-_id")
}
