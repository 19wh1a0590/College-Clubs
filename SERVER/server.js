let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");

let cors =  require("cors");
//create the rest object
let app = express();
//enable the ports comm

//set the JSON as MIME type
app.use(bodyparser.json());
//read the json
app.use(bodyparser.urlencoded({extended:false}));

app.use(cors());
//use login module
app.use("/login", require("./login/login"));
//use register module
app.use("/update", require("./update/update"));
app.use("/changePwd", require("./changePwd/changePwd"));
// app.use("/findObj", require("./findObj/findObj"));
app.use("/event", require("./event/event"));

app.use("/fetch_events", require("./fetch_events/fetch_events"));
app.use("/comment", require("./comment/comment"));
app.use("/fetch_comment", require("./fetch_comment/fetch_comment"));
app.use("/fetch_commentc", require("./fetch_commentc/fetch_commentc"));
app.use("/fetch_commente", require("./fetch_commente/fetch_commente"));

app.use("/delete", require("./delete/delete"));
app.use("/certificate", require("./certificate/certificate"));
app.use("/createcertificate", require("./createcertificate/createcertificate"));
app.use("/fetch", require("./fetch/fetch"));
app.use("/commentc", require("./commentc/commentc"));
app.use("/commente", require("./commente/commente"));
app.use("/find",require("./find/find"));

//assign the port no.
app.listen(3000);
console.log("server listening the port no.3000");

