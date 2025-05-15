function auto_get_amount_value() {
	let auto_get_amount_value = document.getElementById("purchase_amount").value * ico_rate;
	if (auto_get_amount_value > available_tokens) {
		set_max_get();
	} else {
		document.getElementById("get_amount").value = auto_get_amount_value.toFixed(18);
	}
}

document.getElementById("purchase_amount").addEventListener("change", function() {
	auto_get_amount_value();
});

function set_max_get() {
	document.getElementById("get_amount").value = document.getElementById("available_tokens").innerText;
	auto_purchase_amount_value();
}

function auto_purchase_amount_value() {
    let auto_get_amount_value = document.getElementById("get_amount").value;
	if (auto_get_amount_value > available_tokens) {
		set_max_purchase();
	} else {
		document.getElementById("purchase_amount").value = auto_get_amount_value / ico_rate;
	}
}

function set_max_purchase() {
	document.getElementById("purchase_amount").value = document.getElementById("native-balance").innerText;
	auto_get_amount_value();
}

document.getElementById("get_amount").addEventListener("change", function() {
	auto_purchase_amount_value();
});