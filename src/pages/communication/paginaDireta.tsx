import { Avo } from "@/components/communication/direct/Avo";

export default function PaginaDireta (){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl mb-8">Comunicação Direta</h1>
            <Avo nome="Jurandir" sobrenome="Goulart"/>
        </div>
    )
}