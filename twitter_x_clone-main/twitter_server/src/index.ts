import { initialServer } from "./app";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

async function init() {
  const app = await initialServer();
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.get("/helth", (req, res) => {
    return res.status(200).json({
      mess: "Server Running",
      err: false,
    });
  });
  app.listen(process.env.PORT || 8000, () => {
    console.log("srver is running on 8000");
  });
}

init();
