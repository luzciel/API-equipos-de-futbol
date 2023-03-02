import TeamSchema from '../models/team.js';

export default async function getTeam () {
    return TeamSchema.find({}).skip(1).limit(2).select("-_id")
}

