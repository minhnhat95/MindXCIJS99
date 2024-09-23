import React from "react";
import ContactCard from "./ContactCard";

const ManageContacts = ({
  contacts,
  onSelectContactToEdit,
  handleDeleteContact,
}) => {
  let contactList = null;

  if (contacts.length === 0) {
    contactList = <h4 className="font-bold">Please Add a Contact</h4>;
  } else {
    contactList = contacts.map((contact) => (
      <ContactCard
        data={contact}
        key={contact?.id}
        onSelectContactToEdit={onSelectContactToEdit}
        handleDeleteContact={handleDeleteContact}
      />
    ));
  }
  return (
    <div className="flex flex-col gap-2">
      <input type="search" name="" id="" placeholder="Filter Contacts..." />
      {contactList}
    </div>
  );
};

export default ManageContacts;
