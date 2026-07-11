import { IconType } from "react-icons";
import { 
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaDocker, FaDatabase, FaAws, FaLinux, FaRobot
} from "react-icons/fa";
import { 
  SiSpringboot, SiTailwindcss, SiTypescript, SiMysql, SiMongodb, SiFastapi, SiTensorflow, SiPytorch
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { VscTerminalBash } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: IconType;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython, level: 90 },
      { name: "Java", icon: FaJava, level: 85 },
      { name: "JavaScript", icon: FaJs, level: 80 },
      { name: "TypeScript", icon: SiTypescript, level: 75 },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, level: 85 },
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 90 },
      { name: "TailwindCSS", icon: SiTailwindcss, level: 85 },
    ]
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, level: 80 },
      { name: "FastAPI", icon: SiFastapi, level: 85 },
    ]
  },
  {
    title: "AI, ML & LLMs",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, level: 75 },
      { name: "PyTorch", icon: SiPytorch, level: 70 },
      { name: "OpenAI / LLMs", icon: FaRobot, level: 85 },
      { name: "Neural Networks", icon: BiNetworkChart, level: 80 },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "SQL", icon: FaDatabase, level: 85 },
    ]
  },
  {
    title: "Tools, DevOps & OS",
    skills: [
      { name: "Git & GitHub", icon: FaGithub, level: 90 },
      { name: "Docker", icon: FaDocker, level: 75 },
      { name: "AWS", icon: FaAws, level: 70 },
      { name: "Linux", icon: FaLinux, level: 85 },
      { name: "Bash/Shell", icon: VscTerminalBash, level: 80 },
    ]
  }
];
