"use client";

import React, { useState } from "react";
import "../css/form.css";
import { GPAImproveRequirement } from "../shared/features/gpa-calculate";
import { ScoreImproveForm, INITIAL_SCORE_FORM } from "../shared/models/score.model";
import {
    filterIntegerPositiveNumber,
    filterDecimalPositiveNumber,
    isScoreInputValid,
} from "../utilities/number.utils";
import { numberInput } from "../shared/common/input";
import { IMPROVEMENT_RESULT } from "../shared/enums/improveResult.enums";

function improvementGPACalculator() {
    const [score, setScore] = useState<ScoreImproveForm>(INITIAL_SCORE_FORM);
    const [credit, setCredit] =
        useState<ReturnType<typeof GPAImproveRequirement>>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "currentCredit") {
            setScore((prevScore) => ({
                ...prevScore,
                [name]: filterIntegerPositiveNumber(value),
            }));
        }
        else {
            setScore((prevScore) => ({
                ...prevScore,
                [name]: filterDecimalPositiveNumber(value),
            }));
        }
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
                {
                    numberInput(
                        "Điểm GPA hiện tại",
                        "currentGPA",
                        score.currentGPA,
                        handleChange
                    )
                }

                {/* Số tín chỉ hiện tại */}
                {
                    numberInput(
                        "Số tín chỉ hiện tại",
                        "currentCredit",
                        score.currentCredit,
                        handleChange
                    )
                }

                {/* Điểm GPA mong muốn */}
                {
                    numberInput(
                        "Điểm GPA mong muốn",
                        "targetGPA",
                        score.targetGPA,
                        handleChange
                    )
                }

                <button type="button" onClick={onSubmit}>
                    Ước tính số tín cải thiện
                </button>
            </form>
            <p>
                {
                    !credit
                        ? "Chưa tính toán"
                        : credit.improvementResult === IMPROVEMENT_RESULT.NO_NEED
                            ? "Không cần cải thiện"
                            : credit.improvementResult === IMPROVEMENT_RESULT.IMPOSSIBLE
                                ? "Không thể cải thiện"
                                : `Đạt ${credit.creditNeeded} tín chỉ với điểm GPA là ${credit.minSubjectGPA} điểm.`
                }
            </p>
        </div>
    );
}

export default improvementGPACalculator;
