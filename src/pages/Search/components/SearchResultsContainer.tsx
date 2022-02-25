import React from "react";
import SearchResultsItem from "./SearchResultsItem";

interface ItemShape {
  id: number;
  name?: string;
  title?: string;
  poster_path?: string | null;
  media_type: string;
}

interface Props {
  data: ItemShape[];
}

const SearchResultsContainer: React.FC<Props> = ({ data }) => {
  return (
    <div className="row gy-4">
      {data.map((item) => (
        <SearchResultsItem {...item} />
      ))}
    </div>
  );
};

export default SearchResultsContainer;