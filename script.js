function insert_Row() {
    //Write your code heredocument.querySelectorAll("#sampleTable tr")
  const tr1= document.createElement("tr")
  // const table = document.querySelector("#sampleTable")
  const tr = document.querySelectorAll("#sampleTable tr")
  // tr1.setAttribute("id","tr1")
  const insert = `<td>New cell1</td> 
		         <td>New cell2</td>`
	tr1.innerHTML = insert
	const parent = tr[0].parentNode
	parent.insertBefore(tr1,tr[0])
}
