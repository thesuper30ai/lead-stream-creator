import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import amitImg from "@/assets/team/amit.png";
import mayankImg from "@/assets/team/Mayank.png";
import praveenImg from "@/assets/team/Praveen.png";
import harshavardhanImg from "@/assets/team/Harshavardhan.png";
import chandrasekharImg from "@/assets/team/Chandrasekhar.png";
import anandImg from "@/assets/team/Anand.png";
import likhithImg from "@/assets/team/Likhith.png";
import sujeetImg from "@/assets/team/sujeet.png";
import swanandImg from "@/assets/team/swanandh.png";
import madhuImg from "@/assets/team/madhu.png";
import anushImg from "@/assets/team/Anush_raj.png";
import abhishekImg from "@/assets/team/Abhishek.png";
import azarudheenImg from "@/assets/team/Azarudheen.png";
import omsekharImg from "@/assets/team/Omsekhar.png";
import ajayImg from "@/assets/team/Ajay.png";
import amirImg from "@/assets/team/amir.png";
import devImg from "@/assets/team/Dev.png";
import hemanImg from "@/assets/team/Heman.png";
import jameerImg from "@/assets/team/jameer.png";
import mahiImg from "@/assets/team/Mahi.png";
import niranjanImg from "@/assets/team/Niranjan.png";
import rukkiniImg from "@/assets/team/Rukkini.png";
import varunImg from "@/assets/team/Varun.png";
import yaminiImg from "@/assets/team/Yamini.png";
import zaidImg from "@/assets/team/zaid.png";
const teamMembers = [
  { name: "Amit Singh", expertise: "Co-Founder", image: amitImg, card: "bg-[#FDE2E4]" },
  { name: "Mayank", expertise: "VP - Business Growth", image: mayankImg, card: "bg-[#D8F3DC]" },
  { name: "G. Chandrasekhar", expertise: "SEO Manager", image: chandrasekharImg, card: "bg-[#FFE5D9]" },
  { name: "Anand Kumar", expertise: "Performance Marketing Manager", image: anandImg, card: "bg-[#CFF7E5]" },
  { name: "Sujeet", expertise: "Project Manager", image: sujeetImg, card: "bg-[#D8F3DC]" },
  { name: "Swanand", expertise: "Project Manager", image: swanandImg, card: "bg-[#FFF3C4]" },
  { name: "Anush Raj", expertise: "Bug Developer(Code Breaker)", image: anushImg, card: "bg-[#FCE1F0]" },
  { name: "Praveen", expertise: "Senior Creative Manager", image: praveenImg, card: "bg-[#E5DEFF]" },
  { name: "Harshavardhan", expertise: "Graphic Designer", image: harshavardhanImg, card: "bg-[#D7E3FC]" },
  { name: "Dev", expertise: "Graphic Designer", image: devImg, card: "bg-[#D8F3DC]" },
  { name: "Om Sekhar Sura", expertise: "Full Stack Developer", image: omsekharImg, card: "bg-[#FFE5D9]" },
  { name: "Madhu", expertise: "SEO Expert", image: madhuImg, card: "bg-[#CFF7E5]" },
  { name: "Abhishek", expertise: "SEO Specialist", image: abhishekImg, card: "bg-[#FDE2E4]" },
  { name: "Azarudheen", expertise: "SEO Specialist", image: azarudheenImg, card: "bg-[#D8F3DC]" },
  { name: "Ajay", expertise: "SEO Specialist", image: ajayImg, card: "bg-[#CFF7E5]" },
  { name: "Varun", expertise: "Digital Marketing Executive", image: varunImg, card: "bg-[#FFE5D9]" },
  { name: "Yamini", expertise: "Digital Marketing Executive", image: yaminiImg, card: "bg-[#CFF7E5]" },
  { name: "Mahi", expertise: "Performance Marketing", image: mahiImg, card: "bg-[#FCE1F0]" },
  { name: "Niranjan", expertise: "Performance Marketing", image: niranjanImg, card: "bg-[#FDE2E4]" },
  { name: "Rukkini", expertise: "Customer Support Executive", image: rukkiniImg, card: "bg-[#D8F3DC]" },
  { name: "Zaid", expertise: "Content Writer", image: zaidImg, card: "bg-[#FCE1F0]" },
  { name: "Likhith P", expertise: "Video Editor", image: likhithImg, card: "bg-[#FCE1F0]" },
  { name: "Heman", expertise: "Video Editor", image: hemanImg, card: "bg-[#FFF3C4]" },
  { name: "Amir", expertise: "Studio Lead", image: amirImg, card: "bg-[#FCE1F0]" },
  { name: "Jameer", expertise: "Studio Staff", image: jameerImg, card: "bg-[#CFF7E5]" },

];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
    <div className={`relative aspect-[4/5] overflow-hidden ${member.card}`}>
      <img src={member.image} alt={`${member.name} at The Super 30`} width={800} height={1000} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
    </div>
    <div className="px-5 py-4">
      <div className="min-w-0"><h3 className="text-lg font-semibold text-foreground">{member.name}</h3><p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{member.expertise}</p></div>
    </div>
  </article>
);

export const TeamSection = () => (
  <section aria-labelledby="about-team-heading" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase text-foreground"><span className="h-2 w-2 rounded-full bg-brand" />Our Team</p>
        <h2 id="about-team-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Meet Our <span className="text-brand">Digital Marketing Experts</span></h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Our SEO specialists and PPC specialists work collaboratively to deliver integrated strategies for your growth.</p>
      </div>
      <Button asChild className="group h-auto rounded-full bg-brand py-1.5 pl-6 pr-1.5 text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us#contact-form-section">Get Started<span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-foreground"><ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" /></span></Link></Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map(member => <TeamCard key={member.name} member={member} />)}
      </div>
    </div>
  </section>
);
