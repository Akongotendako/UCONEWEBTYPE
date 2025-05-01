import { Textarea } from "@chakra-ui/react";

interface TextAreaProps {
  onChange: (value: string) => void;
  value: string;
}

const TextArea = (props: TextAreaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    props.onChange(value);
  };
  return (
    <Textarea
      _active={{ borderColor: "#FFFFFFB3" }}
      borderColor={"#FFFFFF80"}
      h={28}
      value={props.value}
      size={"md"}
      scrollbar={"hidden"}
      color={"#FFF"}
      resize={"none"}
      placeholder="Share your thoughts..."
      onChange={handleChange}
    />
  );
};

export default TextArea;
