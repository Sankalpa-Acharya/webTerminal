import { IconNewSection, IconSearch, IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { useState, useRef, useEffect } from 'react';
import commandMaker from '../helper/commandMaker';

type Props = {};
type Output = {
    type: string;
    msg: JSX.Element;
};

export default function Terminal({ }: Props) {
    const [input, setInput] = useState('');
    const [outputs, setOutputs] = useState<Output[]>([]);
    const outputContainerRef = useRef<HTMLDivElement | null>(null);

    const submitCommand = (e: string) => {
        if (e === 'Enter') {
            if (input == 'clear') {
                setOutputs([]);
                setInput('');
            }
            else {
                const result: Output = commandMaker(input);
                setOutputs((prevOutputs: Output[]) => [...prevOutputs, result]);
                setInput('')
            }
        }
    };

    useEffect(() => {
        if (outputContainerRef.current) {
            outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
        }
    }, [outputs]);

    return (
        <div className="lg:w-[80%] md:w-[80%] xl:w-[50%] w-[95%] grid grid-rows-[8%,92%] h-[60%]">
            <div className="w-full border-gray-600 border bg-primary py-1 px-1 items-center flex justify-between">
                <div>
                    <IconNewSection size={18} className='cursor-pointer' />
                </div>
                <div className=''>
                    <p className='text-sm'>sankalpa@sankalpa:~</p>
                </div>
                <div className='flex gap-3'>
                    <IconSearch className='cursor-pointer' size={15} />
                    <IconAdjustmentsHorizontal className='cursor-pointer' size={15} />
                    <div className='bg-red-800 w-3 h-3 cursor-pointer rounded-full'></div>
                    <div className='bg-green-800 w-3 h-3 cursor-pointer rounded-full'></div>
                    <div className='bg-yellow-400 w-3 h-3 cursor-pointer rounded-full'></div>
                </div>
            </div>
            <div className='bg-[#282a36df] overflow-auto' ref={outputContainerRef}>
                <div className='flex flex-col'>
                    <div>
                        {outputs.map((item, index) => (
                            item.type === "pre" ? <pre className='font-mono break-words' key={index}>{item.msg}</pre> : <p className='font-mono' key={index}>{item.msg}</p>
                        ))}
                    </div>
                    <div className='flex'>
                        <p className='text-green-300  font-mono'>sankalpa@sankalpa:<span className='text-indigo-500'>~</span>$</p>
                        <input
                            onChange={(e) => { setInput(e.target.value) }}
                            onKeyDown={(e) => { submitCommand(e.key) }}
                            value={input}
                            type="text"
                            autoFocus={true}
                            className=' ml-2 h-5 md:w-[75%] w-[70%]  outline-none text-white bg-[#282a3600]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
