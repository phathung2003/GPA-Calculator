import { IMPROVEMENT_RESULT } from "../enums/improveResult.enums";

export interface GPARequirement {
  totalScoreRequired: number; // Điểm cần đạt thêm
  creditNeeded: number; // Số tín chỉ cần tích lũy / cải thiện
  minSubjectGPA: number; // Điểm GPA tối thiểu mỗi môn cần đạt
  improvementResult: IMPROVEMENT_RESULT;
}
