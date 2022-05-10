class pc {
    constructor(cpu, motherboard, ram, gpu, memory, power, pccase, price) {

        this.cpu = cpu;
        this.motherboard = motherboard;
        this.ram = ram;
        this.gpu = gpu;
        this.memory = memory;
        this.power = power;
        this.pccase = pccase;
        this.price = price;

    }
}

const pc1 = new pc("Micro Intel Core I7 10700F 8 Núcleos / 16 Threads HT 4.8Ghz (10ma Gen) LGA1200", "Mother ASUS PRIME B460M-A R2.0 (10ma/11va Gen) LGA1200 ", "2x Memoria RAM PNY 8GB DDR4 3200Mhz XLR8 ", "Placa de Video Palit NVIDIA GeForce RTX 3080 GAMING PRO 10GB GDDR6X LHR ", "Disco SSD M2 WD Blue 500Gb SN550 NVME", "Fuente Gigabyte P750GM 750W 80 Plus Gold Modular S/Cable", "Gabinete MSI MAG Vampiric 010 ARGB Vidrio Templado 1x12cm", 411248)
const pc2 = new pc("Micro Intel Core I5 10400F 6 Núcleos / 12 Threads HT 4.3Ghz (10ma Gen) LGA1200", "Mother ASUS PRIME B460M-A R2.0 (10ma/11va Gen) LGA1200", "Memoria RAM Genérica 8GB DDR4 3200Mhz OEM", "Placa de Video Palit NVIDIA GeForce GTX 1660 DUAL 6GB GDDR5", "Disco SSD Lexar 480Gb NQ100 SATA3", "Fuente AZZA 650W 80 Plus Bronce", "Gabinete AZZA Golem 221G Vidrio Templado 2x12cm LED", 164998)
const pc3 = new pc("Micro AMD Ryzen 7 5700G - 8 Núcleos / 16 Threads + Radeon Graphics AM4", "Mother ASROCK A520M-HVS AM4 (3ERA/4TA/5TA GEN)", "2x Memoria RAM PNY 8GB DDR4 3200Mhz XLR8", "Vega 7", "Disco SSD ADATA 240Gb SU630 SATA3", "Gabinete KIT ATX C/Fuente 500w. Teclado. Mouse y Parlantes", "", 116248)
const pc4 = new pc("Micro Intel Core I3 10100F 4 Núcleos / 8 Threads HT 4.3Ghz (10ma Gen) LGA1200", "Mother ASUS PRIME B460M-A R2.0 (10ma/11va Gen) LGA1200", "Memoria RAM Genérica 8GB DDR4 3200Mhz OEM", "Placa de Video Palit NVIDIA GeForce RTX 3050 DUAL 8GB GDDR6 LHR", "Disco SSD Lexar 480Gb NQ100 SATA3", "Fuente AZZA 650W 80 Plus Bronce", "Gabinete AZZA Golem 221G Vidrio Templado 2x12cm LED", 179998)
const pc5 = new pc("Micro AMD Ryzen 5 5600X - 6 Núcleos / 12 Threads 4.6Ghz AM4", "Mother ASROCK A520M-HVS AM4 (3ERA/4TA/5TA GEN)", "Memoria RAM Genérica 8GB DDR4 3200Mhz OEM", "Placa de Video Palit NVIDIA GeForce GTX 1660 TI DUAL 6GB GDDR6", "Disco SSD Lexar 480Gb NQ100 SATA3", "Fuente AZZA 650W 80 Plus Bronce", "Gabinete AZZA Golem 221G Vidrio Templado 2x12cm LED", 202498)

const pcs = [pc1, pc2, pc3, pc4, pc5]

localStorage.clear()

let contenedor = document.getElementById("contenedor")

function mostrarCarrito (pc) {
    localStorage.getItem("pc")

    let opcion = JSON.parse(localStorage.getItem("pc")) ;
    
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.innerText ="La cpu es: " + opcion.cpu;

    const li2 = document.createElement("li");
    li2.innerText ="La motherboard es: " + opcion.motherboard;

    const li3 = document.createElement("li");
    li3.innerText = "La ram es: " + opcion.ram;

    const li4 = document.createElement("li");
    li4.innerText = "La gpu es: " + opcion.gpu;

    const li5 = document.createElement("li");
    li5.innerText = "La memoria es: " + opcion.memory;

    const li6 = document.createElement("li");
    li6.innerText = "La fuente de poder es: " + opcion.power;

    const li7 = document.createElement("li");
    li7.innerText = "El gabinete es: " + opcion.pccase;

    const li8 = document.createElement("li");
    li8.innerText = "El precio total de la PC es de : $" + opcion.price;

    ul.append(li1, li2, li3, li4, li5, li6, li7, li8);

    contenedor.append(ul);

  

    console.log(opcion)
}




const button1 = document.getElementById("btn1");
button1.addEventListener("click", () => {

    localStorage.setItem("pc", JSON.stringify(pcs[0]))
});

const button2 = document.getElementById("btn2");
button2.addEventListener("click", () => {

    localStorage.setItem("pc", JSON.stringify(pcs[1]))
});

const button3 = document.getElementById("btn3");
button3.addEventListener("click", () => {

    localStorage.setItem("pc", JSON.stringify(pcs[2]))
});

const button4 = document.getElementById("btn4");
button4.addEventListener("click", () => {

    localStorage.setItem("pc", JSON.stringify(pcs[3]))
});

const button5 = document.getElementById("btn5");
button5.addEventListener("click", () => {

    localStorage.setItem("pc", JSON.stringify(pcs[4]))
});

const button6 = document.getElementById("btn6");
button6.addEventListener("click", () => {
    mostrarCarrito()
})