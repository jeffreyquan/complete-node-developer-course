const fs = require("fs");
const chalk = require("chalk");

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length > 0) {
    console.log(chalk.blue.inverse("Your notes"));
    notes.forEach((note) =>
      console.log(`${chalk.yellow.inverse("Title")}: ${note.title}`)
    );
  } else {
    console.log(chalk.red.inverse("You have no notes"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const isDuplicateNote = notes.some((note) => note.title === title);

  if (!isDuplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added"));
  } else {
    console.log(chalk.red.inverse("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();

  const noteExist = notes.some((note) => note.title === title);

  if (noteExist) {
    const updatedNotes = notes.filter((note) => note.title !== title);
    saveNotes(updatedNotes);
    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(`${chalk.magenta.inverse(note.title)}: ${note.body}`);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
