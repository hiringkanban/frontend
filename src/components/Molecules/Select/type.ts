export type valueT = string | number;

export interface selectProps {
    options: {
        label: valueT,
        value: valueT
    }[],
    width: string,
    selectedValue: valueT,
    handleChange: React.Dispatch<React.SetStateAction<valueT>>
}