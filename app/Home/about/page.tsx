import Image from "next/image";
import Link from "next/link";
import ListComponent from "../../ui/Home/ListComponent";
import ListItem from "../../ui/Home/ListItem";

export default function Page() {
  return (
    <>
      <div className="m-10 flex flex-col items-center justify-center text-black gap-5 ">
        <div className="m-5 text-5xl text-bold">About Me</div>
        <div className="flex gap-15 w-[50%]">
          <div>
            i a stoic. i like reading poems and playig games, i can dev websites
            with html, javascript and their framworks. ofcourse this isnt the
            end, i will update ts later. on this site you will find the{" "}
            <Link href={"Home/projects"} className="text-purple-500">
              projects
            </Link>{" "}
            i have done during the course of my journey. i aslo love writing oso
            i write about the technical parts of the things i build on my{" "}
            <Link href={"/blog"} className="text-purple-500">
              blog
            </Link>{" "}
            do well to check it up some time. this site has been inspired by{" "}
            <a
              href={"https://www.taniarascia.com/"}
              className="text-purple-500"
            >
              tiana.dev
            </a>
          </div>
          <Image
            src={"/pm_1729805861418_cmp.jpg"}
            alt="my picture"
            height={500}
            width={250}
          ></Image>
        </div>

        <div className=" mt-10 flex flex-col justify-start gap-5 w-[50%]">
          <ListComponent
            title="Contacts"
            smDesc="you can reachout to me on these lines"
          >
            <ListItem item="+2349020131983" />
            <ListItem item="+2347061905772" />
            <ListItem
              item={
                <a
                  href="https://sugbohoaugustine@gmail.com"
                  className="text-purple-500"
                >
                  ugbohoaugustine@gmail.com
                </a>
              }
            />
            <ListItem
              item={
                <a
                  href="https://github.com/KPAMOR-99"
                  className="text-purple-500"
                >
                  github
                </a>
              }
            />
          </ListComponent>

          <ListComponent
            title="Things I'm doing now"
            smDesc="my current activities are"
          >
            <ListItem item="working on an internship at seedbuilders innovation hub" />
            <ListItem item="working as the speaker of the benues childrens parliament" />
            <ListItem item="readng some self help books,lol" />
            <ListItem item="building this site" />
          </ListComponent>
        </div>
      </div>
    </>
  );
}
