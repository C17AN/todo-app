import styled from "@emotion/styled";
import colors from "material-colors";
import { ReactNode, useState } from "react";
import { HiSortDescending } from "@react-icons/all-files/hi/HiSortDescending";

type Props<T> = {
  icon?: ReactNode;
  onClick: () => void;
  toggleOptions: T[];
};

const ToggleButton = ({ icon, onClick, toggleOptions }: Props<string>) => {
  const [option, setOption] = useState(toggleOptions[0]);

  const handleClick = () => {
    if (option === toggleOptions[0]) {
      setOption(() => toggleOptions[1]);
    }
    if (option === toggleOptions[1]) {
      setOption(() => toggleOptions[0]);
    }
    onClick();
  };

  return (
    <Container onClick={handleClick}>
      {icon && <HiSortDescending />}
      {option === toggleOptions[0] ? (
        <div>{toggleOptions[0]}</div>
      ) : (
        <div>{toggleOptions[1]}</div>
      )}
    </Container>
  );
};

const Container = styled.button`
  margin-left: auto;
  font-size: 0.625rem;
  min-width: 3rem;
  border: 0;
  outline: 0;
  padding: 4px 8px;
  font-weight: 600;
  border-radius: 4px;
  background: ${colors.grey["200"]};
  color: ${colors.darkText.secondary};
`;

export default ToggleButton;
