async function loadIssues() {
    const res = await fetch("http://localhost:5000/issues");
    const data = await res.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(issue => {
        const li = document.createElement("li");
        li.textContent = issue.title + " (" + issue.status + ")";
        list.appendChild(li);
    });
}

async function addIssue() {
    const input = document.getElementById("issueInput");
    const title = input.value;

    if (!title) return;

    await fetch("http://localhost:5000/issues", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    });

    input.value = "";
    loadIssues();
}

// load when page opens
loadIssues();