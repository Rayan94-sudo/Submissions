/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 *
 */

function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

let li = read_data();

function read_data() {
  if (process.argv.length == 2) {
    ("use strict");
    let jsonData = require("./database.json");
    return jsonData;
  } else {
    ("use strict");
    let jsonData = require("./" + process.argv[2]);
    return jsonData;
  }
}

function onDataReceived(text) {
  var x = text.split(" ");
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "list\n") {
    list();
  } else if (text === "add\n") {
    unknownCommand(text);
  } else if (x[0] === "add") {
    add(x);
  } else if (text === "remove\n") {
    remove_1();
  } else if (x[0] === "remove") {
    remove(x[1]);
  } else if (text === "edit\n") {
    unknownCommand(text);
  } else if (x[0] === "edit") {
    edit(x);
  } else if (text === "check\n") {
    unknownCommand(text);
  } else if (x[0] === "check") {
    check(x);
  } else if (text === "uncheck\n") {
    unknownCommand(text);
  } else if (x[0] === "uncheck") {
    uncheck(x);
  } else if (text === "hello\n") {
    hello();
  } else if (x[0] == "hello") {
    helloo(x);
  } else if (text === "help\n") {
    help();
  } else unknownCommand(text);
}

/**
 * help function
 * print choises of user
 */
function help() {
  list();
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello() {
  console.log("hello!");
}

/**
 * Says hello x!
 *
 * @returns {void}
 */
function helloo(y) {
  y = y.replace("\n", "");
  console.log(`hello ${y}!`);
}

function list() {
  for (var i = 0; i < li.length; i++) {
    if (li[i][1] == 1) {
      console.log("[✓]" + li[i][0] + "\n");
    } else {
      console.log("[ ]" + li[i][0] + "\n");
    }
  }
  console.log("<><><><><><><><><><><><><><><><><><><><>");
}

function add(task_) {
  task_.shift();
  var t = task_.toString();
  var t = t.replace(/\,/g, " ");
  var t = t.replace("\n", "");
  li.push([t, 0]);
  console.log(">->-> this task is added !! \n");
  list();
}

function edit(x) {
  if (x[1] <= li.length && x[1] > 0) {
    var index = x[1] - 1;
    x.shift();
    x.shift();
    var t = x.toString();
    var t = t.replace(/\,/g, " ");
    var t = t.replace("\n", "");
    li[index][0] = t;
  } else {
    var index = x.length;
    x.shift();
    var t = x.toString();
    var t = t.replace(/\,/g, " ");
    var t = t.replace("\n", "");
    li[index][0] = t;
  }
  console.log(" <<< list after edit >>>");
  list();
}

function uncheck(x) {
  if (x[1] <= li.length && x[1] > 0) {
    var index = x[1];
    var i = parseInt(x[1] - 1);
    li[i][1] = 0;
  } else {
    console.log("parametrs error");
  }
  console.log(`task ${x[1]}is marked as checked`);
  list();
}

function check(x) {
  if (x[1] <= li.length && x[1] > 0) {
    var index = x[1];
    var i = parseInt(x[1] - 1);
    li[i][1] = 1;
  } else {
    console.log("parametrs error");
  }
  console.log(`task ${x[1]}is marked as checked`);
  list();
}

function remove_1() {
  li.pop();
  list();
}
function remove(x) {
  if (x <= li.length && x > 0) {
    li.splice(x - 1, 1);
    list();
  } else {
    console.log("invalide parametrs");
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */

function quit() {
  if (process.argv.length == 2) {
    const fs = require("fs");
    let data = JSON.stringify(li);
    fs.writeFileSync("database.json", data);
  } else {
    const fs = require("fs");
    let data = JSON.stringify(li);
    fs.writeFileSync(process.argv[2], data);
  }
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("RayanEljawhari");
