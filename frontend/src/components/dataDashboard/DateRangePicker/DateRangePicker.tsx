import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import "react-calendar/dist/Calendar.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setFilter } from "../../../store/features/dashboard/dataSlice";
import { extractStartAndEndDate } from "../../../utils/dataDashboard";
import { useSearchParams } from "react-router-dom";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateRangeSelector = () => {
  const { data } = useAppSelector(state => state.data);
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, onChange] = useState<Value>([new Date(), new Date()]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { startDate, endDate } = extractStartAndEndDate(data);

    onChange([startDate, endDate]);
  }, [data]);

  useEffect(() => {
    if (Array.isArray(value) && value[0] && value[1]) {
      const startDate = new Date(value[0]).toISOString();
      const endDate = new Date(value[1]).toISOString();
      setSearchParams(prevParams => {
        const newParams = new URLSearchParams(prevParams);
        newParams.set("startDate", startDate);
        newParams.set("endDate", endDate);
        return newParams;
      });
      dispatch(
        setFilter({
          startDate: new Date(value[0])?.toISOString(),
          endDate: new Date(value[1])?.toISOString(),
        })
      );
    }
  }, [value]);
  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} />
    </div>
  );
};

export default DateRangeSelector;
