const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSRwejFfqe-DVvKcdGEOg6fjMHYeIJ3gdEGgco_W_O7ronNGhMXgDZGR9rR7__i5jE2JLu7pFWY208/pub?gid=0&single=true&output=csv";

fetch(csvURL)
  .then(res => res.text())
  .then(text => {
    const row = text.trim().split("\n")[1].split(",").map(x => x.trim());

    const title = row[0];
    const subtitle = row[1];
    const applyLink = row[2];
    const buttonText = row[3];

    document.getElementById("mainTitle").innerText = title;
    document.getElementById("subTitle").innerText = subtitle;
    document.getElementById("applyBtn").innerText = buttonText;
    document.getElementById("applyBtn").href = applyLink;
  })
  .catch(err => console.error("CSV Error:", err));
