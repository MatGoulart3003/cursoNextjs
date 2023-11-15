import { Contador } from "@/components/communication/indirect/Contador";

export default function PaginaIndireta (){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl mb-8">Comunicação Indireta</h1>
            <div className="flex gap-5">
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    )
}