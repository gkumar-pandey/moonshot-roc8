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
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  //** Fetch selected email body data and update email body state */
  const fetchEmailBody = async () => {
    try {
      setLoading(true);
      const data = await fetchEmailBodyService(selectedEmail?.id);

      setEmailBody(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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
    <article className="border border-[var(--border-color)] w-full rounded-md p-6 mr-4 bg-white gap-4 flex flex-row">
      <Avatar name={selectedEmail?.from.name} />
      <section className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-between w-full">
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
        <div className="mt-4 mb-6">
          {isLoading ? (
            <h2 className="text-xl font-semibold text-center">Loading...</h2>
          ) : (
            <>
              <p
                dangerouslySetInnerHTML={{
                  __html: String(emailBody?.body),
                }}></p>
            </>
          )}
        </div>
      </section>
    </article>
  );
};

export default EmailBody;
