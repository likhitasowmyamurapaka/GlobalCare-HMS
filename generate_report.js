function generateReport() {
    let pname = document.getElementById("pname").value;
    let pid = document.getElementById("pid").value;
    let symptom = document.getElementById("symptom").value;
    let doctor = document.getElementById("doctor").value;
    let tests = document.getElementById("tests").value;
    let branch = document.getElementById("branch").value;   

    let message = "";

    // Simple logic
    if(symptom === "fever") {
        message = "Your condition looks normal. Take rest and stay hydrated.";
    }
    else if(symptom === "chest-pain") {
        message = "Critical symptom. Please visit the hospital immediately.";
    }
    else if(symptom === "abdominal pain") {
        message = "Mild issue observed. Follow the doctor’s advice.";
    }
    else if(symptom === "dehydration") {
        message = "Drink more water and ORS immediately.";
    }
    else if(symptom === "dizziness") {
        message = "Take rest. If continues, consult the doctor again.";
    }
    else if(symptom === "injury") {
        message = "Monitor the injury. Seek medical attention if swelling increases.";
    }
    else if(symptom === "insomnia") {
        message = "Sleep disturbance detected. Follow relaxation techniques.";
    }
    else if(symptom === "shortness of breath") {
        message = "Possible serious respiratory issue. Seek urgent care.";
    }
    else if(symptom === "severe headache") {
        message = "Severe headache detected. Consult doctor if persists.";
    }

    // Display output in the empty box
    document.getElementById("resultBox").style.display = "block";
    document.getElementById("resultBox").innerHTML = `
        <strong>Doctor Consulted:</strong> ${doctor}<br>
        <strong>Symptom:</strong> ${symptom}<br>
        <strong>Tests Done:</strong> ${tests}<br>
        <strong>Branch:</strong> ${branch}<br><br>
        <strong>Final Report:</strong> ${message}`;

}

