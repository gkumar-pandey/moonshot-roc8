import { useEffect, useState } from "react";
import Avatar from "../avatar/Avatar";
import { EmailBodyType } from "../../types/EmailTypes";
import { fetchEmailBodyService } from "../../services/emailServices";
import Button from "../buttons/Button";
import { formatTimestamp } from "../../utils";
import { updateEmail } from "../../store/features/emailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const EmailBody = () => {
  const { selectedEmail } = useAppSelector(state => state.emails);
  const [emailBody, setEmailBody] = useState<EmailBodyType | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();

  //** Fetch selected email body data and update email body state */
  const fetchEmailBody = async () => {
    try {
      const data = await fetchEmailBodyService(selectedEmail?.id);
      setEmailBody(data);
    } catch (error) {
      console.log(error);
    }
  };

  //* Toggle Mark as Fav btn */
  const markAsFavoriteBtnHandler = () => {
    if (!selectedEmail?.isFavorite) {
      dispatch(
        updateEmail({ id: selectedEmail?.id, change: { isFavorite: true } })
      );
    } else {
      dispatch(
        updateEmail({ id: selectedEmail.id, change: { isFavorite: false } })
      );
    }
  };

  useEffect(() => {
    fetchEmailBody();
  }, [selectedEmail]);

  return (
    <article className="border border-[var(--border-color)] rounded-md p-6 mr-4 bg-white gap-4 flex flex-row">
      <Avatar name={selectedEmail?.from.name} />
      <section className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-3xl font-semibold text-[var(--text-color)]">
            {selectedEmail?.subject}
          </h2>
          <Button onClick={markAsFavoriteBtnHandler} variant="primary">
            {selectedEmail?.isFavorite
              ? "Remove from Favorite"
              : " Mark as Favorite"}
          </Button>
        </div>
        <p>{formatTimestamp(selectedEmail?.date)}</p>
        <section className="mt-4 mb-6">
          <p
            dangerouslySetInnerHTML={{
              __html: String(emailBody?.body),
            }}></p>
        </section>
      </section>
    </article>
  );
};

export default EmailBody;
