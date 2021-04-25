const SearchInput = document.querySelector(".search-bar");
function searchForPatientID(){
    let value = SearchInput.value.toLowerCase();
    for(let i = 0; i < n - 1; i++){
        if(value === patientsName[i].name || value === patientsName[i].ID) return i;
    }
    return -1;
}

SearchInput.addEventListener("keyup", (key)=>{
    if(key.keyCode == 13){
        displayPatientInformation(searchForPatientID());
    }
})

function displayPatientInformation(index){
    if(index < 0 || index > n - 1){
        alert("Patient not found!!");
        return;
    }
    const patient = patients[index];
    for(let i = 0; i < m; i++){
        // console.log(P)
        if(Keys[i] !== "PatientID")HTMLPage[Keys[i]].innerText = patient[Keys[i]];
        if(Keys[i] == "PastMedicalHistory" || Keys[i] == "Medications"){
            let s = patient[Keys[i]];
            let arr = s.split('\n');
            HTMLPage[Keys[i]].innerText = "";
            for(let j = 0; j < arr.length; j++){
                // console.log(s, arr);
                let span = document.createElement("span");
                span.innerText = arr[j];
                HTMLPage[Keys[i]].append(span);
            }
        }
    }


}

displayPatientInformation(0);

