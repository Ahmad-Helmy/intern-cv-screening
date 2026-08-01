/**
 * Mock dataset served by Mock Service Worker in `npm run start-with-mocks`.
 *
 * Generates a deterministic, self-consistent set of internships, scoring
 * criteria and 40 candidates (each with a CV-derived profile, an AI evaluation
 * and an application record) that mirrors the backend contract the UI consumes.
 *
 * This file is the source of truth for the API shapes: the placeholder types in
 * src/types/api are meant to be written against what you see here (and against
 * the actual JSON in the Network tab).
 */

import { makeRng, pick, pickSome, range, round2, uuid } from "./helpers";

// ── Domain value sets ────────────────────────────────────────────────────────
// The exact string tokens the backend sends. Note there are no spaces in
// `recommendation` and that `videoStatus` has more states than Pass/Fail.

export const CandidateStatus = {
  Imported: "Imported",
  Processing: "Processing",
  Evaluated: "Evaluated",
  Nominated: "Nominated",
  Rejected: "Rejected",
} as const;

export const VideoStatus = {
  Pending: "Pending",
  Processing: "Processing",
  Pass: "Pass",
  Fail: "Fail",
  NotProvided: "NotProvided",
} as const;

export const Recommendation = {
  StronglyRecommended: "StronglyRecommended",
  Recommended: "Recommended",
  NotRecommended: "NotRecommended",
} as const;

export const InternshipStatus = {
  Draft: "Draft",
  Open: "Open",
  Closed: "Closed",
} as const;

// ── Reference data pools ─────────────────────────────────────────────────────
const FIRST_NAMES = [
  "Mohammed", "Ahmed", "Ali", "Omar", "Hassan", "Hussein", "Khaled", "Tariq", "Yusuf", "Ibrahim",
  "Mahmoud", "Karim", "Samir", "Fadi", "Bilal", "Zaid", "Anas", "Rami", "Nabil", "Hamza",
  "Fatima", "Aisha", "Layla", "Mariam", "Noor", "Huda", "Salma", "Yasmin", "Amira", "Rania",
  "Dalia", "Hana", "Lina", "Sara", "Nada", "Maha", "Reem", "Zainab", "Farah", "Iman",
];
const LAST_NAMES = [
  "Al-Sayed", "Hassan", "Ibrahim", "Khalil", "Mansour", "Nasser", "Saleh", "Haddad", "Aziz", "Farouk",
  "Kassem", "Sharif", "Rahman", "Saad", "Najjar", "Karam", "Bakr", "Darwish", "Hamdan", "Khoury",
  "Othman", "Qureshi", "Rashid", "Sabbagh", "Taha", "Wahab", "Younes", "Zahra", "Abboud", "Fakhoury",
  "Ghanem", "Halabi", "Issa", "Jaber", "Kanaan", "Masri", "Nazari", "Salim", "Tamimi", "Zoabi",
];
const UNIVERSITIES = [
  "Cairo University",
  "Ain Shams University",
  "Alexandria University",
  "The American University in Cairo",
  "Mansoura University",
  "Helwan University",
  "German University in Cairo",
  "Zagazig University",
];
const MAJORS = [
  "Computer Science",
  "Software Engineering",
  "Informatics Engineering",
  "Data Science",
  "Electrical & Computer Engineering",
  "Mathematics & Computing",
  "Information Systems",
];
const TRACKS = ["Backend", "Frontend", "Full-Stack", "Data Engineering", "Mobile", "Cloud / DevOps"];
const SKILLS = [
  "Java", "Spring Boot", "TypeScript", "React", "Python", "SQL", "Docker", "Kubernetes",
  "Node.js", "C#", ".NET", "Go", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB", "Redis",
  "AWS", "Azure", "Git", "CI/CD", "Kafka", "RabbitMQ", "Microservices", "Unit Testing",
];
const LANGUAGES = [
  "Arabic (Native)",
  "English (Fluent)",
  "French (Intermediate)",
  "German (Basic)",
  "Spanish (Basic)",
];
const CERTS = [
  "AWS Certified Cloud Practitioner",
  "Oracle Certified Java Associate",
  "Microsoft Azure Fundamentals",
  "Scrum Foundation",
  "Google Data Analytics",
  "CompTIA Security+",
];
const PROJECTS = [
  "Built a full-stack e-commerce platform with React and Spring Boot serving 1k+ mock orders.",
  "Developed a real-time chat application using WebSockets and Redis pub/sub.",
  "Created a machine-learning model to predict student dropout rates (87% accuracy).",
  "Implemented a microservices-based ticketing system with Docker and Kubernetes.",
  "Designed a REST API for a library management system with JWT authentication.",
  "Contributed to an open-source CLI tool for database migrations (40+ GitHub stars).",
  "Built a mobile expense tracker with React Native and offline-first sync.",
  "Developed a CI/CD pipeline automating tests and deployments for a class project.",
];
const EXPERIENCE = [
  "Summer intern at a fintech startup — maintained backend services in Java.",
  "Teaching assistant for an introductory programming course (2 semesters).",
  "Freelance web developer for two local small businesses.",
  "Member of the university robotics team, responsible for control software.",
  "Part-time QA tester at a software house during the academic year.",
  "Research assistant in the university HCI lab.",
];
const EXTRACURRICULARS = [
  "President of the university coding club.",
  "Volunteer mentor teaching programming to high-school students.",
  "Hackathon finalist — built a sustainability tracking app in 24h.",
  "Organizer of the annual campus tech meetup.",
  "Competitive programming team member (ICPC regionals).",
  "Wrote a technical blog with 15+ articles on web development.",
];
const STRENGTHS = [
  "Strong fundamentals in data structures and algorithms.",
  "Clear, well-structured technical communication.",
  "Demonstrated ownership of end-to-end projects.",
  "Solid understanding of modern web frameworks.",
  "Comfortable working with cloud-native tooling.",
  "Good collaboration and teamwork track record.",
];
const WEAKNESSES = [
  "Limited professional (non-academic) experience.",
  "Little exposure to large-scale production systems.",
  "Testing practices could be more rigorous.",
  "Backend depth stronger than frontend polish.",
  "Could improve familiarity with system design trade-offs.",
];
const RISK_NOTES = [
  "Graduation timeline may overlap with internship start.",
  "Stated availability not yet confirmed.",
  "Some claimed skills not evidenced by listed projects.",
  "Video interview fluency below the preferred threshold.",
];

