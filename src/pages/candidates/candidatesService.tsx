import type { ReactNode } from "react";
import Badge, { type BadgeType } from "../../UI/Atoms/Badge/Badge";
import ColoredNumber from "../../UI/Atoms/ColoredNumber/ColoredNumber";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import type { RawCandidate, CandidateStatus } from "./mockData";

const FALLBACK = "-";

const statusBadgeType: Partial<Record<CandidateStatus, BadgeType>> = {
  Imported: "imported",
  Processing: "processing",
  Evaluated: "evaluated",
  Nominated: "nominated",
  Rejected: "rejected",
};

const getBadgeTypeForStatus = (status: CandidateStatus): BadgeType => {
  return statusBadgeType[status] || "default";
};

const getScoreLevel = (score: number): "high" | "mid" | "low" => {
  if (score >= 85) return "high";
  if (score >= 70) return "mid";
  return "low";
};

const renderStatus = (status?: CandidateStatus): ReactNode => {
  if (!status) return FALLBACK;
  return <Badge text={status} type={getBadgeTypeForStatus(status)} />;
};

const renderScore = (score?: number): ReactNode => {
  if (score === undefined || score === null) return FALLBACK;
  return (
    <ColoredNumber score={score} size="small" level={getScoreLevel(score)} />
  );
};

const renderNominated = (nominated?: "Yes" | "No"): ReactNode => {
  if (!nominated) return FALLBACK;
  const type: BadgeType = nominated === "Yes" ? "nominated" : "rejected";
  return <Badge text={nominated} type={type} />;
};

const renderText = (value?: string): ReactNode => {
  return value && value.trim() !== "" ? value : FALLBACK;
};

const renderCandidate = (name?: string, email?: string): ReactNode => {
  if (!name || name.trim() === "") return FALLBACK;
  return (
    <div className="candidate-cell">
      <InfoTitle label={name} value={email || FALLBACK} />
    </div>
  );
};

export const mapCandidateToRow = (
  candidate: RawCandidate,
): Record<string, ReactNode> => {
  return {
    Candidate: renderCandidate(candidate.Candidate, candidate.Email),
    Uni: renderText(candidate.Uni),
    Major: renderText(candidate.Major),
    GPA: renderText(candidate.GPA),
    Status: renderStatus(candidate.Status),
    Score: renderScore(candidate.Score),
    Nominated: renderNominated(candidate.Nominated),
  };
};

export const mapCandidatesToRows = (
  candidates: RawCandidate[],
): Record<string, ReactNode>[] => {
  return candidates.map(mapCandidateToRow);
};
