import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",
      {
        headers: {
          "X-RapidAPI-Key":
            "d282a782dcmsh3d6831081f4c1afp11764cjsn8f80deed8065",
          "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
        },
      },
      { params: { limit: "18" } }
    );
    const result = response.data;
    const randomIndex = Math.floor(Math.random() * result.length);
    const post = result[randomIndex];
    res.render("index.ejs", { content: post });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
