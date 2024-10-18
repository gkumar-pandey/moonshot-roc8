import { useEffect } from "react";
import EmailCard from "../email-card/EmailCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchEmails } from "../../store/features/emailSlice";
import EmailBody from "../email-body/EmailBody";
import { filterEmails } from "../../utils";

const EmailList = () => {
  const { emails, isLoading, error, filterBy, selectedEmail, currPage } =
    useAppSelector(state => state.emails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEmails(currPage));
  }, [currPage]);

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
              <EmailCard key={email.id} {...email} />
            ))}
          </div>
          {selectedEmail && (
            <div className={`w-3/5`}>
              <EmailBody />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmailList;
