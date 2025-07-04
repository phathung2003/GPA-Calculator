import { roundNumber } from "../utilities/numberUtils";
import { GPARequirement } from "../models/gpa.model";

// Điểm GPA khả dụng
const POSIBLE_GRADE: number[] = [1, 1.5, 2, 2.5, 3, 3.5, 4];

// Ưóc tính số lượng tín chỉ
/* Quy ước kết quả đầu ra đặc biệt:
    - Không cải thiện được: Tất cả giá trị là -1
    - Không cần cải thiện: Tắt cả giá trị là 0
*/
export function GPAImproveRequirement(
  currentGPA: number,
  currentCredit: number,
  targetGPA: number
): GPARequirement {
  // * Không cần cải thiện (Điểm GPA hiện tại >= GPA mục tiêu)
  if (currentGPA >= targetGPA) {
    return {
      totalScoreRequired: 0,
      creditNeeded: 0,
      minSubjectGPA: 0,
    };
  }

  // Điểm GPA mục tiêu thấp nhất có thể đạt
  targetGPA = targetGPA - 0.005;

  // Tính tổng điểm GPA hiện tại
  const currentScore: number = totalGPACalculate(currentGPA, currentCredit);

  // Tìm tổng số tín chỉ nhỏ nhất thỏa mãn điều kiện cho từng điểm
  for (const grade of POSIBLE_GRADE) {
    if (grade >= targetGPA) {
      // Tổng điểm GPA cần đạt
      //Ước tính số tín chỉ cần
      const estimateCredit: number =
        (currentScore - targetGPA * currentCredit) / (targetGPA - grade);

      //Tìm số tín nhỏ nhất thỏa yêu cầu
      let lowestCreditPossible: number = Math.ceil(estimateCredit);

      for (let newCredit = lowestCreditPossible; newCredit >= 1; newCredit--) {
        let newGPA =
          (currentScore + newCredit * grade) / (currentCredit + newCredit);

        // * Trả kết quả nếu thỏa
        if (roundNumber(newGPA, 2) < targetGPA) {
          return {
            totalScoreRequired: totalGPACalculate(newGPA, newCredit + 1),
            creditNeeded: newCredit + 1,
            minSubjectGPA: grade,
          };
        }
      }
    }
  }

  // * Không thể cải thiện
  return {
    totalScoreRequired: -1,
    creditNeeded: -1,
    minSubjectGPA: -1,
  };
}

// Tính GPA
function totalGPACalculate(GPAScore: number, credit: number): number {
  if (GPAScore < 0 || credit < 1) {
    return -1;
  }

  return roundNumber(GPAScore * credit, 1);
}
