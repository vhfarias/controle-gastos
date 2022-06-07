export const getEntries = () => {
  return (JSON.parse(localStorage.getItem('entries')) || [])
}

export const setEntries = (entries) => {
  localStorage.setItem('entries', JSON.stringify(entries));
}

export const removeEntryById = (id) => {
  let entries = getEntries();
  try {
    let entryToRemoveIndex = entries.findIndex((entry) => entry.id === id);
    entries.splice(entryToRemoveIndex, 1);
    setEntries(entries);
  } catch (e) {
    console.error(`error removing entry id ${id}`)
  }
  return entries;
}