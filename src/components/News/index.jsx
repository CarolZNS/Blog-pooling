import { useState } from "react";

import {
  NewsContainer,
  NewsBody,
  NewsBodyContainer,
  NewsFooter,
  NewsTitle,
} from "./styles";

export default function News({ title, author, body, date }) {
  const [showAll, setShowAll] = useState(false);

  const handleEnterKeyClick = (event) => {
    if (event.key === "Enter") {
      setShowAll((prev) => !prev);
    }
  };
  return (
    <NewsContainer
      onClick={() => setShowAll((prev) => !prev)}
      tabIndex={0}
      onKeyDown={handleEnterKeyClick}
    >
      <NewsTitle>{title}</NewsTitle>
      <NewsBodyContainer showAll={showAll}>
        <NewsBody>{body}</NewsBody>
      </NewsBodyContainer>
      <NewsFooter>
        <span aria-label="Author">
          <strong>Author: </strong>
          {author}
        </span>
        <span aria-label="Date">
          <strong>Date: </strong>
          {date}
        </span>
      </NewsFooter>
    </NewsContainer>
  );
}
