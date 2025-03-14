import { FC } from "react";
import { WORKS } from "../../../../consts/WorksList";
import IconArrowUpright from "../../../../assets/ic-arrow-upright.svg";

interface WorkCardProps {
  work: WORKS;
}

const WorkCard: FC<WorkCardProps> = ({ work }) => {
  return (
    <div className="flex justify-between items-center w-full border-b pb-10 border-[#C7D0D9] first:pt-0 pt-10">
      <div>
        <div className="text-[60px] font-normal pb-2">{work.title}</div>
        <div className="text-[18px] font-normal">
          {work.description.map((desc: string, index: number) => (
            <span key={index}>
              {desc} {index !== work.description.length - 1 && " - "}
            </span>
          ))}
        </div>
      </div>
      <div className="border border-[#3C3D3E] rounded-full p-10 hover:bg-[#0B0C0E] group transition-all duration-300 cursor-pointer">
        <img
          className="w-6 h-6 transition-all duration-300 group-hover:invert"
          src={IconArrowUpright}
          alt="arrow up right icon"
        />
      </div>
    </div>
  );
};

export default WorkCard;
