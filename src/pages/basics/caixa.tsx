import { Box } from "@/components/basics/Box";

export default function Caixa(){

    return(
        <div className="flex p-2 gap-7">
         <Box>1</Box>
         <Box>2</Box>
         <Box>
            <ul>
                <li>Item 1</li>                
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
         </Box>
        </div>
        
    )
}