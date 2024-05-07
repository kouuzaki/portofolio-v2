import { Hero } from "@/components/root/Home/Hero";
import { Skills } from "@/components/root/Home/Skills";
import { Timeline } from "@/components/timeline";

const TimeLineData = [
  {
    title: "PT. Yumas Nida Corp",
    jobdesk: "Fullstack Web Developer",
    description: `
    I am an experienced fullstack web developer, focused on building and developing applications for the food
  and beverage industry. Currently, I am involved in a project called "De Taste Food", where I am responsible
  for structuring and managing the technology infrastructure.`,
    date: "Oct Juli 2023 - December 2023",
  },
  {
    title: "Tim Unit Production SMK Telkom Jakarta",
    jobdesk: "Frontend Web Developer",
    description: `
    Prepare and present a cutting-edge website that not only prioritizes seamless accessibility for users but also
    provides meaningful utility for their online experience.`,
    date: "March 2022 - May 2024",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <section className="gradient-dot-line-small border-t-2">
        <Timeline title="Work Experiences" data={TimeLineData} />
        <div className="gradient-backdrop-small"></div>
      </section>
      {/* <div className="gradient-dot-line-small">
        <div className="gradient-backdrop-small"></div>
        <h1>Hai</h1>
      </div> */}
    </>
  );
}
