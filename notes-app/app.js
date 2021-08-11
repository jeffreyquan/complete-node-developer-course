const chalk = require("chalk");
const yargs = require("yargs");
const { listNotes, addNote, readNote, removeNote } = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title, body }) {
    addNote(title, body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title }) {
    removeNote(title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler() {
    listNotes();
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler({ title }) {
    readNote(title);
  },
});

yargs.parse();
