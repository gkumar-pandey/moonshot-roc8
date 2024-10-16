import React, { useEffect, useState } from "react";
import EmailCard from "../email-card/EmailCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchEmails, updateEmail } from "../../store/features/emailSlice";
import EmailBody from "../email-body/EmailBody";
import { Email } from "../../types/EmailTypes";
import { filterEmails } from "../../utils";

const EmailList = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | undefined>(
    undefined
  );
  const { emails, isLoading, error, filterBy } = useAppSelector(
    state => state.emails
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmails());
  }, []);

  const selectEmailHandler = (id: string) => {
    const email = emails?.find(email => email.id == id);
    dispatch(updateEmail({ id: id, change: { isRead: true } }));
    setSelectedEmail(email);
  };

  const filteredEmails = filterEmails(emails, filterBy);

  return (
    <div>
      {isLoading ? (
        <p>Loading..</p>
      ) : (
        <div className="flex flex-row gap-5">
          <div
            className={`flex flex-col gap-4 ${
              selectedEmail ? "w-2/5" : "w-full"
            }`}>
            {filteredEmails?.map((email, idx) => (
              <EmailCard
                onClick={selectEmailHandler}
                key={email.id}
                {...email}
                isSelected={selectedEmail?.id === email.id}
              />
            ))}
          </div>
          {selectedEmail && (
            <div className={`w-3/5`}>
              <EmailBody email={selectedEmail} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailList;
