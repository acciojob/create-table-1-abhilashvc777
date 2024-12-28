function insert_Row() {
    const tr = document.querySelectorAll("#sampleTable tr")
    const tr1= document.createElement("tr")

    const td1 = document.createElement("td")
    td1.textContent = "New Cell1"
    const td2 = document.createElement("td")
    td2.textContent = "New Cell2"

    tr1.appendChild(td1)
    tr1.appendChild(td2)

    const parent = tr[0].parentNode
    parent.insertBefore(tr1,tr[0])
}