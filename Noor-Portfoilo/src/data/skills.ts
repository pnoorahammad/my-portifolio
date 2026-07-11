import { IconType } from "react-icons";
import { 
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaReact, FaBootstrap, FaDatabase, 
  FaGitAlt, FaGithub, FaBrain, FaRobot
} from "react-icons/fa";
import { 
  SiCplusplus, SiSpringboot, SiMysql, SiPostman
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: IconType; level: number }[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: FaJava, level: 90 },
      { name: "Python", icon: FaPython, level: 85 },
      { name: "JavaScript", icon: FaJs, level: 80 },
      { name: "C++", icon: SiCplusplus, level: 75 },
      { name: "HTML", icon: FaHtml5, level: 95 },
      { name: "CSS", icon: FaCss3Alt, level: 90 },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: FaReact, level: 85 },
      { name: "Spring Boot", icon: SiSpringboot, level: 85 },
      { name: "Bootstrap", icon: FaBootstrap, level: 80 },
      { name: "REST APIs", icon: TbApi, level: 90 },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, level: 85 },
      { name: "SQL", icon: FaDatabase, level: 85 },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, level: 90 },
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "VS Code", icon: VscVscode, level: 95 },
      { name: "Postman", icon: SiPostman, level: 90 },
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LLMs", icon: FaRobot, level: 85 },
      { name: "Machine Learning", icon: FaBrain, level: 80 },
      { name: "Prompt Engineering", icon: BiNetworkChart, level: 90 },
    ]
  }
];
