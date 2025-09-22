import Link from "next/link"




export default function ProjectCard({year, link, description, name}: {year: number, link: string, description: string, name:string}){
    return(
        <>
        <div className="flex flex-col gap-2 m-4 p-8 bg-blue-200/40 rounded-md border border-blue-700/25 w-fit  h-fit ">
            <div className="text-md bold">{year}</div>
           <h1 className="text-purple-700 text-2xl bold">{name}</h1>
            <div className="w-fit">{description}</div>
           <Link href={link} className="p-2 w-fit bg-blue-300/35 rounded-lg "> source</Link>
        </div>
        </>
    )
}