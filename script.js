const teams = {
    utpal: {
        name: "LOOSER 11",
        players: [
            { name: "হিরন্ময়", img: "images/hironmoy.jpg" },
            { name: "জিৎ", img: "images/jit.jpg" },
            { name: "প্রভাত", img: "images/prabhat.jpg" },
            { name: "ভোলা", img: "images/bhola.jpg" },
            { name: "পবিত্র", img: "images/pabitra.jpg" },
            { name: "অঙ্কন", img: "images/ankan.jpg" },
            { name: "রঞ্জিত", img: "images/ranjit.jpg" },
            { name: "মান্তু", img: "images/mantu.jpg" }
        ]
    },

    sukanta: {
        name: "SUKANTA's Team",
        players: [
            { name: "সুদীপ", img: "images/sudip.jpg" },
            { name: "সৌভিক", img: "images/souvik.jpg" },
            { name: "আকাশ", img: "images/akash.jpg" },
            { name: "সাত্ত্বিক", img: "images/sattwik.jpg" },
            { name: "নিলয়", img: "images/niloy.jpg" },
            { name: "তাপস", img: "images/tapas.jpg" },
            { name: "রকি", img: "images/rocky.jpg" },
            { name: "সুরজিৎ", img: "images/surjit.jpg" }
        ]
    },

    jayanta: {
        name: "JAYANTA's Team",
        players: [
            { name: "অভিষেক (রাজু)", img: "images/abhishek-raju.jpg" },
            { name: "সোমনাথ", img: "images/somnath.jpg" },
            { name: "প্রসেনজিৎ", img: "images/prosenjit.jpg" },
            { name: "অভিষেক (অভি)", img: "images/abhishek-abhi.jpg" },
            { name: "অর্পণ", img: "images/arpan.jpg" },
            { name: "সুব্রত", img: "images/subrata.jpg" },
            { name: "শঙ্খ", img: "images/shankha.jpg" },
            { name: "দেবাঞ্জন", img: "images/debanjan.jpg" },
            { name: "দেবজিৎ", img: "images/debjit.jpg" }
        ]
    },

    rahul: {
        name: "RAHUL's Team",
        players: [
            { name: "অরিন্দম", img: "images/arindam.jpg" },
            { name: "কাজু", img: "images/kaju.jpg" },
            { name: "ইন্দ্রজিৎ", img: "images/indrajit.jpg" },
            { name: "কৌশিক", img: "images/kaushik.jpg" },
            { name: "সৌমেন্দু", img: "images/soumendu.jpg" },
            { name: "পিন্টু", img: "images/pintu.jpg" },
            { name: "সৌম্যজিৎ", img: "images/soumyajit.jpg" },
            { name: "পলাশ", img: "images/palash.jpg" }
        ]
    }
};

function showTeam(teamKey) {
    const team = teams[teamKey];
    let html = `<h2>${team.name}</h2>`;
    html += `<p>মোট খেলোয়াড়: ${team.players.length}</p>`;

    team.players.forEach(p => {
        html += `
            <div class="player">
                <img src="${p.img}">
                <p>${p.name}</p>
            </div>
        `;
    });

    document.getElementById("teamDetails").innerHTML = html;
}