/** The seven scored dimensions, paired with the weight field that drives them. */
const DIMENSIONS = [
  { key: "majorMatchWeight", label: "Major Match" },
  { key: "technicalSkillsWeight", label: "Technical Skills" },
  { key: "projectsWeight", label: "Projects" },
  { key: "experienceWeight", label: "Experience" },
  { key: "academicPerformanceWeight", label: "Academic Performance" },
  { key: "extracurricularsWeight", label: "Extracurriculars" },
  { key: "communicationWeight", label: "Communication" },
] as const;

// ── Internships ──────────────────────────────────────────────────────────────
const PRIMARY_INTERNSHIP_ID = uuid(1);

export const internships = [
  {
    id: PRIMARY_INTERNSHIP_ID,
    title: "Software Engineering Summer Internship 2026",
    year: 2026,
    durationWeeks: 12,
    externalJobId: "JOB-SE-2026" as string | null,
    status: InternshipStatus.Open as string,
    hasScoringCriteria: true,
    scoringCriteriaId: uuid(1001) as string | null,
  },
  {
    id: uuid(2),
    title: "Data Science Internship 2026",
    year: 2026,
    durationWeeks: 10,
    externalJobId: "JOB-DS-2026" as string | null,
    status: InternshipStatus.Open as string,
    hasScoringCriteria: true,
    scoringCriteriaId: uuid(1002) as string | null,
  },
  {
    id: uuid(3),
    title: "Cloud & DevOps Internship 2026",
    year: 2026,
    durationWeeks: 12,
    externalJobId: null as string | null,
    status: InternshipStatus.Draft as string,
    hasScoringCriteria: false,
    scoringCriteriaId: null as string | null,
  },
];

/** The dropdown payload — the list endpoint returns `name`, not `title`. */
export const internshipListItems = internships.map((i) => ({
  id: i.id,
  name: i.title,
}));

