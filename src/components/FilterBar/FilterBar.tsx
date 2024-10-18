import { setFilterBy } from "../../store/features/emailSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../buttons/Button";

const FilterBar = () => {
  const { filterBy } = useAppSelector(state => state.emails);
  const dispatch = useAppDispatch();
  const filterBtns = ["All", "Unread", "Read", "Favorite"];

  return (
    <div>
      <div className="flex items-center gap-5 py-8">
        <span className="text-lg font-medium">Filter By:</span>
        <div>
          {filterBtns.map((ele, idx) => (
            <Button
              onClick={() => dispatch(setFilterBy(ele))}
              className={`${
                filterBy === ele && "bg-[var(--filter-btn-color)]"
              }`}
              key={idx}
              variant="secondary">
              {ele}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
