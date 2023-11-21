import Image from "next/image";

export default function Background() {
  return (
    <Image 
        src="https://i.pinimg.com/originals/c1/ff/f2/c1fff28a143cc9192e8d5d0f646f5126.jpg"
        fill
        alt="Background Starwars"            
        className="-z-50 opacity-20 object-cover"
    /> 
 )
}
