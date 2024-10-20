import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { updateCurrPage } from "../../../store/features/emailSlice";

const Pagination = () => {
  const { currPage, totalEmails, emails } = useAppSelector(
    state => state.emails
  );
  const dispatch = useAppDispatch();

  const emailsPerPage = 10;
  const totalPages = Math.ceil(totalEmails / emailsPerPage);

  const handleNextPageBtn = () => {
    if (currPage < totalPages) {
      dispatch(updateCurrPage(currPage + 1));
    }
  };

  const handlePrePageBtn = () => {
    if (currPage > 1) {
      dispatch(updateCurrPage(currPage - 1));
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handlePrePageBtn}
        className="p-2 border border-[var(--border-color)] rounded-md">
        <IoIosArrowBack />
      </button>
      <div className="flex items-center gap-1">
        <span>
          {emails[0]?.id} - {emails[emails?.length - 1]?.id} of {totalEmails}
        </span>
      </div>
      <button
        onClick={handleNextPageBtn}
        className="p-2 border border-[var(--border-color)] rounded-md">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
