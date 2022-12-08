import styled, { css } from "styled-components";

const NewsContainer = styled.article`
  display: "flex";
  flex-direction: "column";
  cursor: pointer;
  border-radius: 8px;
  padding: 8px;
  overflow: hidden;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const NewsTitle = styled.h2`
  text-align: left;
  margin: 0;
`;
const NewsFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewsBody = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 0;
`;
const NewsBodyContainer = styled.div`
  ${({ showAll }) => {
    if (showAll)
      return css`
        display: block;
      `;
    return css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    `;
  }}
`;

export { NewsContainer, NewsBodyContainer, NewsTitle, NewsFooter, NewsBody };
