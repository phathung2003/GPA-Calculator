import { ScoreImproveForm } from "../models/score.model";

const REGEX_POSITIVE_NUMBER = /[^0-9\.]/g; // Lọc bỏ tất cả các ký tự không phải là số hoặc dấu chấm

// Kiểm tra dữ liệu có phải là số dương không
export function filterPositiveNumber(value: string): string {
  return value.replace(REGEX_POSITIVE_NUMBER, "");
}

// Kiểm tra dữ liệu có nhập chưa
export const isScoreInputValid = (score: ScoreImproveForm): boolean =>
  score.currentGPA !== "" && score.credit !== "" && score.targetGPA !== "";

// Làm tròn số thập phân
export function roundNumber(number: number, decimal: number): number {
  const factor = 10 ** decimal;
  return Math.round(number * factor) / factor;
}

const blockInvalidKeys = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (["-", "e", "E"].includes(e.key)) {
    e.preventDefault();
  }
};
