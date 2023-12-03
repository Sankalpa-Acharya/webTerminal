import React from 'react';
import {
  IconGridDots,
  IconBattery1,
  IconVolume,
  IconWifi,
  IconSettings
} from '@tabler/icons-react';
import vscode from '../assets/img/vscode.png';
import files from '../assets/img/files.png';

type Props = {};

const Footer: React.FC<Props> = () => {
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase();
  };

  const currentDate = new Date();

  return (
    <div className="bg-[#282A36] px-3 flex items-center justify-between text-white">
      <div className="flex items-center gap-5">
        <IconGridDots className="w-8 h-8 cursor-pointer hover:bg-[#393a45]" />
        <img src={vscode} className="w-8 h-8 cursor-pointer hover:bg-[#393a45]" alt="" />
        <img src={files} className="w-9 h-9 cursor-pointer hover:bg-[#393a45]" alt="" />
      </div>

      <div className="flex mb-1 gap-3 items-center">
        <IconSettings size={18} className="mr-5 cursor-pointer" />
        <div className="flex gap-2 hover:rounded-3xl p-2 items-center hover:bg-[#4c4d55] cursor-pointer">
          <p className="text-[13px]">{currentDate.toLocaleString('default', { month: 'short' })} {currentDate.getDate()}</p>
          <p className="text-[13px]">{formatTime(currentDate)}</p>
        </div>
        <div className="flex gap-3 cursor-pointer p-2 hover:rounded-3xl items-center hover:bg-[#4c4d55]">
          <IconWifi size={20} />
          <IconVolume size={20} />
          <IconBattery1 size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
