import React from "react";

const ContactCard = ({ data, onSelectContactToEdit, handleDeleteContact }) => {
  const { name, phone, email, contactType, id } = data;

  return (
    <div className="border-[1px] border-neutral-900 p-6 bg-slate-100 flex justify-between">
      <div>
        <h6 className="text-lg text-sky-800 font-bold">{name}</h6>
        <p>
          <i class="fa-solid fa-envelope-open"></i>: {email}
        </p>
        <p>
          <i class="fa-solid fa-phone-flip"></i>: {phone}
        </p>
        <button
          className="bg-neutral-800 text-white px-3 py-1 mx-1"
          onClick={() => onSelectContactToEdit(id)}
        >
          Edit
        </button>
        <button
          className="bg-red-700 text-white px-3 py-1 mx-1"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
      </div>
      <div className={contactType}>{contactType}</div>
    </div>
  );
};

export default ContactCard;
