export type CandidateStatus =
  | "Imported"
  | "Processing"
  | "Evaluated"
  | "Nominated"
  | "Rejected"
  | "Skill"
  | "Default";

export type RawCandidate = {
  Candidate?: string;
  Email?: string;
  Uni?: string;
  Major?: string;
  GPA?: string;
  Status?: CandidateStatus;
  Score?: number;
  Nominated?: "Yes" | "No";
};

export const candidateColumns = [
  "Candidate",
  "Uni",
  "Major",
  "GPA",
  "Status",
  "Score",
  "Nominated",
];

export const candidateData: RawCandidate[] = [
  {
    Candidate: "Mohammed Khalil",
    Email: "mohammed.khalil@aucegypt.edu",
    Uni: "The American University in Cairo",
    Major: "Computer Science",
    GPA: "3.78",
    Status: "Nominated",
    Score: 91,
    Nominated: "Yes",
  },
  {
    Candidate: "Laila Fathy",
    Email: "laila.fathy@cu.edu.eg",
    Uni: "Cairo University",
    Major: "Electrical Engineering",
    GPA: "3.42",
    Status: "Evaluated",
    Score: 76,
  },
  {
    Candidate: "Youssef Adel",
    Email: "youssef.adel@asu.edu.eg",
    Uni: "Ain Shams University",
    Major: "Mechanical Engineering",
    GPA: "3.15",
    Status: "Rejected",
    Score: 62,
    Nominated: "No",
  },
  {
    Candidate: "Nour Mostafa",
    Email: "nour.mostafa@guc.edu.eg",
    Uni: "German University in Cairo",
    Major: "Mechatronics Engineering",
    GPA: "3.91",
    Status: "Nominated",
    Score: 95,
    Nominated: "Yes",
  },
  {
    Candidate: "Omar Sherif",
    Email: "omar.sherif@alexu.edu.eg",
    Uni: "Alexandria University",
    Major: "Computer Engineering",
    GPA: "3.34",
    Status: "Processing",
    Score: 71,
  },
  {
    Candidate: "Salma Reda",
    Email: "salma.reda@nu.edu.eg",
    Uni: "Nile University",
    Major: "Biomedical Engineering",
    GPA: "3.67",
    Status: "Evaluated",
    Score: 84,
  },
  {
    Candidate: "Karim Hassan",
    Email: "karim.hassan@aucegypt.edu",
    Uni: "The American University in Cairo",
    Major: "Computer Science",
    GPA: "3.55",
    Status: "Imported",
    Score: 68,
  },
  {
    Candidate: "Mariam Tarek",
    Email: "mariam.tarek@cu.edu.eg",
    Uni: "Cairo University",
    Major: "Architecture Engineering",
    GPA: "3.88",
    Status: "Nominated",
    Score: 93,
    Nominated: "Yes",
  },
  {
    Candidate: "Ahmed Nabil",
    Email: "ahmed.nabil@zewailcity.edu.eg",
    Uni: "Zewail City of Science and Technology",
    Major: "Communications Engineering",
    GPA: "3.29",
    Status: "Processing",
    Score: 59,
  },
  {
    Candidate: "Hana Wael",
    Email: "hana.wael@guc.edu.eg",
    Uni: "German University in Cairo",
    Major: "Computer Science",
    GPA: "3.72",
    Status: "Evaluated",
    Score: 80,
  },
];
