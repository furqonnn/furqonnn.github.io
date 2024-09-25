const footer = document.getElementById("footer")

function loopingText () {
        setTimeout(() => {
            footer.innerHTML = "🙏THANKYOU🙏"

            setTimeout(() => {
                footer.innerHTML = "🙏TERIMAKASIH🙏"

                setTimeout(() => {
                    footer.innerHTML = "WEB INI DIBUAT SEPENUH HATI🙏"
                    setTimeout(() => {
                        footer.innerHTML = "🙏ARIGATOU🙏"
                        setTimeout(() => {
                            loopingText()
                        }, 1000)
                    }, 1000)
                }, 1000);
            }, 1000);
        }, 0);
        
}

loopingText()
    

const nama = "Furqontoru";
let usia = 1000;
const live = "batam"

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia < 18) {
        generasi = "generasi remaja";
    } 
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa"
    }
    else if (usia > 30 && usia < 100) {
        generasi = "generasi tua"
    }
    else if (usia < 10 && usia > 1) {
        generasi = "generasi z"
    }
    else {
        generasi = "fosil"
    }
    return biodata.innerHTML = generasi;
}


console.log(nama);
console.log(usia);
console.log(live);

generateBiodata();
