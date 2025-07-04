
export interface Score {
  subject: string;
  GPA: number | null;
  credit: number | null;
}

export interface ScoreImproveForm {
  currentGPA: string;
  currentCredit: string;
  targetGPA: string;
}

// Initial data
export const INITIAL_SCORE_FORM: ScoreImproveForm = {
  currentGPA: "",
  currentCredit: "",
  targetGPA: "",
};
