// it is kindda copy of whole exel sheet

const array = 
[
  [
    "PatientID",
    "Forename",
    "Surname",
    "DOB",
    "Sex",
    "PastMedicalHistory",
    "Medications",
    "Sodium",
    "Potassium",
    "Urea",
    "Creatinine",
    "bicarbonate",
    "chloride",
    "Haemoglobin",
    "MeancCellCount",
    "Platelets",
    "WBC",
    "Neutrophils",
    "Lymphocytes",
    "Eosinophils",
    "PatientNotesEntry"
  ],
  [
    "XY123",
    "Joe",
    "Bloggs",
    "17/10/97",
    "M",
    "Polycystic Kidney disease\nHypertension",
    "rampril - 10mg OD\nBiosprolol - 12mg BD",
    134,
    4.5,
    5,
    80,
    26,
    95,
    137,
    92,
    200,
    "6*10^9",
    "3*10^9",
    "3*10^9",
    "0.3*10^9",
    "Patient presented to the emergency department with a 2-hour history of an occipital headache and neck pain. He has since vomited 3 times and complains of blurred vision. Wearing sunglasses has helped ease the intensity of the headache. There is no past medical history of note and her regular medications consist of over-the-counter vitamins.\n\nOn examination, He is afebrile.  She has a GCS of 15 and is moving all 4 limbs with good power and without any sensory deficit. There are no signs of an acute head injury."
  ],
  [
    "XY124",
    "Herbert",
    "Garraway",
    "16/05/75",
    "M",
    "Hypertension",
    "Sertaline - 15mg BD\nBiosprolol - 12mg BD\nlosartan - 10mg BD",
    140,
    3,
    5,
    80,
    24,
    85,
    138,
    85,
    200,
    "5*10^9",
    "4*10^9",
    "2*10^9",
    "0.3*10^9",
    "Patient describes that He is feeling unwell and has experienced episodes of diarrhoea for the past 4 months along with abdominal cramps and indigestion. He noticed floating stools, flatulence and weight loss. Abdominal pain is relived on defecation. \nOn examination, He is afebrile, has mild tenderness on palpation"
  ],
  [
    "XY125",
    "Aubrey ",
    "Stephenson",
    "14/06/1984",
    "F",
    "SLE",
    "rampril - 10mg OD\nBiosprolol - 12mg BD",
    200,
    4,
    7.1,
    60,
    30,
    100,
    120,
    90,
    100,
    "15*10^9",
    "5*10^9",
    "3.5*10^9",
    "0.6*10^9",
    "Patient is generally unwell with myalgia and fatigue. She is concerned she is having a flare-up of her SLE. She has health-anxiety secondary to her SLE and regularly attends her GP practice whenever she develops new symptoms, as she is aware that her lupus can affect multiple organs and systems. \nShe has had a fever for the last couple of days and has noticed that she is not passing urine. She has also noticed ankle swelling bilaterally"
  ],
  [
    "XY126",
    "Wenzel",
    "Friedmann",
    "20/05/1990",
    "M",
    "Type 1 Diabetes",
    "Sertaline - 15mg BD\nBiosprolol - 12mg BD\nlosartan - 10mg BD",
    130,
    6,
    4,
    65,
    20,
    80,
    135,
    80,
    190,
    "11*10^9",
    "7*10^9",
    "3*10^9",
    "0.4*10^9",
    "Patient presented with shaking, sweating and nausea that was noticed this morning before having his breakfast this morning. He was relieved after having some sugar. He takes his insulin regularly and took it this morning but did not have his breakfast on time. "
  ],
  [
    "XY127",
    "Mary",
    "Eaker",
    "10/10/2000",
    "F",
    "Iron deifiency anemia",
    "rampril - 10mg OD\nBiosprolol - 12mg BD",
    130,
    4,
    6,
    70,
    22,
    97,
    42,
    50,
    105,
    "4*10^9",
    "4*10^9",
    "2.5*10^9",
    "0.2*10^9",
    "Patient found drowsy and confused on the street and brought into the emergency department by the paramedics. On examination, she had thin and brittle hair, periorbital oedema and she has reduced knee and ankle reflexes. Her husband notes that she has been drinking a lot more in the last 6-months since her sister passed away.\nShe has noticed weight gain, cold intolerance and heavy menstrual bleeding"
  ],
  [
    "XY128",
    "Selene",
    "Williams",
    "10/02/1980",
    "F",
    "PCOS",
    "rampril - 10mg OD\nBiosprolol - 12mg BD",
    125,
    3.5,
    8,
    93,
    34,
    90,
    140,
    80,
    200,
    "5*10^9",
    "5*10^9",
    "3*10^9",
    "0.5*10^9",
    "Patient complains of severe abdominal distension and bloating which she has noticed in the last few weeks. She has noticed a growing abdominal mass which has gotten very large that it is affecting her day to day life. She has also noticed diarrhoea and early satiety"
  ],
  [
    "XY129",
    "Teresa",
    "Malone",
    "087/09/1956",
    "F",
    "Osteoporosis",
    "Sertaline - 15mg BD\nBiosprolol - 12mg BD\nlosartan - 10mg BD",
    100,
    2,
    5,
    100,
    30,
    91,
    130,
    95,
    185,
    "6.5*10^9",
    "7*10^9",
    "3*10^9",
    "0.3*10^9",
    "Patient presented with chest tightness, cold, cough and dyspnoea. he has noticed that he has had fevers for the last 4 days and been generally tired. Has been eating and drinking well but has not noticed any other problems"
  ],
  [
    "XY130",
    "Emmet ",
    "Bax",
    "18/03/1956",
    "M",
    "Fibromyalgia",
    "rampril - 10mg OD\nBiosprolol - 12mg BD",
    120,
    3,
    20,
    70,
    35,
    86,
    140,
    85,
    190,
    "11*10^9",
    "5*10^9",
    "4*10^9",
    "0.4*10^9",
    "Patient has noticed diarrhoea and vomiting in the past 2 days or so. he has also had fever and nausea and vomiting"
  ],
  [
    "XY131",
    "Fletcher ",
    "Wagner",
    "11/04/1978",
    "M",
    "Hypertension",
    "rampril - 10mg OD\nBiosprolol - 12mg BD",
    130,
    3.5,
    7,
    64,
    30,
    100,
    130,
    95,
    100,
    "16*10^9",
    "11*10^9",
    "2*10^9",
    "0.4*10^9",
    "Patient complains of dry cough that is worse at night. He has also noticed chest tightness and a wheeze that has been getting progressively worse with time. "
  ]
]

