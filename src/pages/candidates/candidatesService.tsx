import type { ReactNode } from "react";
import Badge, { type BadgeType } from "../../UI/Atoms/Badge/Badge";
import ColoredNumber from "../../UI/Atoms/ColoredNumber/ColoredNumber";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import type { CandidateListItem } from "../../types/api/candidates";

export type CandidateFilters = {
  search?: string;
  internship?: string;
  status?: string;
};

type CandidateStatus = CandidateListItem["status"];

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

const renderNominated = (nominated?: boolean): ReactNode => {
  if (nominated === undefined || nominated === null) return FALLBACK;
  const type: BadgeType = nominated === true ? "nominated" : "rejected";
  return <Badge text={nominated ? "Yes" : "No"} type={type} />;
};

const renderText = (value?: string): ReactNode => {
  return value && value.trim() !== "" ? value : FALLBACK;
};

const renderCandidate = (
  name?: string,
  email?: string,
  onClick?: () => void,
): ReactNode => {
  if (!name || name.trim() === "") return FALLBACK;
  return (
    <div
      className="candidate-cell"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <InfoTitle label={name} value={email || FALLBACK} />
    </div>
  );
};

export const mapCandidateToRow = (
  candidate: CandidateListItem,
  onClickRow: (id: string) => void,
): Record<string, ReactNode> => {
  return {
    Candidate: renderCandidate(candidate.name, candidate.email, () =>
      onClickRow(candidate.id),
    ),
    Uni: renderText(candidate.university),
    Major: renderText(candidate.major),
    GPA: renderText(candidate.gpa?.toString()),
    Status: renderStatus(candidate.status),
    Score: renderScore(candidate.score),
    Nominated: renderNominated(candidate.isNominated),
  };
};

export const mapCandidatesToRows = (
  candidates: CandidateListItem[],
  onClickRow: (id: string) => void,
): Record<string, ReactNode>[] => {
  return candidates.map((candidate) =>
    mapCandidateToRow(candidate, onClickRow),
  );
};
