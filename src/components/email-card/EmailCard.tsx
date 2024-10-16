import { FC } from "react";
import Avatar from "../avatar/Avatar";
import { formatTimestamp } from "../../utils";
import { Email } from "../../types/EmailTypes";

interface EmailCardProps extends Email {
  onClick: (id: string) => void;
  isSelected?: boolean;
}

const EmailCard: FC<EmailCardProps> = ({
  id,
  from,
  date,
  subject,
  short_description,
  onClick,
  isSelected,
  isFavorite,
  isRead,
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`flex flex-row gap-4 cursor-pointer  rounded-lg px-6 py-4 border border-[var(--border-color)] text-[var(--text-color)] ${
        isSelected && "border border-[var(--primary-color)]"
      } ${isRead ? "bg-[var(--read-bg-color)]" : "bg-white"}`}>
      <Avatar name={from.name} />
      <div>
        <p>
          <span>From: </span>
          <strong> {from.name}</strong>
          <strong> {`<${from.email}>`}</strong>
        </p>
        <p>
          <span>Subject </span>
          <strong>{subject}</strong>
        </p>
        <p className="py-2 line-clamp-1 ">{short_description}</p>
        <p>{formatTimestamp(date)}</p>{" "}
        <span className="text-lg text-[var(--primary-color)]">
          {isFavorite && "Favorite"}
        </span>
      </div>
    </div>
  );
};

export default EmailCard;
