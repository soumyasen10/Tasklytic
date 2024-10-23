import Link from "next/link"

export const Banner=()=>{
    return(
        <div className="py-3 text-center bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)]">
            <div className="container">
                <p><span className="font-medium hidden sm:inline">Intoducing a completely redesign interface- </span>
                <Link href='#' className="underline underline-offset-4 font-medium">Explore the demo</Link>
                </p>
        </div>
        </div>
    )
}