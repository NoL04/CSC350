const artists = [
  { name: "The Marias",      songs: "No One Noticed, Sienna",                             dob: "11/21/1994" },
  { name: "Clairo",          songs: "Hello?, Juna",                                       dob: "08/18/1998" },
  { name: "Paramore",        songs: "All I Wanted, Misery Buisness",                      dob: "12/27/1988" },
  { name: "Kendrick Lamar",  songs: "Sing About Me, I'm Dying Of Thirst, XXX. FEAT. U2.", dob: "06/17/1987" },
  { name: "Steve Lacy",      songs: "Some, Infrunami",                                    dob: "05/23/1998" }
];

const tableBody = document.getElementById("artistTable");


for (let i = 0; i < artists.length; i++) {
    const row = document.createElement("tr");

    row.innerHTML =
        "<td>" + artists[i].name + "</td>" +
        "<td>" + artists[i].songs + "</td>" +
        "<td>" + artists[i].dob + "</td>";

    tableBody.appendChild(row);
}