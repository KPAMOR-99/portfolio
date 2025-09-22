import ProjectCard from "../../ui/projects/projectCard";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-2">
        <h1 className="text-4xl m-10">Projects</h1>
        <h1 className="text-l" >these are some of projects ive done over the years </h1>
        <div className="grid grid-cols-2 w-[50%] mt-5">
             <ProjectCard name="Expense Tracker" year={2025} link="https://github.com/KPAMOR-99/expenseTracker" description="simple wed app for tracking income, expenses and net income/loss "/>
             <ProjectCard name="Crit_ur_club" year={2025} link="https://github.com/KPAMOR-99/crit_ur_club" description="django based web app for sharing your opinon about your favourite clubs "/>
             <ProjectCard name="FootballSearch" year={2025} link="https://github.com/KPAMOR-99/footballSearch" description="football search app powered by react for stats and so on"/>
       
        

        </div>
     
      </div>
    </>
  );
}
