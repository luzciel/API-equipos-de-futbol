import { Router } from "express";
import getPositionOfPlayersData from "../services/getPositionOfPlayersData.js";

const router = Router();

router.get("/:position", async (req, res) => {
  try {
    const position = req.params.position;
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 18;

    const dataPlayersOfIdTeam = await getPositionOfPlayersData(
      position,
      page,
      limit
    );
    
    if (dataPlayersOfIdTeam[0].data.length === 0) {
      return res.status(400).json({ Error: "rol del jugador no encontrado" });
    }

    res.setHeader("Content-Type", "application/json");
    res
      .status(200)
      .type("json")
      .send(JSON.stringify(dataPlayersOfIdTeam, null, 2));
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

export default router;