// ── Scoring criteria ─────────────────────────────────────────────────────────
export const scoringCriteria = {
  [PRIMARY_INTERNSHIP_ID]: {
    id: uuid(1001),
    internshipId: PRIMARY_INTERNSHIP_ID,
    name: "Software Engineering 2026 Criteria",
    isActive: true,
    majorMatchWeight: 15,
    technicalSkillsWeight: 25,
    projectsWeight: 20,
    experienceWeight: 10,
    academicPerformanceWeight: 15,
    extracurricularsWeight: 5,
    communicationWeight: 10,
    totalWeight: 100,
    minimumGPA: 3.0 as number | null,
    minGraduationYear: 2026 as number | null,
    maxGraduationYear: 2028 as number | null,
    minimumVideoFluencyScore: 70,
    minimumVideoPresentationScore: 65,
    nominationCount: 40,
  },
  [uuid(2)]: {
    id: uuid(1002),
    internshipId: uuid(2),
    name: "Data Science 2026 Criteria",
    isActive: true,
    majorMatchWeight: 20,
    technicalSkillsWeight: 30,
    projectsWeight: 20,
    experienceWeight: 10,
    academicPerformanceWeight: 10,
    extracurricularsWeight: 0,
    communicationWeight: 10,
    totalWeight: 100,
    minimumGPA: 3.2 as number | null,
    minGraduationYear: 2026 as number | null,
    maxGraduationYear: 2027 as number | null,
    minimumVideoFluencyScore: 70,
    minimumVideoPresentationScore: 65,
    nominationCount: 20,
  },
  // uuid(3) intentionally has no scoring criteria (NotFound → code 003)
};

// ── Candidate generation ─────────────────────────────────────────────────────
const TOTAL_CANDIDATES = 40;

/** Status for a candidate index — spreads the 40 across every status. */
const statusForIndex = (index: number): string => {
  if (index <= 5) return CandidateStatus.Nominated;
  if (index <= 27) return CandidateStatus.Evaluated;
  if (index <= 32) return CandidateStatus.Rejected;
  if (index <= 36) return CandidateStatus.Processing;
  return CandidateStatus.Imported;
};

/**
 * Score, recommendation, video result and the full evaluation block.
 *
 * Candidates still Imported/Processing have none of it yet — the fields come
 * back undefined (i.e. absent from the JSON), which is exactly the case the UI
 * has to handle.
 */
const buildAssessment = (
  rng: () => number,
  status: string,
  name: string,
  profile: { skills: string[]; projects: string[] } | undefined,
) => {
  const isEvaluated =
    status === CandidateStatus.Nominated ||
    status === CandidateStatus.Evaluated ||
    status === CandidateStatus.Rejected;

  if (!isEvaluated) {
    const videoStatus =
      status === CandidateStatus.Processing
        ? pick(rng, [VideoStatus.Processing, VideoStatus.Pending])
        : pick(rng, [VideoStatus.Pending, VideoStatus.NotProvided]);

    return {
      score: undefined,
      recommendation: undefined,
      videoStatus: videoStatus as string,
      evaluation: undefined,
    };
  }

  const criteria = scoringCriteria[PRIMARY_INTERNSHIP_ID];

  // Target score band by status so badges line up with the numbers.
  const band =
    status === CandidateStatus.Nominated
      ? [82, 96]
      : status === CandidateStatus.Evaluated
        ? [55, 84]
        : [22, 52];

  const scoreBreakdown = DIMENSIONS.map((d) => {
    const weight = criteria[d.key];
    const dimScore = range(rng, band[0] - 8, Math.min(100, band[1] + 6));
    return {
      dimension: d.label as string,
      score: dimScore,
      weight,
      contribution: round2((dimScore * weight) / 100),
    };
  });

  const totalWeight = scoreBreakdown.reduce((s, b) => s + b.weight, 0) || 1;
  const score = round2(
    scoreBreakdown.reduce((s, b) => s + b.score * b.weight, 0) / totalWeight,
  );

  const recommendation =
    status === CandidateStatus.Nominated
      ? Recommendation.StronglyRecommended
      : status === CandidateStatus.Rejected
        ? Recommendation.NotRecommended
        : score >= 70
          ? Recommendation.Recommended
          : Recommendation.NotRecommended;

  const videoFluencyScore = range(
    rng,
    status === CandidateStatus.Rejected ? 40 : 60,
    98,
  );
  const videoPresentationScore = range(
    rng,
    status === CandidateStatus.Rejected ? 38 : 58,
    96,
  );
  const videoStatus =
    videoFluencyScore >= criteria.minimumVideoFluencyScore &&
    videoPresentationScore >= criteria.minimumVideoPresentationScore
      ? VideoStatus.Pass
      : VideoStatus.Fail;

  return {
    score,
    recommendation: recommendation as string,
    videoStatus: videoStatus as string,
    evaluation: {
      score,
      isNominated: status === CandidateStatus.Nominated,
      recommendation: recommendation as string,
      selectionReason:
        status === CandidateStatus.Nominated
          ? "Top performer across technical and communication dimensions; clear nomination."
          : status === CandidateStatus.Rejected
            ? "Below threshold on core technical and video assessment criteria."
            : "Solid all-round profile; competitive but not top-tier this round.",
      reportText: `${name} demonstrates ${
        score >= 75 ? "strong" : "moderate"
      } alignment with the ${
        criteria.name
      }. Technical skills and project work are the primary contributors to the overall score, weighted against academic performance and communication. The candidate's CV indicates ${
        profile?.skills.length ?? 0
      } relevant skills and ${profile?.projects.length ?? 0} notable projects.`,
      videoFluencyScore,
      videoPresentationScore,
      scoreBreakdown,
      strengths: pickSome(rng, STRENGTHS, 2, 4),
      weaknesses: pickSome(rng, WEAKNESSES, 1, 3),
      riskNotes:
        status === CandidateStatus.Nominated
          ? pickSome(rng, RISK_NOTES, 0, 1)
          : pickSome(rng, RISK_NOTES, 1, 2),
    },
  };
};

