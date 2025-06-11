//Ưóc tính số lượng tín chỉ
export function creditRequirement(currentGPA: number, currentCredit: number, targetGPA: number): [number,number]{
    //Điểm GPA khả dụng - Posible GPA grade
    const posibleGrades: number[] = [1, 1.5, 2, 2.5, 3, 3.5, 4];

    //Điểm GPA mục tiêu thấp nhất có thể đạt
    targetGPA = targetGPA - 0.005;
    
    //Tính tổng điểm GPA hiện tại - Calculate current GPA
    const totalCurrentGPA: number = totalGPACalculate(currentGPA,currentCredit);

    // Tìm tổng số tín chỉ nhỏ nhất thỏa mãn điều kiện cho từng điểm
    for (const grade of posibleGrades) {
        
        if(grade >= targetGPA){

            //Ước tính số tín chỉ cần
            const estimateCredit: number = (totalCurrentGPA - (targetGPA * currentCredit)) / (targetGPA - grade)
            
            //Tìm số tín nhỏ nhất thỏa yêu cầu
            let lowestCreditPossible: number = Math.ceil(estimateCredit);

            for(let newCredit = lowestCreditPossible; newCredit >= 1 ; newCredit--){
               
                const newGPA = (totalCurrentGPA + (newCredit * grade)) / (currentCredit + newCredit);

                if(roundNumber(newGPA, 2) < targetGPA){
                    return [newCredit + 1, grade]
                }
            }
        }
    }

    //Không thể cải thiện
    return [-1,-1];
}

// Tính GPA
function totalGPACalculate(GPAScore: number, credit: number): number{
    if(GPAScore < 0 || credit < 1){
        return -1;
    }

    return roundNumber(GPAScore * credit,1)
}

// Làm tròn số
function roundNumber(number: number, decimal: number): number {
    const factor = 10 ** decimal;
    return Math.round(number * factor) / factor;
}