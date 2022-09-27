import styled from '@emotion/styled';

export const ItemContact = styled.li`
  display: flex;
      align-items: center;
  margin-left: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes[3]}px;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ButtonContact = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.middle};
  background-color: #ee9595;
  cursor: pointer;

  &:hover {
    background-color: #f17f7f;
  }
`;
