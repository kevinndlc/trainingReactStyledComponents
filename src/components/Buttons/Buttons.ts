import styled from 'styled-components';

export const UnstyledButton = styled.button`
  display: ${(props: any) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

const BaseButton = styled(UnstyledButton)`
  padding: 0.5rem 1rem;
  border: 2px solid transparent;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: var(--primary);
  color: var(--white);
`;

export const OutlineButton = styled(BaseButton)`
  background-color: var(--white);
  color: var(--primary);
  border-color: var(--primary);
`;