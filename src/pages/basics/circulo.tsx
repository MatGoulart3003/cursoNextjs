import { Circle } from "@/components/basics/Circle";

export default function Circulos(){

    return (
        <div className="flex bg-slate-100 items-center justify-around gap-5 h-screen">
            <Circle texto='Corinthians'/>
            <Circle texto='Corinthians'/>
            <Circle texto="corinthians" quasePerfeito/>
        </div>
    )

}