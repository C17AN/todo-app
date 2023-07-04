import { Tag } from "@/models/Todo";
import styled from "@emotion/styled";
import colors from "material-colors";
import { ComponentProps } from "react";
import Select from "react-select";

interface Props extends ComponentProps<typeof Select> {
  tagList: Tag[];
}

const DEFAULT_PLACEHOLDER = "태그를 선택해 주세요";

const TagSelect = ({ placeholder = DEFAULT_PLACEHOLDER, ...rest }: Props) => {
  const TAG_LIST: Array<{ label: Tag; value: Tag }> = [
    { label: "계획", value: "계획" },
    { label: "약속", value: "약속" },
    { label: "일정", value: "일정" },
  ];

  return (
    <CustomSelect
      isMulti
      placeholder={placeholder}
      options={TAG_LIST}
      {...rest}
    />
  );
};

const CustomSelect = styled(Select)`
  &::placeholder {
    color: ${colors.grey[500]};
    font-size: 0.75rem;
  }
`;

export default TagSelect;
