import express from 'express';
import initDatabase from './database.js';
import teamsRouter from './routes/teams.js';
import playerOfTeamRouter from './routes/playersOfTeam.js'
import positionOfPlayer from './routes/positionOfPlayers.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

initDatabase();

app.use('/api', teamsRouter);

app.use('/api/teams', playerOfTeamRouter);

app.use('/api/teams/players', positionOfPlayer);

app.use((req, res, next) => {
  res.status(404).send("404", {
    Error: "Bad request",
    RutasHabilitadas: [
      '/',
      '/api/team',
      '/api/teams/:idTeam/players',
      '/api/teams/players/:position'
    ]
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

