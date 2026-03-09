// قائمة أسماء الأشخاص
const familyMembers = [ "رايد" , "عبدالرحمن" ,"فيصل","فارس", "راكان ","علياء" , "شهد", "أحمد", "نجد", "لولو", "محمد", "غادة", "سارة"];

const list = document.getElementById("family-list");

familyMembers.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
});
