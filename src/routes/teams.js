import { Router } from "express";
import getTeam from "../services/getTeamData.js";

const router = Router();

router.get("/team", async (req, res) => {
  try {
    const teamData = await getTeam();

    res.setHeader("Content-Type", "application/json");
    res.status(200).type("json").send(JSON.stringify(teamData, null, 2));
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

export default router;
