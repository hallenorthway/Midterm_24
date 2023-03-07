fetch("data.json")
.then(response => response.json())
.then(data => dataToHTML(data));

function dataToHTML(data){
    let mainContainer = document.getElementsByClassName("card-text");
    for (let i = 0; i < data.Tops.length; i++) {
    let itemName = data.Tops[i].productName;
    //let lastName = data.superheroe[i].lastName;
    //let job = data.superheroe[i].job;
    let mytr = document.createElement("p");
    mytr.innerHTML = `
  
    <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">${itemName}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div> `;
    mainContainer.appendChild(mytr);
    }
}
