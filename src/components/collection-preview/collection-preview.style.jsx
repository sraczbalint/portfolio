import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  margin-top: 50px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;