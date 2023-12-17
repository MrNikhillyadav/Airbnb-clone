import { IoAdd } from "react-icons/io5";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaWifi, FaDog, FaBath,FaParking } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdRadio } from "react-icons/md";

export default function Perks ( {selected, onChange}) {
  return (
                <>
                            
                    <label className='flex items-center  gap-2  p-4 rounded-md border border-gray-300  justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'> <FaWifi className='text-lg' />Free Wifi </span>
                    </label>

                    <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'>
                            <FaDog  className='text-lg'/>Pets allowed</span>
                    </label>

                    <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'><TbAirConditioning className='text-lg' />Central air conditioning</span>
                    </label>

                    <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'><FaBath className='text-lg' />Bath service </span>
                    </label>
                    
                    <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'><MdRadio   className='text-lg'/>Radio available</span>
                    </label>

                    <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'><FaParking  className='text-lg'/>Free Parking spot</span>
                    </label>

                    <label className='flex items-center gap-2  p-4 rounded-md border border-gray-300 justify-center' >
                        <input type="checkbox" />
                        <span className='text-xs flex items-center gap-1'><PiTelevisionSimpleFill  className='text-lg'/>TV service</span>
                    </label>
                            
                </>
  );
}

