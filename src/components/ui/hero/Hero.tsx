import duke from '../../../assets/IMG.png'
import dog from '../../../assets/Dog.png'
import { DUK, E } from '../../icons/UIIcons'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
export const Hero = () => {
    return (
        <>

            <div className=" fixed bottom-72  2xl:bottom-52  left-[45%] -translate-x-1/2">
                <div className="relative">
                    <div className="w-[60vw] md:w-[55vh] lg:w-[53vh] xl:w-[60vh] 2xl:w-[75vh] aspect-[16/9]">
                        <div className="absolute inset-0 z-0 ">
                            <DUK className="w-full h-full text-white fill-current" />
                        </div>
                    </div>
                    <div className="absolute md:-left-25 -left-10 xl:-left-24 2xl:-left-16  md:top-2  top-0">
                        <div className="bg-black/10 p-2 -rotate-8 rounded-xl backdrop-blur-xs">
                            <p className="font-[KoHo] font-bold text-xs md:text-sm ">Where Cartoons Come to Life</p>
                        </div>
                    </div>

                    <div className=" absolute -right-13 sm:-right-32 lg:-right-30 md:-right-32 xl:-right-28 2xl:-right-38 md:-bottom-12 sm:-bottom-8 -bottom-4">
                        <img src={duke} className="max-w-[20vh] sm:max-w-[38vh] md:max-w-[35vh] lg:max-h-[52vh] xl:max-h-[70vh] 2xl:max-w-[70vh]" />
                        <div className='absolute -z-10 bottom-10 -left-10 translate-x-1/2 '>
                            <div className='bg-black/60 h-12 w-30 rotate-45 blur-2xl  rounded-full'></div>
                        </div>
                    </div>

                    <div className=' absolute z-20 md:-right-36 sm:-right-40 2xl:-right-46 -right-21 md:bottom-14 sm:bottom-16 bottom-0'>
                        <E className='size-30 sm:size-45 md:size-50 2xl:size-60 text-white fill-current' />
                        <div className=' absolute md:right-3 2xl:right-8 right-0 md:bottom-0 -bottom-5'>
                            <div className="bg-black/10 p-2 -rotate-8 rounded-xl backdrop-blur-xs">
                                <p className="font-[KoHo] font-bold text-xs md:text-sm">Glad it helped!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' fixed -right-10 bottom-36 md:bottom-48 '>
                <div className='relative flex items-center'>

                    <div className='flex justify-end items-center gap-2 bg-black/10 backdrop-blur-md  rounded-full p-2 pr-18 pl-18'>
                        <p className="text-sm font-[KoHo] font-bold text-white">Chat with us</p>
                        <ChevronRightIcon className='size-5 text-zinc-200' />
                    </div>

                    <div className='absolute left-0 -bottom-13 -translate-y-1/2'>
                        <img
                            src={dog}
                            className='h-24 w-auto object-contain '
                            alt="dog mascot"
                        />
                    </div>

                </div>

            </div>
            <div className="fixed md:bottom-5 bottom-0 left-1/2 -translate-x-1/2 w-full md:max-w-[700px] p-4">
                <div className="flex flex-col-reverse gap-1.5 md:flex-row md:justify-between items-center ">
                    <p className="text-md md:text-xl font-[KoHo] font-bold  text-balance">Bring Your Imagination to Life with Stunning Cartoon Animation</p>
                    <button type="button" className="cursor-pointer bg-black/10 rounded-2xl px-8 py-2 text-md md:text-xl font-bold font-[KoHo] whitespace-nowrap hover:scale-105 transition duration-150">Start Your Project</button>
                </div>
            </div>
        </>
    )
}