import React from "react";
import Avatar from "../avatar/Avatar";
import { formatTimestamp } from "../../utils";

const EmailCard = ({}) => {
  const email = {
    id: "1",
    from: {
      email: "bounced@flipkart.com",
      name: "bounced",
    },
    date: 1582729505000,
    subject: "Lorem Ipsum",
    short_description:
      "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
  };

  return (
    <div className="flex flex-row gap-4 cursor-pointer rounded-lg px-6 py-4 border border-[var(--border-color)] text-[var(--text-color)]">
      <Avatar name={email?.from.name} />
      <div>
        <p>
          <span>From: </span>
          <strong> {email.from.name}</strong>
          <strong> {`<${email.from.email}>`}</strong>
        </p>
        <p>
          <span>Subject </span>
          <strong>{email.subject}</strong>
        </p>
        <p className="py-2">{email.short_description}</p>
        <p>{formatTimestamp(email.date)}</p>
      </div>
    </div>
  );
};

export default EmailCard;
