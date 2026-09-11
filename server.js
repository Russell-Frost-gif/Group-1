import app from "./src/app.js";
import './src/config/database.js';

app.listen(PORT, () => {
    console.log("listening to port 3000");
});