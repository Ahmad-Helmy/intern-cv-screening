import type { Candidate } from "../../types/candidates";

export const candidatesMockData: Candidate[] = [
  {
    id: "1",
    name: "Mohammed Khalil",
    email: "mohammed.khalil@university.edu",
    university: "The American University in Cairo",
    major: "Computer Science",
    gpa: 3.78,
    status: { status: "Nominated" },
    score: 91,
    isNominated: true,
    videoStatus: { status: "Pass" },
    recommendation: { status: "Strongly Recommended" },
    phone: "+351 942 318 705",
    trackPreference: "Full-Stack",
    profile: {
      graduationYear: 2027,
      skills: [
        "Java",
        "Spring Boot",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Docker",
        "AWS",
        "REST APIs",
      ],
      languages: [
        "Portuguese (Native)",
        "English (Fluent)",
        "Spanish (Intermediate)",
      ],
      projects: [
        "Built a full-stack e-commerce platform with React and Spring Boot serving 1k+ mock orders.",
        "Implemented a microservices-based ticketing system with Docker and Kubernetes.",
      ],
      experience: [
        "Summer intern at a fintech startup — maintained backend services in Java.",
        "Teaching assistant for an introductory programming course (2 semesters).",
      ],
      certifications: ["AWS Certified Cloud Practitioner", "Scrum Foundation"],
      extracurriculars: [
        "President of the university coding club.",
        "Hackathon finalist — built a sustainability tracking app in 24h.",
      ],
    },
    evaluation: {
      score: 91,
      selectionReason:
        "Top performer across technical and communication dimensions; clear nomination.",
      videoFluencyScore: 88,
      videoPresentationScore: 84,
      reportText:
        "Mohammed Khalil demonstrates strong alignment with the Software Engineering 2026 Criteria. " +
        "Technical skills and project work are the primary contributors to the overall score, weighted " +
        "against academic performance and communication. The candidate's CV indicates 8 relevant skills " +
        "and 2 notable projects.",
      scoreBreakdown: [
        { dimension: "Major Match", score: 95, weight: 15, contribution: 14.3 },
        {
          dimension: "Technical Skills",
          score: 92,
          weight: 25,
          contribution: 23,
        },
        { dimension: "Projects", score: 90, weight: 20, contribution: 18 },
        { dimension: "Experience", score: 85, weight: 10, contribution: 8.5 },
        {
          dimension: "Academic Performance",
          score: 93,
          weight: 15,
          contribution: 14,
        },
        {
          dimension: "Extracurriculars",
          score: 88,
          weight: 5,
          contribution: 4.4,
        },
        { dimension: "Communication", score: 90, weight: 10, contribution: 9 },
      ],
      strengths: [
        "Strong fundamentals in data structures and algorithms.",
        "Clear, well-structured technical communication.",
        "Demonstrated ownership of end-to-end projects.",
      ],
      weaknesses: [
        "Limited professional (non-academic) experience.",
        "Backend depth stronger than frontend polish.",
      ],
      riskNotes: ["Stated availability not yet confirmed."],
    },
  },
  {
    id: "2",
    name: "Sara Ahmed",
    email: "sara.ahmed@university.edu",
    university: "Cairo University",
    major: "Computer Engineering",
    gpa: 3.42,
    status: { status: "Evaluated" },
    score: 74,
    isNominated: false,
    videoStatus: { status: "Pass" },
    recommendation: { status: "Recommended" },
    phone: "+20 100 123 4567",
    trackPreference: "Backend",
    profile: {
      graduationYear: 2026,
      skills: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
      languages: ["Arabic (Native)", "English (Fluent)"],
      projects: [
        "Built a job-queue processing service handling 10k+ tasks/day with Celery and Redis.",
      ],
      experience: ["Backend developer intern at a logistics startup."],
      certifications: [],
      extracurriculars: ["Member of the university robotics team."],
    },
    evaluation: {
      score: 74,
      selectionReason:
        "Solid backend fundamentals; project depth is good but experience is limited.",
      videoFluencyScore: 76,
      videoPresentationScore: 70,
      reportText:
        "Sara Ahmed shows solid backend engineering fundamentals and hands-on project experience " +
        "with asynchronous task processing. Communication and academic performance are adequate but " +
        "not standout, placing her in the recommended tier rather than the top nomination bracket.",
      scoreBreakdown: [
        { dimension: "Major Match", score: 80, weight: 15, contribution: 12 },
        {
          dimension: "Technical Skills",
          score: 78,
          weight: 25,
          contribution: 19.5,
        },
        { dimension: "Projects", score: 75, weight: 20, contribution: 15 },
        { dimension: "Experience", score: 65, weight: 10, contribution: 6.5 },
        {
          dimension: "Academic Performance",
          score: 74,
          weight: 15,
          contribution: 11.1,
        },
        {
          dimension: "Extracurriculars",
          score: 70,
          weight: 5,
          contribution: 3.5,
        },
        {
          dimension: "Communication",
          score: 72,
          weight: 10,
          contribution: 7.2,
        },
      ],
      strengths: [
        "Strong grasp of asynchronous processing and queue systems.",
        "Practical internship experience relevant to the role.",
      ],
      weaknesses: [
        "No certifications on file.",
        "Limited exposure to cloud infrastructure.",
      ],
      riskNotes: [],
    },
  },
  {
    id: "3",
    name: "Youssef Ibrahim",
    email: "youssef.ibrahim@university.edu",
    university: "Alexandria University",
    major: "Software Engineering",
    gpa: 2.95,
    status: { status: "Rejected" },
    score: 48,
    isNominated: false,
    videoStatus: { status: "Fail" },
    recommendation: { status: "Not Recommended" },
    phone: "+20 111 987 6543",
    trackPreference: "Frontend",
    profile: {
      graduationYear: 2027,
      skills: ["HTML", "CSS", "JavaScript"],
      languages: ["Arabic (Native)"],
      projects: ["Built a personal portfolio website."],
      experience: [],
      certifications: [],
      extracurriculars: [],
    },
    evaluation: {
      score: 48,
      selectionReason:
        "Below the bar on technical depth and communication; video assessment did not pass.",
      videoFluencyScore: 45,
      videoPresentationScore: 40,
      reportText:
        "Youssef Ibrahim's profile shows limited technical depth relative to the role requirements, " +
        "with a single introductory-level project and no professional experience. The video assessment " +
        "did not meet the passing threshold for communication and presentation.",
      scoreBreakdown: [
        { dimension: "Major Match", score: 60, weight: 15, contribution: 9 },
        {
          dimension: "Technical Skills",
          score: 45,
          weight: 25,
          contribution: 11.25,
        },
        { dimension: "Projects", score: 40, weight: 20, contribution: 8 },
        { dimension: "Experience", score: 20, weight: 10, contribution: 2 },
        {
          dimension: "Academic Performance",
          score: 55,
          weight: 15,
          contribution: 8.25,
        },
        {
          dimension: "Extracurriculars",
          score: 30,
          weight: 5,
          contribution: 1.5,
        },
        {
          dimension: "Communication",
          score: 42,
          weight: 10,
          contribution: 4.2,
        },
      ],
      strengths: ["Basic familiarity with core web technologies."],
      weaknesses: [
        "No professional or internship experience.",
        "Project portfolio is minimal.",
        "Failed the video communication assessment.",
      ],
      riskNotes: [
        "Video assessment failed — recommend re-evaluation before further consideration.",
      ],
    },
  },
  {
    id: "4",
    name: "Layla Mansour",
    email: "layla.mansour@university.edu",
    university: "German University in Cairo",
    major: "Information Systems",
    gpa: 3.6,
    status: { status: "Processing" },
    score: 0,
    isNominated: false,
    videoStatus: { status: "Fail" },
    recommendation: { status: "Not Recommended" },
    phone: "+20 122 456 7890",
    trackPreference: "Data / ML",
  },
  {
    id: "5",
    name: "Omar Fathy",
    email: "omar.fathy@university.edu",
    university: "Nile University",
    major: "Computer Science",
    gpa: 3.15,
    status: { status: "Imported" },
    score: 0,
    isNominated: false,
    videoStatus: { status: "Fail" },
    recommendation: { status: "Not Recommended" },
    phone: "+20 133 222 1100",
    trackPreference: "Full-Stack",
  },
];
