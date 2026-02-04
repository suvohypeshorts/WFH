const csvURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRSRwejFfqe-DVvKcdGEOg6fjMHYeIJ3gdEGgco_W_O7ronNGhMXgDZGR9rR7__i5jE2JLu7pFWY208/pub?gid=0&single=true&output=csv";

fetch(csvURL)
.then(res => res.text())
.then(data => {
  const rows = data.trim().split("\n").slice(1);

  rows.forEach(row => {
    const [page,title,subtitle,btnText,btnLink] = row.split(",");

    if(page === PAGE_TYPE){
      document.getElementById("title").innerText = title;
      document.getElementById("subtitle").innerText = subtitle;
      document.getElementById("btn").innerText = btnText;
      document.getElementById("btn").href = btnLink;
    }
  });
});
