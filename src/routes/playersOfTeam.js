import { Router } from "express";
import getPlayersOfTeam from "../services/getPlayersOfTeamData.js";

const router = Router();

router.get("/:idTeam/players", async (req, res) => {
  try {
    const idTeam = req.params.idTeam;
    const { country } = req.query;

    let dataPlayersOfIdTeam = await getPlayersOfTeam(idTeam);

    if (dataPlayersOfIdTeam.length === 0) {
      return res.status(400).json({ Error: "Id del equipo no encontrado" });
    }

    if (country) {
      const filtelCountry = getFilterCountry(dataPlayersOfIdTeam, country);
      if (filtelCountry.length === 0) {
        return res.status(400).json({ Error: "Pais no encontrado" });
      }
      dataPlayersOfIdTeam = filtelCountry;
    }

    res.status(200).type("json").send(JSON.stringify(dataPlayersOfIdTeam, null, 2));

  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

const getFilterCountry = (arrayPlayer, country) => {
  return arrayPlayer.filter((player) => player.pais.paisName === country);
};

export default router;
