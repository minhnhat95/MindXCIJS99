import { useState } from "react";

import ContactForm from "./components/ContactForm";
import ManageContacts from "./components/ManageContacts";

import "./App.css";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleUpdateContact = (oldContact) => {
    const clonedContacts = [...contacts];
    const currentUpdatingContactIndex = contacts.findIndex(
      (contact) => contact.id === oldContact.id
    );

    clonedContacts[currentUpdatingContactIndex] = oldContact;

    setContacts(clonedContacts);
  };

  const onSelectContactToEdit = (id) => {
    const selectedContact = contacts.find((contact) => contact.id === id);
    setEditContact(selectedContact);
  };

  const clearUpdateContact = () => {
    setEditContact(null);
  };
  const handleDeleteContact = (id) => {
    const filterContact = contacts.filter((contact) => contact.id !== id);
    setContacts(filterContact);
  };

  return (
    <div>
      <Header />
      <div className="mt-4 px-8 grid grid-cols-2 grid-rows-none gap-x-8">
        <ContactForm
          handleAddContact={handleAddContact}
          editContact={editContact}
          handleUpdateContact={handleUpdateContact}
          clearUpdateContact={clearUpdateContact}
        />
        <ManageContacts
          contacts={contacts}
          onSelectContactToEdit={onSelectContactToEdit}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
}

export default App;
