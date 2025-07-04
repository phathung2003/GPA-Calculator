"use client";

import React, { useState } from "react";
import "../css/form.css";
import { GPAImproveRequirement } from "../features/gpa-calculate";
import { ScoreImproveForm, INITIAL_SCORE_FORM } from "../models/score.model";
import {
  filterPositiveNumber,
  isScoreInputValid,
} from "../utilities/numberUtils";
import { scoreInput } from "../components/input";

// Đánh phiên bản: Số đời chính.Chức năng.Chỉnh sửa-Giai đoạn
function App() {
  const [score, setScore] = useState<ScoreImproveForm>(INITIAL_SCORE_FORM);
  const [credit, setCredit] =
    useState<ReturnType<typeof GPAImproveRequirement>>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setScore((prevScore) => ({
      ...prevScore,
      [name]: filterPositiveNumber(value),
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (isScoreInputValid(score)) {
      setCredit(
        GPAImproveRequirement(
          Number(score.currentGPA),
          Number(score.currentCredit),
          Number(score.targetGPA)
        )
      );
    } else {
      setCredit(undefined);
    }
  };

  return (
    <div>
      <form>
        {/* Điểm GPA hiện tại */}
        {scoreInput(
          "Điểm GPA hiện tại",
          "currentGPA",
          score.currentGPA,
          handleChange
        )}

        {/* Số tín chỉ hiện tại */}
        {scoreInput(
          "Số tín chỉ hiện tại",
          "currentCredit",
          score.currentCredit,
          handleChange
        )}

        {/* Điểm GPA mong muốn */}
        {scoreInput(
          "Điểm GPA mong muốn",
          "targetGPA",
          score.targetGPA,
          handleChange
        )}

        <button type="button" onClick={onSubmit}>
          Ước tính số tín cải thiện
        </button>
      </form>
      <p>
        {!credit
          ? "Chưa tính toán"
          : credit.totalScoreRequired === 0
          ? "Không cần cải thiện"
          : credit.totalScoreRequired === -1
          ? "Không thể cải thiện"
          : `Đạt ${credit.creditNeeded} tín chỉ với điểm GPA là ${credit.minSubjectGPA} điểm.`}
      </p>
    </div>
  );
}

export default App;