const patients = [];
let n = array.length;
let m = array[0].length;
function putDataFromArrayToPatient(){
    for(let i = 1; i < n; i++){
        patients[i - 1] = {};
        for(let j = 0; j < m; j++)patients[i - 1][array[0][j]] = array[i][j];
    }
}

putDataFromArrayToPatient();
// console.log(patients);


const Keys = [
    "PatientID",
    "Forename",
    "Surname",
    "DOB",
    "Sex",
    "PastMedicalHistory",
    "Medications",
    "Sodium",
    "Potassium",
    "Urea",
    "Creatinine",
    "bicarbonate",
    "chloride",
    "Haemoglobin",
    "MeancCellCount",
    "Platelets",
    "WBC",
    "Neutrophils",
    "Lymphocytes",
    "Eosinophils",
    "PatientNotesEntry"
  ]
//  Array for names of patients

const patientsName = [];
for(let i = 0; i < n - 1; i++){
    patientsName[i] = {};
    patientsName[i].name = patients[i].Forename.toLowerCase() + " " + patients[i].Surname.toLowerCase();
    patientsName[i].ID = array[i + 1][0].toLowerCase();
}

// console.log(patientsName);

//   data of out elements on our html page
const HTMLPage = {};
for(let i = 0; i < m; i++){
    HTMLPage[Keys[i]] = document.querySelector("." + Keys[i]);
}

// console.log(HTMLPage);