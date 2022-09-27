import styled from '@emotion/styled';

export const LabelFilter = styled.label`
  display: inline-flex;
  flex-direction: column;  
  padding: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const InputFilter = styled.input`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes[2]}px;
  padding: ${p => p.theme.space[2]}px;
  background-color: #f2fff0;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.middle};

  &:hover {
    background-color: #dafbf3;
  }
`;