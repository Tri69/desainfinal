let setItems = [];

function AddOrder(add) {
	const konfirmasi = confirm("Apakah anda ingin order?");
	const produk = ["", {
		name : "Mie Ayam",
		harga :  12000,
		img : "../gambar/bakso2.png"
	}, 
	{
		name : "Bakso",
		harga : 13000
	},
	{
		name : "Mie Ayam Bakso",
		harga : 17000
	}]
	if (konfirmasi == true) {
		var img = produk[add].img;
		var name1 = produk[add].name;
		var jumlah = parseInt(prompt("Masukkan Jumlah Order"))
		var harga = produk[add].harga * jumlah;
		alert("Produk yang ke "+ name + " Harga : "+ harga);
		alert("Cek keranjang Anda")
		AddKeranjang(name1, harga);
	}
	else {
		alert("Gagal Order , Silahkan Order lagi")
	}
}

function AddKeranjang (name1, harga) {
		const img1 = document.querySelector(".img_menu")
		const name_order = document.querySelector(".nama")
		const harga_order = document.querySelector(".harga")
		const total = document.querySelector(".total");
		//img1.style.BackgroundImage = img;
		name_order.textContent = "Menu : " + name1;
		harga_order.textContent = "Harga : Rp " + harga;
		total.textContent = "Total : Rp " + harga;
		setItems.push(name1, harga);
}

function SendWhatsapp(nama, value) {
		const UrlWhatsapp = `https://wa.me/6281717613281?text=Selamat Siang, saya mau pesan : ${setItems[0]} Total Harga :Rp. ${setItems[1]}`; 
		window.open(UrlWhatsapp, "_blank")
} 

const klik = document.querySelector(".keranjang"); 
klik.addEventListener('click', () => {const tampil = document.querySelector(".harga")
	tampil.style.display = "block"
})

const keranjang = document.querySelector(".keranjang");
const close = document.querySelector(".close")
keranjang.addEventListener('click', () => {
	const myorder = document.getElementById("myorder");
	const myorder_content = document.getElementById("myorder_content");
	myorder.style.display = "block"
	myorder_content.style.display = "block"
});

close.addEventListener("click", ()=> {
	const myorder = document.getElementById("myorder");
	const myorder_content = document.getElementById("myorder_content");
	myorder.style.display = "none"
	myorder_content.style.display = "none"
})


const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".is");

console.log(nav)
hamburger.addEventListener("click", ()=> {
	nav.classList.toggle("open")
})