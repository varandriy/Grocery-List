class Storage {
  constructor() {
    const entries = this.getEntries();
    const ids = entries.map(e => e.id);
    this.id = ids.length === 0 ? 0 : Math.max(...ids);
  }

  getEntries() {
    const entriesString = localStorage.getItem('entries') || '[]';
    return JSON.parse(entriesString);
  }

  setEntries(entries) {
    const entriesString = JSON.stringify(entries);
    localStorage.setItem('entries', entriesString);
  }

  addEntry(entryText) {
    const entry = { id: ++this.id, text: entryText, isDone: false, time: '', priority: null };
    const entries = this.getEntries();
    const newEntries = [...entries, entry];
    this.setEntries(newEntries);

    return newEntries;
  }

  deleteEntry(id) {
    const entries = this.getEntries();
    const newEntries = entries.filter(e => e.id !== id);
    this.setEntries(newEntries);

    return newEntries;
  }

  doneEntry(entry) {
    const dt = new Date();
    const entries = this.getEntries();
    const newEntries = entries.map(e => e.id === entry.id ? {
      ...e,
      isDone: entry.isDone,
      time: dt.toLocaleTimeString(),
    } : e);

    this.setEntries(newEntries);

    return newEntries;
  }

  setEntryPriority(entry) {
    const entries = this.getEntries();
    const newEntries = entries.map(e => e.id === entry.id ? {
      ...e,
      priority: entry.priority,
    } : e);

    this.setEntries(newEntries);

    return newEntries;
  }

  sortByEntryPriority() {
    const entries = this.getEntries();
    const newEntries = entries.sort((a, b) => {
      return a.priority - b.priority || (a.text > b.text ? 1 : a.text < b.text ? -1 : 0);
    });

    this.setEntries(newEntries);

    return newEntries;
  }
}

export const serverMock = new Storage();
