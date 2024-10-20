import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Container } from "../../EmailApp";
import { setFilter } from "../../../store/features/dashboard/dataSlice";
import Button from "../Button/Button";
import DateRangeSelector from "../DateRangePicker/DateRangePicker";
import { useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";

// Constants
export const BETWEEN15TO25 = "15-25";
export const GREATEETHAN25 = " > 25";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filters } = useAppSelector(state => state.data);
  const dispatch = useAppDispatch();

  const handleOnselect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    dispatch(setFilter({ [name]: value }));

    setSearchParams(prevParams => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(name, value);
      return newParams;
    });
  };

  const clearFilterHandler = () => {
    dispatch(
      setFilter({
        age: "",
        gender: "",
        startDate: "",
        endDate: "",
      })
    );
    setSearchParams(new URLSearchParams());
  };

  return (
    <Container>
      <div className="flex flex-row justify-between py-4">
        <h2 className="text-2xl font-bold">Filter</h2>
        <div className="flex flex-row gap-4">
          <div>
            <DateRangeSelector />
          </div>
          <div>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleOnselect}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
              <option value={""}>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <select
              name="age"
              value={filters.age}
              onChange={handleOnselect}
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
              <option value="">Select Age</option>
              <option value={BETWEEN15TO25}>{BETWEEN15TO25}</option>
              <option value={GREATEETHAN25}>{GREATEETHAN25}</option>
            </select>
          </div>
          <div>
            <Button variant="primary" onclick={clearFilterHandler}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
