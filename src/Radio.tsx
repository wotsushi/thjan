import styled from "styled-components";

export default function Radio({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <RadioLabel>
      <RadioInput {...props} />
      {label}
    </RadioLabel>
  );
}

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 20px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #bbb;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease;
  margin: 0;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    background-color: #4f46e5;
  }

  &:checked {
    border-color: #4f46e5;
  }

  &:checked::before {
    transform: scale(1);
  }
`;
