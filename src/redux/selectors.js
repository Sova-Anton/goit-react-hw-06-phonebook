export const getContacts = store => store.contacts;

export const getFilter = store => store.filter;

export const getFilteredContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(({ name }) => {
    const normalizedName = name.toLocaleLowerCase();
    const result = normalizedName.includes(normalizedFilter);
    return result;
  });
  return filteredContacts;
};
