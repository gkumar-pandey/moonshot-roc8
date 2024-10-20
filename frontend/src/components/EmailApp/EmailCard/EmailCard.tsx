import { FC } from "react";
import Avatar from "../avatar/Avatar";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Email } from "../../../types/EmailTypes";
import {
  setSelectedEmail,
  updateEmail,
} from "../../../store/features/emailSlice";
import { formatTimestamp } from "../../../utils";

const EmailCard: FC<Email> = ({
  id,
  from,
  date,
  subject,
  short_description,
  isFavorite,
  isRead,
}) => {
  const { selectedEmail } = useAppSelector(state => state.emails);
  const dispatch = useAppDispatch();

  // check current email body is open
  const isCurrEmailBodyOpen = selectedEmail?.id === id;

  // update selected email state
  const handleOpenEmailBody = () => {
    const currEmail = {
      id,
      from,
      date,
      subject,
      short_description,
      isFavorite,
      isRead,
    };
    dispatch(setSelectedEmail(currEmail));
    dispatch(updateEmail({ id: id, change: { isRead: true } }));
  };

  return (
    <div
      onClick={handleOpenEmailBody}
      className={`flex flex-row gap-4 cursor-pointer  rounded-lg px-6 py-4 border border-[var(--border-color)] text-[var(--text-color)] ${
        isCurrEmailBodyOpen && "border border-[var(--primary-color)]"
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
        <p className="flex items-center gap-2">
          <span>{formatTimestamp(date)}</span>
          <span className="text-base font-medium text-[var(--primary-color)]">
            {isFavorite && "Favorite"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmailCard;
