export interface ScoringCriteria {
  id: string;
  internshipId: string;
  name: string;
  isActive: boolean;
  majorMatchWeight: number;
  technicalSkillsWeight: number;
  projectsWeight: number;
  experienceWeight: number;
  academicPerformanceWeight: number;
  extracurricularsWeight: number;
  communicationWeight: number;
  minimumGPA: number;
  minGraduationYear: number;
  maxGraduationYear: number;
  minimumVideoFluencyScore: number;
  minimumVideoPresentationScore: number;
  nominationCount: number;
}
