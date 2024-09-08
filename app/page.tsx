import { TextField } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style= {{color: 'blue', fontWeight: 'bold'
      }}>
        Northeastern Circle K
      </div>

      <div>
        ethan
      </div>

      <TextField id="outlined-basic" label="text" variant="outlined" />

      
    

    </div>
  );
}
