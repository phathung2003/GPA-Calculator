import React, { useState } from 'react';
import './css/App.css';
import { creditRequirement } from './logic/gpa-calculate';

interface ScoreInfo {
  currentGPA: number;
  credit: number;
  targetGPA: number;
}

// Đánh phiên bản: Số đời chính.Chức năng.Chỉnh sửa-Giai đoạn
function App() {
  const [score, setScore] = useState<ScoreInfo>({ currentGPA: 0, credit: 0, targetGPA: 0 });
  const [credit, setCredit] = useState<[number, number]>([0, 0]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setScore((prevInput) => ({
      ...prevInput,
      [name]: parseFloat(value), // Chuyển thành số thực
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Ngăn tải lại trang
    setCredit(creditRequirement(score.currentGPA, score.credit, score.targetGPA));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Tính GPA - Phiên bản 0.1.0-dev</p>
      </header>

      <div>
        <form>
          {/* Điểm GPA hiện tại */}
          <div>
            <label htmlFor="currentGPA">Điểm GPA hiện tại: </label>
            <input
              type="number"
              id="currentGPA"
              name="currentGPA"
              value={score.currentGPA}
              onChange={handleChange}
            />
          </div>

          {/* Số tín chỉ hiện tại */}
          <div>
            <label htmlFor="credit">Số tín chỉ hiện tại: </label>
            <input
              type="number"
              id="credit"
              name="credit"
              value={score.credit}
              onChange={handleChange}
            />
          </div>

          {/* Điểm GPA mong muốn */}
          <div>
            <label htmlFor="targetGPA">Điểm GPA mong muốn: </label>
            <input
              type="number"
              id="targetGPA"
              name="targetGPA"
              value={score.targetGPA}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={onSubmit}>
            Ước tính số tín cải thiện
          </button>
        </form>
        <p>
        { credit[0] === -1 || credit[1] === -1 ? "Không thể cải thiện" : `Đạt ${credit[0]} tín chỉ với điểm GPA là ${credit[1]} điểm.`}
        </p>
      </div>
      
      <footer>
        <p>Copyright &copy; 2024 Nguyễn Phát Hưng. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
