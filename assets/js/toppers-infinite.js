// ===================================
// TOPPERS WALL - DUAL MARQUEE LOGIC
// ===================================

const toppersData = [
    {
        name: "Abinaya S",
        score: "Centum",
        subject: "Mathematics",
        year: "2024",
        image: "assets/images/students.jpg",
        headline: "District Rank 1",
        testimonial: "Achieving a centum in Maths was my dream. The conceptual teaching here made it possible.",
        video: null
    },
    {
        name: "Barath Kumar",
        score: "Centum",
        subject: "Science",
        year: "2024",
        image: "assets/images/library.jpg",
        headline: "School Topper",
        testimonial: "The practical approach to Science helped me score full marks without rote memorization.",
        video: true
    },
    {
        name: "Charan J",
        score: "Centum",
        subject: "Mathematics",
        year: "2024",
        image: "assets/images/classroom.jpg",
        headline: "Maths Whiz",
        testimonial: "Consistent practice tests helped me eliminate silly mistakes and score 100/100.",
        video: null
    },
    {
        name: "Deepa M",
        score: "Centum",
        subject: "Social Science",
        year: "2023",
        image: "assets/images/lab.jpg",
        headline: "State Rank 5",
        testimonial: "Detailed notes and map work practice sessions were the key to my full marks in Social.",
        video: null
    },
    {
        name: "Eswar P",
        score: "Centum",
        subject: "Physics",
        year: "2023",
        image: "assets/images/students.jpg",
        headline: "Subject Topper",
        testimonial: "Physics problems became easy to solve after attending the special problem-solving sessions.",
        video: null
    },
    {
        name: "Fathima Z",
        score: "Centum",
        subject: "Chemistry",
        year: "2023",
        image: "assets/images/library.jpg",
        headline: "Chemistry Expert",
        testimonial: "Understanding the reactions and equations deeply helped me secure a centum in Chemistry.",
        video: null
    },
    {
        name: "Gokul R",
        score: "Centum",
        subject: "Mathematics",
        year: "2022",
        image: "assets/images/classroom.jpg",
        headline: "Maths Genius",
        testimonial: "Speed and accuracy training gave me the edge to complete the paper on time with full marks.",
        video: null
    },
    {
        name: "Harini V",
        score: "Centum",
        subject: "Computers",
        year: "2022",
        image: "assets/images/lab.jpg",
        headline: "Comp Sci Topper",
        testimonial: "The coding logic was taught so clearly that I scored full marks in Computer Science.",
        video: null
    },
    {
        name: "Ishwarya K",
        score: "Centum",
        subject: "Accounts",
        year: "2022",
        image: "assets/images/students.jpg",
        headline: "Commerce Star",
        testimonial: "Accounts balance sheet techniques taught here are unique and very effective.",
        video: null
    },
    {
        name: "Janani T",
        score: "Centum",
        subject: "Mathematics",
        year: "2021",
        image: "assets/images/library.jpg",
        headline: "Consistent 100",
        testimonial: "Scoring 100 in all internal tests gave me the confidence for the board exam.",
        video: null
    },
    {
        name: "Karthik Raja",
        score: "Centum",
        subject: "Biology",
        year: "2021",
        image: "assets/images/classroom.jpg",
        headline: "Bio Champ",
        testimonial: "Diagram practice and keyword highlighting tips helped me bag a centum in Biology.",
        video: null
    },
    {
        name: "Lakshmi N",
        score: "Centum",
        subject: "Business Maths",
        year: "2020",
        image: "assets/images/lab.jpg",
        headline: "BM Topper",
        testimonial: "Business Maths was tough initially, but the faculty made it my favorite subject.",
        video: null
    },
    {
        name: "Mohan S",
        score: "Centum",
        subject: "Mathematics",
        year: "2020",
        image: "assets/images/students.jpg",
        headline: "Rank Holder",
        testimonial: "I owe my engineering seat to the cut-off boost I got from my Maths centum.",
        video: null
    },
    {
        name: "Nithya P",
        score: "Centum",
        subject: "Economics",
        year: "2019",
        image: "assets/images/library.jpg",
        headline: "Eco Topper",
        testimonial: "Understanding economic concepts with real-world examples made learning easy.",
        video: null
    }
];

// Initialize
function initializeMarquee() {
    try {
        console.log("Initializing Marquee...");
        if (typeof toppersData === 'undefined' || !toppersData) {
            console.error("Toppers Data is missing!");
            return;
        }

        populateMarqueeRows();
        animateMarqueeCounters();
        console.log("Marquee Initialized Successfully.");
    } catch (error) {
        console.error("Marquee Initialization Failed:", error);
    }
}

function populateMarqueeRows() {
    const row1 = document.getElementById('marqueeRow1');
    const row2 = document.getElementById('marqueeRow2');

    if (!row1 || !row2) return;

    // Split data into two halves
    const midpoint = Math.ceil(toppersData.length / 2);
    const dataRow1 = toppersData.slice(0, midpoint);
    const dataRow2 = toppersData.slice(midpoint);

    // Populate Row 1 (Duplicate content for seamless loop)
    // We duplicate it 2-3 times to ensure the track is long enough
    appendCardsToRow(row1, dataRow1);
    appendCardsToRow(row1, dataRow1);

    // Populate Row 2
    appendCardsToRow(row2, dataRow2);
    appendCardsToRow(row2, dataRow2);
}

function appendCardsToRow(container, data) {
    data.forEach((topper, index) => {
        const card = createTopperCard(topper);
        container.appendChild(card);
    });
}

// Create Card HTML
function createTopperCard(data) {
    const card = document.createElement('div');
    card.className = 'success-card';
    if (data.video) card.classList.add('has-video');

    const playButtonHTML = data.video ?
        `<div class="play-icon"><i class="fas fa-play"></i></div>` : '';

    // Truncate testimonial
    const maxChars = 80;
    const isLong = data.testimonial.length > maxChars;
    const displayText = isLong ? data.testimonial.substring(0, maxChars) + "..." : data.testimonial;
    const readMoreHTML = isLong ? `<span class="read-more-link" onclick="toggleReadMore(this, '${data.testimonial.replace(/'/g, "\\'")}')">Read more</span>` : '';

    card.innerHTML = `
        <div class="card-header">
            <div class="card-avatar">
                <img src="${data.image}" alt="${data.name}">
                ${playButtonHTML}
            </div>
            <div class="card-identity">
                <h4 class="card-name">${data.name}</h4>
                <div class="card-role-highlight">${data.headline}</div>
            </div>
        </div>
        
         <div class="card-score-box">
            <span class="score-badge">${data.score}</span>
            <span class="score-details">${data.subject}</span>
        </div>
        
        <p class="card-testimonial">"${displayText}"${readMoreHTML}</p>
    `;

    return card;
}

// Global Read More Toggle
window.toggleReadMore = function (element, fullText) {
    const p = element.parentElement;
    p.textContent = `"${fullText}"`;
};

// Renamed to avoid conflict with script.js
function animateMarqueeCounters() {
    const counters = document.querySelectorAll('.count-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;
        const updateCount = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}


// Init on Load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMarquee);
} else {
    initializeMarquee();
}
