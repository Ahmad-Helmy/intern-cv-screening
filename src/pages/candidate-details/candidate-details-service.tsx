import type { ReactNode } from "react";
import Badge, { type BadgeType } from "../../UI/Atoms/Badge/Badge";
import ColoredNumber from "../../UI/Atoms/ColoredNumber/ColoredNumber";
import type {
  Candidate,
  Status,
  VideoStatus,
  Recommendation,
  ScoreBreakdownItem,
} from "../../types/candidates";

const FALLBACK = "-";

const getStatusBadgeType = (status: Status["status"]): BadgeType => {
  switch (status) {
    case "Imported":
      return "imported";
    case "Processing":
      return "processing";
    case "Evaluated":
      return "evaluated";
    case "Nominated":
      return "nominated";
    case "Rejected":
      return "rejected";
    default:
      return "default";
  }
};

const getVideoStatusBadgeType = (status: VideoStatus["status"]): BadgeType => {
  switch (status) {
    case "Pass":
      return "evaluated";
    case "Fail":
      return "rejected";
    default:
      return "default";
  }
};

const getRecommendationBadgeType = (
  status: Recommendation["status"],
): BadgeType => {
  switch (status) {
    case "Strongly Recommended":
      return "nominated";
    case "Recommended":
      return "evaluated";
    case "Not Recommended":
      return "rejected";
    default:
      return "default";
  }
};

export const getScoreLevel = (score: number): "high" | "mid" | "low" => {
  if (score >= 85) return "high";
  if (score >= 70) return "mid";
  return "low";
};

export const renderStatusBadge = (status?: Status["status"]): ReactNode => {
  if (!status) return FALLBACK;
  return <Badge text={status} type={getStatusBadgeType(status)} />;
};

export const renderVideoStatusBadge = (
  status?: VideoStatus["status"],
): ReactNode => {
  if (!status) return FALLBACK;
  return (
    <Badge text={`Video: ${status}`} type={getVideoStatusBadgeType(status)} />
  );
};

export const renderRecommendationBadge = (
  status?: Recommendation["status"],
): ReactNode => {
  if (!status) return FALLBACK;
  return <Badge text={status} type={getRecommendationBadgeType(status)} />;
};

export const renderScore = (score?: number): ReactNode => {
  if (score === undefined || score === null) return FALLBACK;
  return <ColoredNumber score={score} level={getScoreLevel(score)} percent />;
};

export const renderText = (value?: string): string => {
  return value && value.trim() !== "" ? value : FALLBACK;
};

export const renderList = (values?: string[]): string[] => {
  return values && values.length > 0 ? values : [];
};

export const renderSkillBadges = (skills?: string[]): ReactNode[] => {
  if (!skills || skills.length === 0) return [];
  return skills.map((skill) => <Badge key={skill} text={skill} type="skill" />);
};

export const formatGpa = (gpa?: number): string => {
  return gpa !== undefined && gpa !== null ? gpa.toFixed(2) : FALLBACK;
};

export const formatGraduationYear = (year?: number): string => {
  return year !== undefined && year !== null ? String(year) : FALLBACK;
};

export interface ScoreBreakdownRow extends Record<string, ReactNode> {
  Dimension: string;
  Score: number;
  Weight: string;
  Contribution: number;
}

export const mapScoreBreakdownToRows = (
  breakdown?: ScoreBreakdownItem[],
): ScoreBreakdownRow[] => {
  if (!breakdown) return [];
  return breakdown.map((item) => ({
    Dimension: item.dimension,
    Score: item.score,
    Weight: `${item.weight}%`,
    Contribution: item.contribution,
  }));
};

export const getCandidateSummary = (candidate: Candidate) => {
  return {
    name: renderText(candidate.name),
    email: renderText(candidate.email),
    phone: renderText(candidate.phone),
    trackPreference: renderText(candidate.trackPreference),
    statusBadge: renderStatusBadge(candidate.status.status),
    videoStatusBadge: renderVideoStatusBadge(candidate.videoStatus.status),
    recommendationBadge: renderRecommendationBadge(
      candidate.recommendation.status,
    ),
  };
};

export const getCandidateAcademicProfile = (candidate: Candidate) => {
  return {
    university: renderText(candidate.university),
    major: renderText(candidate.major),
    gpa: formatGpa(candidate.gpa),
    graduationYear: formatGraduationYear(candidate.profile?.graduationYear),
  };
};

export const getCandidateEvaluationSummary = (candidate: Candidate) => {
  const evaluation = candidate.evaluation;
  if (!evaluation) return null;

  return {
    score: renderScore(evaluation.score),
    selectionReason: renderText(evaluation.selectionReason),
    videoFluencyScore: evaluation.videoFluencyScore,
    videoPresentationScore: evaluation.videoPresentationScore,
    reportText: renderText(evaluation.reportText),
    scoreBreakdown: mapScoreBreakdownToRows(evaluation.scoreBreakdown),
    strengths: renderList(evaluation.strengths),
    weaknesses: renderList(evaluation.weaknesses),
    riskNotes: renderList(evaluation.riskNotes),
  };
};
