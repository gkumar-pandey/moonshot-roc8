import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateCurrPage } from "../../store/features/emailSlice";

const Pagination = () => {
  const { currPage, totalEmails } = useAppSelector(state => state.emails);
  const dispatch = useAppDispatch();

  const emailsPerPage = 5;
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

  const handlePageBtn = (num: number) => {
    dispatch(updateCurrPage(num));
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handlePrePageBtn}
        className="p-2 border border-[var(--border-color)] rounded-md">
        <IoIosArrowBack />
      </button>
      <div className="flex items-center gap-1">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            onClick={() => handlePageBtn(idx + 1)}
            className={`px-2 py-1 border-[var(--border-color)] font-medium text-[var(--text-color)] border rounded-md cursor-pointer ${
              currPage === idx + 1 && "bg-[var(--primary-color)] text-white"
            }`}>
            {idx + 1}
          </button>
        ))}
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
