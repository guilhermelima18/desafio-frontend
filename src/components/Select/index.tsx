import { Dispatch, SelectHTMLAttributes, SetStateAction } from "react";
import { GroupsProps } from "../../types/groups";
import { SelectContainer } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  groups: GroupsProps[];
  selectGroup: string;
  setSelectGroup: Dispatch<SetStateAction<string>>;
}

export const Select = ({
  labelText,
  groups,
  selectGroup,
  setSelectGroup,
  ...rest
}: SelectProps) => {
  return (
    <SelectContainer>
      <label htmlFor="">{labelText}</label>
      <select
        value={selectGroup}
        onChange={(e: any) => setSelectGroup(e.target.value)}
        {...rest}
      >
        <option value="" disabled>
          Selecione
        </option>
        {groups.map(({ id, description }) => (
          <option key={id} value={id}>
            {description}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};
