document.getElementById('gad7-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let totalScore = 0;

  // Loop through 7 questions
  for (let i = 1; i <= 7; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      totalScore += parseInt(selected.value);
    } else {
      alert("Please answer all questions before submitting.");
      return;
    }
  }

  // Display result
  const resultBox = document.getElementById('result');
  resultBox.style.display = 'block';

  let severity = '';
  if (totalScore <= 4) {
    severity = 'Minimal anxiety';
  } else if (totalScore <= 9) {
    severity = 'Mild anxiety';
  } else if (totalScore <= 14) {
    severity = 'Moderate anxiety';
  } else {
    severity = 'Severe anxiety';
  }

  resultBox.innerHTML = `
    <h2>GAD-7 Score: ${totalScore}</h2>
    <p><strong>Symptom Severity:</strong> ${severity}</p>

    <h3>Management Recommendations</h3>
    <table>
      <thead>
        <tr>
          <th>Score</th>
          <th>Severity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0–4</td>
          <td>Minimal</td>
          <td>Monitoring only</td>
        </tr>
        <tr>
          <td>5–9</td>
          <td>Mild</td>
          <td>Watchful waiting</td>
        </tr>
        <tr>
          <td>10–14</td>
          <td>Moderate</td>
          <td>Consider active treatment</td>
        </tr>
        <tr>
          <td>15–21</td>
          <td>Severe</td>
          <td>Active treatment probably needed</td>
        </tr>
      </tbody>
    </table>

    <p style="margin-top: 20px; font-style: italic;">
      This is a screening tool. For diagnosis or treatment, please consult a licensed mental health professional.
    </p>
  `;
});