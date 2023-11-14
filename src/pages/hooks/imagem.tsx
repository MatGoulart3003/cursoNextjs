import { RandomImage } from "@/components/hooks/RandomImage";

export default function Imagem(){
    return(
        <div className="flex justify-center items-center gap-5 h-screen">
            <RandomImage texto="abstract"/>
            <RandomImage texto="city"/>
            <RandomImage texto="person"/>
        </div>
    )
}