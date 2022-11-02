import styled from '@emotion/styled';

export const LabelForm = styled.label`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[2]}px;
  padding: ${p => p.theme.space[2]}px;
  background-color: #f2fff0;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.middle};
  outline: none;

  &:hover {
    background-color: #dafbf3;
  }
`;

export const FormSection = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: baseline;
  padding: ${p => p.theme.space[3]}px;
`;

export const ButtonForm = styled.button`
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.middle};
  background-color: #00ff00;
  cursor: pointer;

  &:hover {
    background-color: #61db04;
  }
`;
