// this contains list items 

export default function ListComponent({ children, title, smDesc}:{ children:React.ReactNode, title:string, smDesc:string}){
    return(
        <>
        <div className="m-5">
            <h1 className="text-4xl mb-2">{title}</h1>
            <hr className="border-b border-blue-300/50 shadow-md mb-5" />
            <p className="mb-5 text-xl">{smDesc}</p>
            <ul className="list-disc list-outside">
              {children}
            </ul>
          </div>
        </>
    )
}