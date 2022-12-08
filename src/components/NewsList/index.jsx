import News from "../News";
import { NewsListContainer, NewsListItem } from "./styles";

export default function NewsList({ data, loading }) {
  if (!data.length && !loading) {
    return <span>No News to Display</span>;
  }
  if (loading) {
    return <h1>LOADING</h1>;
  }
  return (
    <NewsListContainer>
      {data.map(({ id, ...newsData }) => (
        <NewsListItem>
          <News {...newsData} />
        </NewsListItem>
      ))}
    </NewsListContainer>
  );
}
