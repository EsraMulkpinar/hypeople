import { Button } from "antd";

interface Props {
  icon: string;
  onclick: React.MouseEventHandler<HTMLElement> | undefined
  title:string
}
const LightBlueButton = ({ icon, onclick , title }: Props) => {
  return (
    <Button
      className="flex justify-between space-x-[10px] 
  items-center bg-softBlue text-bluePrimary border-none "
      onClick={onclick}
    >
      <span>{title}</span>
      <span className="ml-auto flex items-center">
        <img src={icon} alt="down" />
      </span>
    </Button>
  );
};

export default LightBlueButton;
