export interface ScoringCriteria {
  id: string;
  internshipId: string;
  name: string;
  isActive: boolean | false;
  majorMatchWeight: number | 0;
  technicalSkillsWeight: number | 0;
  projectsWeight: number | 0;
  experienceWeight: number | 0;
  academicPerformanceWeight: number | 0;
  extracurricularsWeight: number | 0;
  communicationWeight: number | 0;
  minimumGPA: number | 0;
  minGraduationYear: number | 0;
  maxGraduationYear: number | 0;
  minimumVideoFluencyScore: number | 0;
  minimumVideoPresentationScore: number | 0;
  nominationCount: number | 0;
}
