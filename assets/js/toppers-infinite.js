// ===================================
// TOPPERS WALL - DUAL MARQUEE LOGIC
// ===================================

const toppersData = [
    {
        name: "S. Anirudh Karthi",
        score: "520/600",
        subject: "Maths 99, Physics 81, Chemistry 88",
        year: "2024-2025",
        image: "assets/images/students-img/anirudh.webp",
        headline: "12th Std",
        testimonial: "Suguna V PIP Mat Hr Sec School",
        video: null
    },
    {
        name: "K. Madhushree",
        score: "523/600",
        subject: "Maths 96, Physics 73, Chemistry 88",
        year: "2024-2025",
        image: "assets/images/students-img/madhushree.webp",
        headline: "12th Std",
        testimonial: "Vimal Jyothi Convent Mat Hr Sec School, Saravanampatti",
        video: null
    },
    {
        name: "Harshini A",
        score: "550/600",
        subject: "Maths 96, Physics 90, Chemistry 85",
        year: "2024-2025",
        image: "assets/images/logo.webp",
        headline: "12th Std",
        testimonial: "Vidya Vikasini Mat Hr Sec School, Thudiyalur",
        video: null
    },
    {
        name: "Vijayaprasanna M",
        score: "490/600",
        subject: "Maths 95, Physics 79, Chemistry 71",
        year: "2024-2025",
        image: "assets/images/students-img/vijayaprasanna.webp",
        headline: "12th Std",
        testimonial: "Sri Ramakrishna Mat Hr Sec School, Vattamalaipalayam",
        video: null
    },
    {
        name: "Nishalini G.S",
        score: "541/600",
        subject: "Maths 94, Physics 82, Chemistry 94",
        year: "2024-2025",
        image: "assets/images/students-img/nishalini.webp",
        headline: "12th Std",
        testimonial: "G.D. Mat Hr Sec School",
        video: null
    },
    {
        name: "Nila H",
        score: "553/600",
        subject: "Maths 92, Physics 94, Chemistry 90",
        year: "2024-2025",
        image: "assets/images/logo.webp",
        headline: "12th Std",
        testimonial: "Vidya Vikasini Mat Hr Sec School, Thudiyalur",
        video: null
    },
    {
        name: "Jason B",
        score: "543/600",
        subject: "Maths 92, Physics 96, Chemistry 92",
        year: "2024-2025",
        image: "assets/images/students-img/jason.webp",
        headline: "12th Std",
        testimonial: "SES Matric Hr Sec School",
        video: null
    },
    {
        name: "Shalom Biyona A",
        score: "508/600",
        subject: "Maths 90, Physics 76, Chemistry 87",
        year: "2024-2025",
        image: "assets/images/students-img/shalom.webp",
        headline: "12th Std",
        testimonial: "St. Joseph Matric Hr Sec School",
        video: null
    },
    {
        name: "Maheswari J",
        score: "473/600",
        subject: "Maths 90, Physics 78, Chemistry 73",
        year: "2024-2025",
        image: "assets/images/students-img/maheswari.webp",
        headline: "12th Std",
        testimonial: "Kikani Matric Hr Sec School",
        video: null
    },
    {
        name: "A.J. Vikrant",
        score: "389/500",
        subject: "Chemistry 93/100",
        year: "2024-2025",
        image: "assets/images/students-img/vikrant.webp",
        headline: "12th Std CBSE",
        testimonial: "Sri Chaitanya Techno School",
        video: null
    },
    {
        name: "Darshana S.R",
        score: "514/600",
        subject: "Maths 87, Physics 84, Chemistry 84",
        year: "2024-2025",
        image: "assets/images/students-img/image.webp",
        headline: "12th Std",
        testimonial: "Bharatiya Vidya Bhavan (BVB RS Puram)",
        video: null
    },
    {
        name: "Gowtham S.T",
        score: "489/600",
        subject: "Maths 86, Physics 85, Chemistry 75",
        year: "2024-2025",
        image: "assets/images/students-img/image copy.webp",
        headline: "12th Std",
        testimonial: "G.D. Mat Hr Sec School",
        video: null
    },
    {
        name: "Sadhana N",
        score: "470/500",
        subject: "Maths 96, Science 96",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 2.webp",
        headline: "10th Std",
        testimonial: "CMS Matric Hr Sec School",
        video: null
    },
    {
        name: "Karthika R",
        score: "471/500",
        subject: "Maths 94, Science 93",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 3.webp",
        headline: "10th Std",
        testimonial: "SES Matric Hr Sec School",
        video: null
    },
    {
        name: "Dharanish A",
        score: "418/500",
        subject: "Maths 93, Science 80",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 4.webp",
        headline: "10th Std",
        testimonial: "CNS Matric Hr Sec School",
        video: null
    },
    {
        name: "Sangamithra B",
        score: "462/500",
        subject: "Maths 92, Science 88",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 5.webp",
        headline: "10th Std",
        testimonial: "Avila Convent Mat Hr Sec School",
        video: null
    },
    {
        name: "Sudarsan S",
        score: "420/500",
        subject: "Maths 92, Science 90",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 6.webp",
        headline: "10th Std",
        testimonial: "Vidya Vikasini Mat Hr Sec School, Thudiyalur",
        video: null
    },
    {
        name: "Keerthi Harshini M.K",
        score: "420/500",
        subject: "Maths 85, Science 81",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 7.webp",
        headline: "10th Std",
        testimonial: "G.D. Mat Hr Sec School",
        video: null
    },
    {
        name: "Vikash V",
        score: "94/100",
        subject: "Maths 94",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 8.webp",
        headline: "10th Std",
        testimonial: "GHSS School, Ganapathy",
        video: null
    },
    {
        name: "Sharon Antony A",
        score: "532/600",
        subject: "Maths 91",
        year: "2024-2025",
        image: "assets/images/students-img/image copy 9.webp",
        headline: "10th Std CBSE",
        testimonial: "The Camford INTL School",
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
// Create Card HTML - Redesigned Sapphire Card (Reference Based)
function createTopperCard(data) {
    const card = document.createElement('div');
    card.className = 'topper-card-sapphire';

    // 1. Avatar Logic
    const imgHTML = data.image ?
        `<img src="${data.image}" alt="${data.name}" class="sapphire-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` :
        `<div style="width:100%;height:100%;background:#e2e8f0;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#64748b;font-size:1.5rem;"><i class="fas fa-user"></i></div>`;
    
    const fallbackHTML = `<div style="width:100%;height:100%;background:#e2e8f0;border-radius:50%;display:none;align-items:center;justify-content:center;color:#64748b;font-size:1.5rem;"><i class="fas fa-user"></i></div>`;

    // 2. Parse Subject String (e.g., "Maths 86, Physics 85, Chemistry 75")
    let subjectsHTML = '';
    if (data.subject) {
        const subjectsArr = data.subject.split(',');
        subjectsArr.forEach(subStr => {
            const parts = subStr.trim().split(' ');
            const mark = parts.pop(); // Last part is usually the mark
            const name = parts.join(' '); // Rest is subject name
            subjectsHTML += `
                <div class="subject-row">
                    <span class="subj-name">${name}</span>
                    <span class="subj-mark">${mark}</span>
                </div>
            `;
        });
    }

    // 3. Score Split
    const [scoreVal, scoreMax] = data.score.includes('/') ? data.score.split('/') : [data.score, ''];

    // 4. Build HTML
    card.innerHTML = `
        <div class="sapphire-header">
            <div class="sapphire-avatar-box">
                ${imgHTML}
                ${fallbackHTML}
            </div>
            <div class="sapphire-info">
                <h4>${data.name}</h4>
                <div class="sapphire-badges">
                    <span class="badge-pill-blur">${data.headline}</span>
                    <span class="year-text">${data.year}</span>
                </div>
            </div>
        </div>

        <div class="sapphire-score-box">
            <span class="score-label">Total Score</span>
            <div class="big-score">${scoreVal}<span>/${scoreMax}</span></div>
        </div>

        <div class="sapphire-divider"></div>

        <div class="sapphire-subjects">
            ${subjectsHTML}
        </div>

        <div class="sapphire-footer">
            <div class="school-name">${data.testimonial}</div>
             <span class="footer-badge">Academic Excellence</span>
        </div>
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