const buildCandidate = (index: number) => {
  const rng = makeRng(index * 2654435761 + 12345);

  const first = FIRST_NAMES[index % FIRST_NAMES.length];
  const last = LAST_NAMES[(index * 7 + 3) % LAST_NAMES.length];
  const name = `${first} ${last}`;
  const email = `${first}.${last}`.toLowerCase() + "@university.edu";

  const id = uuid(2000 + index);
  const status = statusForIndex(index);

  // An Imported candidate has not had their CV parsed yet — no profile at all.
  const profile =
    status === CandidateStatus.Imported
      ? undefined
      : {
          university: pick(rng, UNIVERSITIES),
          major: MAJORS[index % MAJORS.length],
          graduationYear: range(rng, 2026, 2028),
          gpa: round2(2.6 + rng() * 1.4), // 2.60 – 4.00
          skills: pickSome(rng, SKILLS, 5, 10),
          projects: pickSome(rng, PROJECTS, 1, 3),
          experience: pickSome(rng, EXPERIENCE, 0, 2),
          certifications: pickSome(rng, CERTS, 0, 2),
          languages: pickSome(rng, LANGUAGES, 2, 4),
          extracurriculars: pickSome(rng, EXTRACURRICULARS, 0, 2),
        };

  const assessment = buildAssessment(rng, status, name, profile);

  const trackPreference = pick(rng, TRACKS);
  const phone = `+20 1${range(rng, 10, 29)} ${range(rng, 100, 999)} ${range(rng, 1000, 9999)}`;

  return {
    internshipId: PRIMARY_INTERNSHIP_ID,

    /** Row shape returned by GET /internships/:internshipId/candidates. */
    list: {
      id,
      name,
      email,
      status,
      videoStatus: assessment.videoStatus,
      isNominated: status === CandidateStatus.Nominated,
      score: assessment.score,
      recommendation: assessment.recommendation,
      university: profile?.university,
      major: profile?.major,
      gpa: profile?.gpa,
    },

    /** Full shape returned by GET /candidates/:id. */
    detail: {
      id,
      name,
      email,
      phone,
      trackPreference,
      status,
      videoStatus: assessment.videoStatus,
      profile,
      evaluation: assessment.evaluation,
    },

    /** Application record linking the candidate to the internship. */
    application: {
      applicationId: `APP-2026-${5000 + index}`,
      externalCandidateId: `EXT-CAND-${1000 + index}`,
      internshipId: PRIMARY_INTERNSHIP_ID,
      trackPreference,
      appliedAt: `2026-0${range(rng, 1, 4)}-${String(range(rng, 1, 28)).padStart(2, "0")}T09:00:00Z`,
      cvFileUrl: `https://mock-cdn.local/cvs/${id}.pdf`,
    },
  };
};

export const candidates = Array.from({ length: TOTAL_CANDIDATES }, (_, i) =>
  buildCandidate(i),
);

// ── Auth ─────────────────────────────────────────────────────────────────────

/**
 * The signed-in person. This is what GET /auth/me answers with — no token, no
 * password, just who you are.
 */
export const mockUser = (email: string) => ({
  firstName: "Demo",
  lastName: "Recruiter",
  email,
  designation: "Talent Acquisition Specialist",
});

/**
 * The login response: a credential plus the same user object.
 *
 * The token is not a real JWT — it is the literal string "mock-jwt-token"
 * followed by the base64 email, so the /auth/me handler can work out who is
 * calling. A real backend signs a JWT and verifies the signature; don't read
 * anything into this format beyond "the server can identify the bearer".
 */
export const mockAuthResponse = (email: string) => ({
  token: "mock-jwt-token." + btoa(email).replace(/=/g, ""),
  expiresAt: new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(),
  ...mockUser(email),
});
