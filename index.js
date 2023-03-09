fetch("shirts.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td> <img src='${product.url}'> </td>
				<td>${product.productName}</td>
				<td>${product.priceList}</td>
				<td>${product.brand}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});
