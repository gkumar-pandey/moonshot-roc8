import React from "react";
import Button from "../buttons/Button";

const FilterBar = () => {
  return (
    <div>
      <div className="flex items-center gap-5 py-8">
        <span className="text-lg font-medium">Filter By:</span>
        <div>
          <Button variant="secondary">Unread</Button>
          <Button variant="secondary">Read</Button>
          <Button variant="secondary">Favorites</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
