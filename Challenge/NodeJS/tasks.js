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

var li = [
  "to quit the app  type exit OR quit",
  "to Says hello type hello",
  "to Says hello xxx type hello xxx!"
];

function onDataReceived(text) {
  var x = text.split(" ");

  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text === "list\n") {
    list();
  } else {
    if (x[0] === "add") {
      add(x);
    } else {
      if (text === "hello\n") {
        hello();
      } else {
        if (x[0] == "hello") {
          helloo(x);
        } else {
          if (text === "help\n") {
            help();
          } else unknownCommand(text);
        }
      }
    }
  }
}
/**
 * help function
 * print choises of user
 */
function help() {
  console.log("to quit the app  type exit OR quit");
  console.log("to Says hello type hello");
  console.log("to Says hello xxx type hello xxx!");
  console.log("* * * * * * * * * * * * * * *");
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
    console.log("[ ] " + li[i] + "\n");
  }
}

function add(task_) {
  task_.shift();
  var t = task_.toString();
  var t = t.replace(/\,/g, " ");
  var t = t.replace("\n", "");
  li.push(t);
  console.log(
    "~~~~~~~~~~~~~~~~~~~~~~~ \nthis task is added !! \n~~~~~~~~~~~~~~~~~~~~~~~"
  );
  list();
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("RayanEljawhari");
