/* =====================================================
   LEARNORA - SMART STUDENT LEARNING PLATFORM
   Telangana SCERT & National Curriculum Engine
   ===================================================== */

"use strict";

/* =====================================================
   1. CURRICULUM DATABASE (Telangana SCERT & National)
   ===================================================== */

const curriculumDatabase = {
    // ----------------- TELANGANA STATE BOARD (TS SCERT) -----------------
    ts: {
        boardName: "Telangana State Board (TS SCERT)",
        classes: [
            {
                id: "ts-10",
                name: "Class 10 (SSC)",
                level: "highschool",
                badge: "Board Exam",
                icon: "🏆",
                description: "Telangana SSC 10th Standard board preparation across Maths, Science, Social & English.",
                subjects: [
                    {
                        id: "ts-10-maths",
                        name: "Mathematics",
                        icon: "📐",
                        color: "blue",
                        description: "Real Numbers, Polynomials, Linear Equations, Trigonometry & Coordinate Geometry.",
                        chapters: [
                            {
                                id: "ts-10-m-ch1",
                                name: "Chapter 1: Real Numbers",
                                icon: "🔢",
                                description: "Euclid's division lemma, Fundamental theorem of arithmetic, Logarithms.",
                                topics: [
                                    "Euclid's Division Lemma",
                                    "Fundamental Theorem of Arithmetic",
                                    "Revisiting Irrational Numbers",
                                    "Logarithms and Laws of Logs"
                                ]
                            },
                            {
                                id: "ts-10-m-ch3",
                                name: "Chapter 3: Polynomials",
                                icon: "📈",
                                description: "Geometrical meaning of zeroes, Relationship between zeroes and coefficients.",
                                topics: [
                                    "Zeroes of a Polynomial",
                                    "Relationship Between Zeroes & Coefficients",
                                    "Division Algorithm for Polynomials"
                                ]
                            },
                            {
                                id: "ts-10-m-ch11",
                                name: "Chapter 11: Trigonometry",
                                icon: "📐",
                                description: "Trigonometric ratios, Ratios of specific angles, Trigonometric identities.",
                                topics: [
                                    "Trigonometric Ratios (sin, cos, tan)",
                                    "Trigonometric Values of Special Angles",
                                    "Trigonometric Identities"
                                ]
                            }
                        ]
                    },
                    {
                        id: "ts-10-ps",
                        name: "Physical Science",
                        icon: "⚡",
                        color: "purple",
                        description: "Reflection & Refraction of Light, Chemical Equations, Acids & Bases, Electric Current.",
                        chapters: [
                            {
                                id: "ts-10-ps-ch1",
                                name: "Chapter 1: Reflection of Light at Curved Surfaces",
                                icon: "🪞",
                                description: "Spherical mirrors, Focal length, Ray diagrams, Mirror formula & magnification.",
                                topics: [
                                    "Concave and Convex Mirrors",
                                    "Ray Diagrams for Spherical Mirrors",
                                    "Mirror Formula and Sign Convention"
                                ]
                            },
                            {
                                id: "ts-10-ps-ch2",
                                name: "Chapter 2: Chemical Equations",
                                icon: "🧪",
                                description: "Writing and balancing chemical equations, Types of chemical reactions.",
                                topics: [
                                    "Writing and Balancing Chemical Equations",
                                    "Types of Chemical Reactions"
                                ]
                            },
                            {
                                id: "ts-10-ps-ch9",
                                name: "Chapter 9: Electric Current",
                                icon: "💡",
                                description: "Ohm's law, Resistance, Series and Parallel connections, Electric power.",
                                topics: [
                                    "Ohm's Law and Resistance",
                                    "Resistors in Series and Parallel",
                                    "Electric Power and Heating Effect"
                                ]
                            }
                        ]
                    },
                    {
                        id: "ts-10-bs",
                        name: "Biological Science",
                        icon: "🌱",
                        color: "green",
                        description: "Nutrition, Respiration, Circulatory Transportation, Excretion & Heredity.",
                        chapters: [
                            {
                                id: "ts-10-bs-ch1",
                                name: "Chapter 1: Nutrition - The Food Supplying System",
                                icon: "🍃",
                                description: "Autotrophic nutrition, Photosynthesis, Light & dark reactions, Human digestive system.",
                                topics: [
                                    "Photosynthesis & Chloroplast Mechanism",
                                    "Human Digestive System & Enzymes"
                                ]
                            },
                            {
                                id: "ts-10-bs-ch2",
                                name: "Chapter 2: Respiration - The Energy Producing System",
                                icon: "🫁",
                                description: "Cellular respiration, Aerobic vs Anaerobic, Gas exchange in alveoli.",
                                topics: [
                                    "Aerobic vs Anaerobic Respiration",
                                    "Human Respiratory Mechanism"
                                ]
                            }
                        ]
                    },
                    {
                        id: "ts-10-social",
                        name: "Social Studies",
                        icon: "🌍",
                        color: "orange",
                        description: "India: Relief Features, Climate, National Movement & Development Economics.",
                        chapters: [
                            {
                                id: "ts-10-ss-ch1",
                                name: "Chapter 1: India - Relief Features",
                                icon: "🏔️",
                                description: "The Himalayas, Indo-Gangetic Plains, Peninsular Plateau, Coastal plains.",
                                topics: [
                                    "Major Physiographic Divisions of India",
                                    "Himalayas and Their Significance"
                                ]
                            }
                        ]
                    },
                    {
                        id: "ts-10-eng",
                        name: "English & Grammar",
                        icon: "📚",
                        color: "indigo",
                        description: "Personality Development, Grammar (Tenses, Voice, Reported Speech), Writing Skills.",
                        chapters: [
                            {
                                id: "ts-10-eng-ch1",
                                name: "Grammar & Essential Language Skills",
                                icon: "✍️",
                                description: "Active & Passive Voice, Direct & Indirect Speech, Prepositions.",
                                topics: [
                                    "Active and Passive Voice Mastery",
                                    "Direct and Indirect Speech"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ts-9",
                name: "Class 9",
                level: "highschool",
                badge: "Secondary",
                icon: "📘",
                description: "Foundation building in Number Systems, Motion, Force, Tissues, and World Geography.",
                subjects: [
                    {
                        id: "ts-9-maths",
                        name: "Mathematics",
                        icon: "📐",
                        description: "Real Numbers, Polynomials, Coordinate Geometry, Linear Equations.",
                        chapters: [
                            {
                                id: "ts-9-m-ch1",
                                name: "Chapter 1: Real Numbers",
                                icon: "🔢",
                                description: "Irrational numbers on number line, Decimal expansions, Laws of exponents.",
                                topics: ["Types of Numbers", "Decimal Expansions of Real Numbers"]
                            }
                        ]
                    },
                    {
                        id: "ts-9-science",
                        name: "Physical & Biological Science",
                        icon: "🔬",
                        description: "Motion, Laws of Motion, Gravitation, Matter in our Surroundings, Cell Biology.",
                        chapters: [
                            {
                                id: "ts-9-sci-ch1",
                                name: "Chapter: Laws of Motion",
                                icon: "🚀",
                                description: "Newton's first, second, and third laws of motion, Inertia, Momentum.",
                                topics: ["Newton's Three Laws of Motion"]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ts-8",
                name: "Class 8",
                level: "highschool",
                badge: "Middle School",
                icon: "📗",
                description: "Rational Numbers, Linear Equations, Force & Friction, Cell Structure.",
                subjects: [
                    {
                        id: "ts-8-maths",
                        name: "Mathematics",
                        icon: "🔢",
                        description: "Rational Numbers, Squares & Square Roots, Algebraic Expressions.",
                        chapters: [
                            {
                                id: "ts-8-m-ch1",
                                name: "Chapter 1: Rational Numbers",
                                icon: "🧮",
                                description: "Properties of rational numbers, Representation on number line.",
                                topics: ["Types of Numbers"]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ts-7",
                name: "Class 7",
                level: "highschool",
                badge: "Middle School",
                icon: "📙",
                description: "Integers, Fractions and Decimals, Heat, Nutrition in Plants.",
                subjects: [
                    {
                        id: "ts-7-maths",
                        name: "Mathematics",
                        icon: "🔢",
                        description: "Integers, Fractions, Decimals and Data Handling.",
                        chapters: [
                            {
                                id: "ts-7-m-ch1",
                                name: "Chapter 1: Integers",
                                icon: "➕",
                                description: "Properties of addition, subtraction and multiplication of integers.",
                                topics: ["Types of Numbers"]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ts-6",
                name: "Class 6",
                level: "highschool",
                badge: "Foundation",
                icon: "📖",
                description: "Knowing Our Numbers, Whole Numbers, Components of Food, Living Organisms.",
                subjects: [
                    {
                        id: "ts-6-maths",
                        name: "Mathematics",
                        icon: "🔢",
                        description: "Knowing Our Numbers, Basic Geometrical Ideas, Fractions.",
                        chapters: [
                            {
                                id: "ts-6-m-ch1",
                                name: "Chapter 1: Knowing Our Numbers",
                                icon: "🔢",
                                description: "Comparing numbers, Large numbers in practice, Estimation.",
                                topics: ["Types of Numbers"]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ts-11",
                name: "Intermediate 1st Year (Class 11)",
                level: "intermediate",
                badge: "Junior College (TSBIE)",
                icon: "🎓",
                description: "MPC & BiPC streams: Mathematics 1A/1B, Physics, Chemistry, Botany & Zoology.",
                subjects: [
                    {
                        id: "ts-11-maths",
                        name: "Mathematics (1A / 1B)",
                        icon: "📐",
                        description: "Functions, Matrices, Trigonometric Equations, Coordinate Geometry, Calculus.",
                        chapters: [
                            {
                                id: "ts-11-m-ch1",
                                name: "Trigonometry & Functions",
                                icon: "📊",
                                description: "Compound angles, Multiple and submultiple angles, Transformations.",
                                topics: ["Trigonometric Identities"]
                            }
                        ]
                    },
                    {
                        id: "ts-11-phy",
                        name: "Physics",
                        icon: "⚛️",
                        description: "Units and Measurements, Motion in a Straight Line, Laws of Motion, Work Energy Power.",
                        chapters: [
                            {
                                id: "ts-11-p-ch1",
                                name: "Laws of Motion & Work-Energy",
                                icon: "⚡",
                                description: "Newton's laws, Conservation of momentum, Work-Energy theorem.",
                                topics: ["Newton's Three Laws of Motion"]
                            }
                        ]
                    }
                ]
            },
            {
                id: "ts-12",
                name: "Intermediate 2nd Year (Class 12)",
                level: "intermediate",
                badge: "Senior College (TSBIE)",
                icon: "🎓",
                description: "Preparation for IPE, EAMCET/TG EAPCET, JEE & NEET entrance exams.",
                subjects: [
                    {
                        id: "ts-12-maths",
                        name: "Mathematics (2A / 2B)",
                        icon: "📐",
                        description: "Complex numbers, Probability, Integration, Differential equations.",
                        chapters: [
                            {
                                id: "ts-12-m-ch1",
                                name: "Integration & Calculus",
                                icon: "∫",
                                description: "Methods of integration, Definite integrals and areas.",
                                topics: ["Types of Numbers"]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // ----------------- CBSE (NCERT) -----------------
    cbse: {
        boardName: "Central Board of Secondary Education (CBSE)",
        classes: [
            {
                id: "cbse-10",
                name: "Class 10",
                level: "highschool",
                badge: "CBSE Board",
                icon: "🏆",
                description: "NCERT Class 10th Curriculum for Science, Mathematics, Social Science & English.",
                subjects: [
                    {
                        id: "cbse-10-maths",
                        name: "Mathematics",
                        icon: "📐",
                        description: "Real Numbers, Polynomials, Trigonometry, Circles, Statistics.",
                        chapters: [
                            {
                                id: "cbse-10-m-ch1",
                                name: "Real Numbers",
                                icon: "🔢",
                                description: "Fundamental theorem of arithmetic and proofs of irrationality.",
                                topics: ["Fundamental Theorem of Arithmetic", "Revisiting Irrational Numbers"]
                            },
                            {
                                id: "cbse-10-m-ch8",
                                name: "Introduction to Trigonometry",
                                icon: "📐",
                                description: "Trigonometric ratios, Trigonometric identities.",
                                topics: ["Trigonometric Ratios (sin, cos, tan)", "Trigonometric Identities"]
                            }
                        ]
                    },
                    {
                        id: "cbse-10-sci",
                        name: "Science",
                        icon: "🔬",
                        description: "Light Reflection & Refraction, Chemical Reactions, Life Processes, Electricity.",
                        chapters: [
                            {
                                id: "cbse-10-s-ch1",
                                name: "Light - Reflection and Refraction",
                                icon: "🪞",
                                description: "Spherical mirrors, Refraction of light, Lenses and power of lens.",
                                topics: ["Concave and Convex Mirrors", "Ray Diagrams for Spherical Mirrors", "Mirror Formula and Sign Convention"]
                            },
                            {
                                id: "cbse-10-s-ch6",
                                name: "Life Processes",
                                icon: "🌱",
                                description: "Nutrition, Respiration, Transportation and Excretion in plants and animals.",
                                topics: ["Photosynthesis & Chloroplast Mechanism", "Human Digestive System & Enzymes", "Aerobic vs Anaerobic Respiration"]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    // ----------------- ICSE / OTHER BOARDS -----------------
    icse: {
        boardName: "ICSE & Other State Boards",
        classes: [
            {
                id: "icse-10",
                name: "Class 10 (ICSE)",
                level: "highschool",
                badge: "ICSE",
                icon: "🏅",
                description: "ICSE Class 10 Syllabus with in-depth concept coverage.",
                subjects: [
                    {
                        id: "icse-10-maths",
                        name: "Mathematics",
                        icon: "📐",
                        description: "Commercial Mathematics, Algebra, Geometry & Trigonometry.",
                        chapters: [
                            {
                                id: "icse-10-m-ch1",
                                name: "Trigonometry & Ratios",
                                icon: "📐",
                                description: "Trigonometrical identities and Heights & Distances.",
                                topics: ["Trigonometric Ratios (sin, cos, tan)", "Trigonometric Identities"]
                            }
                        ]
                    },
                    {
                        id: "icse-10-phy",
                        name: "Physics",
                        icon: "⚡",
                        description: "Force, Work Power Energy, Light, Sound and Electricity.",
                        chapters: [
                            {
                                id: "icse-10-p-ch1",
                                name: "Current Electricity & Optics",
                                icon: "💡",
                                description: "Ohm's law, Circuits, Reflection and Refraction.",
                                topics: ["Ohm's Law and Resistance", "Concave and Convex Mirrors"]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

/* =====================================================
   2. RICH TOPIC LEARNING DATABASE
   (Explanations, Videos, Examples, Quizzes)
   ===================================================== */

const topicKnowledgeBase = {

    "Euclid's Division Lemma": {
        summary: "Euclid's Division Lemma states that for any two positive integers a and b, there exist unique whole numbers q (quotient) and r (remainder) such that a = bq + r, where 0 ≤ r < b. This is essentially the formal mathematical statement of long division.",
        keyPoints: [
            "Formula: a = bq + r (where 0 ≤ r < b)",
            "Used to compute the Highest Common Factor (HCF) of two large positive integers quickly.",
            "Forms the bedrock of number theory in Class 10 Mathematics."
        ],
        explanation: `
            <h2>1. What is Euclid's Division Lemma?</h2>
            <p>You have been performing division since primary school: when you divide a dividend by a divisor, you get a quotient and a remainder.</p>
            <p><strong>Lemma Definition:</strong> A lemma is a proven statement used for proving another statement.</p>
            
            <div class="formula-box">
                Dividend = (Divisor × Quotient) + Remainder <br>
                <strong>a = b · q + r</strong> &nbsp;&nbsp;(where 0 ≤ r &lt; b)
            </div>

            <h2>2. Understanding with an Example</h2>
            <p>Suppose we divide <strong>45</strong> by <strong>6</strong>:</p>
            <ul>
                <li>45 = (6 × 7) + 3</li>
                <li>Here, dividend <em>a = 45</em>, divisor <em>b = 6</em>, quotient <em>q = 7</em>, and remainder <em>r = 3</em>.</li>
                <li>Notice that the remainder 3 is less than 6 and greater than or equal to 0.</li>
            </ul>

            <div class="info-callout">
                <div class="info-callout-title">💡 Why is this useful in Telangana Board exams?</div>
                <p>Telangana SSC Board frequently asks 2-mark and 4-mark questions requiring students to find the HCF of two numbers (like 135 and 225) using Euclid's Algorithm, or to prove that every positive odd integer is of the form 4q + 1 or 4q + 3.</p>
            </div>

            <h2>3. Euclid's Division Algorithm to Find HCF</h2>
            <p>To find the HCF of two positive integers, say <em>c</em> and <em>d</em> (with c &gt; d):</p>
            <ol>
                <li>Apply Euclid's division lemma to find <em>q</em> and <em>r</em> where <code>c = dq + r</code>.</li>
                <li>If <em>r = 0</em>, <em>d</em> is the HCF.</li>
                <li>If <em>r ≠ 0</em>, apply the division lemma to <em>d</em> and <em>r</em>.</li>
                <li>Continue the process till the remainder is 0. The divisor at this stage will be the required HCF.</li>
            </ol>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/nUaB2dE5TjY",
            watchUrl: "https://www.youtube.com/watch?v=nUaB2dE5TjY",
            channel: "Khan Academy & TS Digital Learning"
        },
        examples: [
            {
                title: "Example 1: Find HCF of 135 and 225",
                problem: "Use Euclid's Division Algorithm to find the HCF of 135 and 225.",
                solution: [
                    "Step 1: Since 225 > 135, apply the lemma: 225 = 135 × 1 + 90 (Remainder = 90 ≠ 0)",
                    "Step 2: Apply the lemma to divisor 135 and remainder 90: 135 = 90 × 1 + 45 (Remainder = 45 ≠ 0)",
                    "Step 3: Apply the lemma to divisor 90 and remainder 45: 90 = 45 × 2 + 0 (Remainder = 0)",
                    "Conclusion: Since the remainder is now 0, the divisor at this step is 45. Hence, HCF(135, 225) = 45."
                ]
            }
        ],
        quiz: [
            {
                question: "In Euclid's Division Lemma (a = bq + r), which condition must the remainder 'r' satisfy?",
                options: ["0 < r ≤ b", "0 ≤ r < b", "0 ≤ r ≤ b", "r > b"],
                answer: 1,
                explanation: "The remainder r can be zero or positive, but it is always strictly less than the divisor b (0 ≤ r < b)."
            },
            {
                question: "If HCF(32, 54) is computed by Euclid's algorithm, what is the value?",
                options: ["2", "4", "8", "6"],
                answer: 0,
                explanation: "54 = 32 × 1 + 22; 32 = 22 × 1 + 10; 22 = 10 × 2 + 2; 10 = 2 × 5 + 0. The divisor when remainder is 0 is 2."
            },
            {
                question: "Any positive odd integer can be represented in which of the following forms?",
                options: ["2q", "2q + 1", "4q", "6q"],
                answer: 1,
                explanation: "Even numbers are of form 2q. Any odd integer is always 1 more than an even number, i.e., 2q + 1."
            }
        ]
    },

    "Trigonometric Ratios (sin, cos, tan)": {
        summary: "Trigonometric ratios describe the relationship between the angles and sides of a right-angled triangle. The three primary ratios are Sine (Opposite/Hypotenuse), Cosine (Adjacent/Hypotenuse), and Tangent (Opposite/Adjacent).",
        keyPoints: [
            "sin θ = Opposite / Hypotenuse",
            "cos θ = Adjacent / Hypotenuse",
            "tan θ = Opposite / Adjacent = sin θ / cos θ",
            "Reciprocal ratios: cosec θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ"
        ],
        explanation: `
            <h2>1. The Right-Angled Triangle Setup</h2>
            <p>Consider a right-angled triangle <strong>△ABC</strong>, right-angled at vertex <strong>B</strong>, with acute angle <strong>θ</strong> at vertex <strong>A</strong>.</p>
            <ul>
                <li><strong>Hypotenuse (Hyp):</strong> The longest side, opposite to the 90° right angle.</li>
                <li><strong>Opposite Side (Opp):</strong> The side directly opposite to angle θ.</li>
                <li><strong>Adjacent Side (Adj):</strong> The side adjacent (next to) angle θ (other than hypotenuse).</li>
            </ul>

            <div class="formula-box">
                sin θ = Opp / Hyp &nbsp;&nbsp;|&nbsp;&nbsp; cos θ = Adj / Hyp &nbsp;&nbsp;|&nbsp;&nbsp; tan θ = Opp / Adj
            </div>

            <h2>2. Easy Memory Trick: SOH CAH TOA</h2>
            <ul>
                <li><strong>SOH:</strong> <strong>S</strong>in = <strong>O</strong>pposite / <strong>H</strong>ypotenuse</li>
                <li><strong>CAH:</strong> <strong>C</strong>os = <strong>A</strong>djacent / <strong>H</strong>ypotenuse</li>
                <li><strong>TOA:</strong> <strong>T</strong>an = <strong>O</strong>pposite / <strong>A</strong>djacent</li>
            </ul>

            <h2>3. The Reciprocal Ratios</h2>
            <p>Every primary ratio has an inverse pair:</p>
            <ul>
                <li><strong>Cosecant (cosec θ):</strong> 1 / sin θ = Hypotenuse / Opposite</li>
                <li><strong>Secant (sec θ):</strong> 1 / cos θ = Hypotenuse / Adjacent</li>
                <li><strong>Cotangent (cot θ):</strong> 1 / tan θ = Adjacent / Opposite</li>
            </ul>

            <div class="info-callout">
                <div class="info-callout-title">⚠️ Common Student Mistake to Avoid!</div>
                <p>Remember that <code>sin θ</code> does NOT mean <code>sin × θ</code>. 'sin' is a trigonometric operator and has no meaning without the angle θ.</p>
            </div>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/PUB0TaZ7bhA",
            watchUrl: "https://www.youtube.com/watch?v=PUB0TaZ7bhA",
            channel: "Don't Memorise & TS SCERT Mathematics"
        },
        examples: [
            {
                title: "Example: Finding All Ratios from a Triangle",
                problem: "In △ABC right angled at B, if AB = 24 cm, BC = 7 cm, determine sin A and cos A.",
                solution: [
                    "Step 1: Use Pythagoras Theorem to find Hypotenuse AC: AC² = AB² + BC² = 24² + 7² = 576 + 49 = 625 => AC = 25 cm.",
                    "Step 2: For angle A: Opposite side = BC = 7 cm, Adjacent side = AB = 24 cm, Hypotenuse = 25 cm.",
                    "Step 3: sin A = Opposite / Hypotenuse = 7/25.",
                    "Step 4: cos A = Adjacent / Hypotenuse = 24/25."
                ]
            }
        ],
        quiz: [
            {
                question: "If in a right-angled triangle, Opposite = 3 and Adjacent = 4, what is tan θ?",
                options: ["3/5", "4/5", "3/4", "4/3"],
                answer: 2,
                explanation: "tan θ = Opposite / Adjacent = 3 / 4."
            },
            {
                question: "Which of the following is equal to 1 / cos θ?",
                options: ["sin θ", "tan θ", "sec θ", "cosec θ"],
                answer: 2,
                explanation: "Secant (sec θ) is the reciprocal of Cosine (cos θ)."
            },
            {
                question: "In any right-angled triangle, why is the value of sin θ always less than or equal to 1?",
                options: [
                    "Because the opposite side can never be longer than the hypotenuse",
                    "Because angles are always negative",
                    "Because cosine is always zero",
                    "Because hypotenuse is the shortest side"
                ],
                answer: 0,
                explanation: "Since the hypotenuse is the longest side in a right triangle, Opposite / Hypotenuse can never exceed 1."
            }
        ]
    },

    "Trigonometric Identities": {
        summary: "A trigonometric identity is an equation involving trigonometric ratios that holds true for all values of the angles. The fundamental Pythagorean identity is sin² θ + cos² θ = 1.",
        keyPoints: [
            "Identity 1: sin² θ + cos² θ = 1 (=> sin² θ = 1 - cos² θ)",
            "Identity 2: 1 + tan² θ = sec² θ (=> sec² θ - tan² θ = 1)",
            "Identity 3: 1 + cot² θ = cosec² θ (=> cosec² θ - cot² θ = 1)"
        ],
        explanation: `
            <h2>1. What are Trigonometric Identities?</h2>
            <p>Similar to algebraic identities like (a + b)² = a² + 2ab + b², trigonometric identities are always true regardless of what angle θ you plug in.</p>
            
            <div class="formula-box">
                1) sin² θ + cos² θ = 1 <br>
                2) sec² θ - tan² θ = 1 <br>
                3) cosec² θ - cot² θ = 1
            </div>

            <h2>2. Proof of sin² θ + cos² θ = 1</h2>
            <p>In a right angled triangle ABC with right angle at B:</p>
            <ul>
                <li>AB² + BC² = AC² (Pythagoras theorem)</li>
                <li>Divide the whole equation by AC²:</li>
                <li><code>(AB/AC)² + (BC/AC)² = (AC/AC)²</code></li>
                <li>Since AB/AC = cos A and BC/AC = sin A, we get:</li>
                <li><strong>cos² A + sin² A = 1</strong></li>
            </ul>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/9wZz7c_2e4w",
            watchUrl: "https://www.youtube.com/watch?v=9wZz7c_2e4w",
            channel: "Physics Wallah & Vedantu"
        },
        examples: [
            {
                title: "Example: Simplify (1 - sin² θ) · sec² θ",
                problem: "Evaluate the expression (1 - sin² θ) × sec² θ.",
                solution: [
                    "Step 1: From the identity sin² θ + cos² θ = 1, we know that 1 - sin² θ = cos² θ.",
                    "Step 2: Substitute cos² θ into the expression: cos² θ × sec² θ.",
                    "Step 3: Since sec θ = 1 / cos θ, sec² θ = 1 / cos² θ.",
                    "Step 4: cos² θ × (1 / cos² θ) = 1."
                ]
            }
        ],
        quiz: [
            {
                question: "What is the value of sec² θ - tan² θ?",
                options: ["0", "1", "-1", "2"],
                answer: 1,
                explanation: "By the fundamental trigonometric identity, 1 + tan² θ = sec² θ, therefore sec² θ - tan² θ = 1."
            }
        ]
    },

    "Concave and Convex Mirrors": {
        summary: "Spherical mirrors are mirrors whose reflecting surfaces are curved. A concave mirror curves inwards like a cave and converges light, whereas a convex mirror curves outwards and diverges light.",
        keyPoints: [
            "Concave Mirror: Converging mirror, produces real & inverted images (or virtual & enlarged when object is very close).",
            "Convex Mirror: Diverging mirror, always produces virtual, erect, and diminished images with a wide field of view.",
            "Key Terms: Pole (P), Center of Curvature (C), Principal Focus (F), Focal Length (f = R/2)."
        ],
        explanation: `
            <h2>1. Anatomy of a Spherical Mirror</h2>
            <p>Imagine cutting a hollow glass sphere into sections:</p>
            <ul>
                <li><strong>Pole (P):</strong> The geometric center of the spherical reflecting surface.</li>
                <li><strong>Center of Curvature (C):</strong> The center of the sphere of which the mirror forms a part.</li>
                <li><strong>Radius of Curvature (R):</strong> The radius of the sphere (distance from P to C).</li>
                <li><strong>Principal Focus (F):</strong> The point on the principal axis where rays parallel to the axis converge after reflection.</li>
                <li><strong>Focal Length (f):</strong> Distance between Pole (P) and Focus (F). Always <strong>f = R / 2</strong>.</li>
            </ul>

            <div class="formula-box">
                f = R / 2 &nbsp;&nbsp;(Focal Length is half of the Radius of Curvature)
            </div>

            <h2>2. Real-Life Applications in Telangana SCERT Syllabus</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="background: var(--bg-alt); text-align: left;">
                    <th style="padding: 0.6rem; border: 1px solid var(--border-color);">Mirror Type</th>
                    <th style="padding: 0.6rem; border: 1px solid var(--border-color);">Real-Life Uses</th>
                    <th style="padding: 0.6rem; border: 1px solid var(--border-color);">Why?</th>
                </tr>
                <tr>
                    <td style="padding: 0.6rem; border: 1px solid var(--border-color);"><strong>Concave Mirror</strong></td>
                    <td style="padding: 0.6rem; border: 1px solid var(--border-color);">Solar cookers, Dentist head mirrors, Car headlights, Shaving mirrors</td>
                    <td style="padding: 0.6rem; border: 1px solid var(--border-color);">Concentrates light at focus or produces enlarged erect images when close.</td>
                </tr>
                <tr>
                    <td style="padding: 0.6rem; border: 1px solid var(--border-color);"><strong>Convex Mirror</strong></td>
                    <td style="padding: 0.6rem; border: 1px solid var(--border-color);">Rear-view mirrors in vehicles (TSRTC buses, bikes), ATM security mirrors</td>
                    <td style="padding: 0.6rem; border: 1px solid var(--border-color);">Always gives an erect, diminished image giving driver a wide field of view.</td>
                </tr>
            </table>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/Pj1L785t7oM",
            watchUrl: "https://www.youtube.com/watch?v=Pj1L785t7oM",
            channel: "Physics Wallah & TS SCERT E-Vidya"
        },
        examples: [
            {
                title: "Example: Finding Focal Length from Radius",
                problem: "If the radius of curvature of a spherical mirror is 30 cm, what is its focal length?",
                solution: [
                    "Step 1: Given Radius of curvature R = 30 cm.",
                    "Step 2: Apply the formula: f = R / 2.",
                    "Step 3: f = 30 / 2 = 15 cm.",
                    "Conclusion: The focal length of the mirror is 15 cm."
                ]
            }
        ],
        quiz: [
            {
                question: "Why are convex mirrors preferred as rear-view mirrors in vehicles like bikes and buses?",
                options: [
                    "They form real and inverted images",
                    "They always give an erect, diminished image with a wider field of view",
                    "They make objects appear much larger than they are",
                    "They absorb sunlight"
                ],
                answer: 1,
                explanation: "Convex mirrors always form virtual, erect and diminished images, providing drivers with a very wide viewing angle."
            },
            {
                question: "If a concave mirror has a radius of curvature of 20 cm, what is its focal length?",
                options: ["40 cm", "20 cm", "10 cm", "5 cm"],
                answer: 2,
                explanation: "Focal length f = R / 2 = 20 / 2 = 10 cm."
            }
        ]
    },

    "Ohm's Law and Resistance": {
        summary: "Ohm's Law states that at constant temperature, the electric current (I) flowing through a metallic conductor is directly proportional to the potential difference (V) applied across its ends: V = IR.",
        keyPoints: [
            "Formula: V = I × R (Voltage = Current × Resistance)",
            "SI Units: Potential difference V (Volts), Current I (Amperes), Resistance R (Ohms Ω).",
            "Resistance depends on Length (R ∝ L), Area of Cross-section (R ∝ 1/A), and Nature of Material."
        ],
        explanation: `
            <h2>1. Statement of Ohm's Law</h2>
            <p>Discovered by German physicist Georg Simon Ohm in 1827:</p>
            <div class="formula-box">
                V ∝ I &nbsp;&nbsp;⟹&nbsp;&nbsp; <strong>V = I · R</strong>
            </div>
            
            <h2>2. What is Electrical Resistance (R)?</h2>
            <p>Resistance is the property of a conductor to oppose the flow of electric charges (electrons) through it.</p>
            <ul>
                <li><strong>Good Conductors (Copper, Aluminum):</strong> Low resistance, charges flow freely.</li>
                <li><strong>Resistors (Nichrome):</strong> High resistance, used in heating appliances like geysers and irons.</li>
                <li><strong>Insulators (Rubber, Wood):</strong> Extremely high resistance, no current flows.</li>
            </ul>

            <h2>3. Factors Affecting Resistance</h2>
            <div class="formula-box">
                R = ρ · (L / A)
            </div>
            <ul>
                <li><strong>Length (L):</strong> If you double the length of a wire, its resistance doubles.</li>
                <li><strong>Cross-sectional Area (A):</strong> Thicker wires have less resistance than thin wires.</li>
                <li><strong>Resistivity (ρ):</strong> Inherent material property (independent of length or thickness).</li>
            </ul>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/8jB7s2qUa_4",
            watchUrl: "https://www.youtube.com/watch?v=8jB7s2qUa_4",
            channel: "Khan Academy India & TS Digital Lessons"
        },
        examples: [
            {
                title: "Example: Calculating Current using Ohm's Law",
                problem: "How much current will an electric bulb draw from a 220 V source, if the resistance of the bulb filament is 1100 Ω?",
                solution: [
                    "Step 1: Given Voltage V = 220 V and Resistance R = 1100 Ω.",
                    "Step 2: By Ohm's law, V = I × R => I = V / R.",
                    "Step 3: I = 220 / 1100 = 2 / 10 = 0.2 A.",
                    "Conclusion: The bulb draws a current of 0.2 Amperes."
                ]
            }
        ],
        quiz: [
            {
                question: "If the potential difference across a resistor is 12 V and the current is 3 A, what is the resistance?",
                options: ["36 Ω", "4 Ω", "0.25 Ω", "15 Ω"],
                answer: 1,
                explanation: "R = V / I = 12 / 3 = 4 Ω."
            },
            {
                question: "What happens to the resistance of a wire if its length is doubled?",
                options: ["It is halved", "It doubles", "It quadruples", "It remains unchanged"],
                answer: 1,
                explanation: "Since resistance is directly proportional to length (R ∝ L), doubling the length doubles the resistance."
            }
        ]
    },

    "Photosynthesis & Chloroplast Mechanism": {
        summary: "Photosynthesis is the biochemical process by which green plants synthesize carbohydrates (glucose) from carbon dioxide and water in the presence of sunlight and chlorophyll, releasing oxygen as a byproduct.",
        keyPoints: [
            "Overall Equation: 6CO₂ + 12H₂O ⎯[Light / Chlorophyll]→ C₆H₁₂O₆ + 6H₂O + 6O₂",
            "Site of Photosynthesis: Chloroplasts (specifically Thylakoids for Light Reaction, Stroma for Dark Reaction).",
            "Discovered/Detailed in Telangana 10th Biological Science Chapter 1."
        ],
        explanation: `
            <h2>1. The Photosynthesis Chemical Equation</h2>
            <p>Formulated by C.B. Van Niel (1931) and Robert Hill:</p>
            <div class="formula-box">
                6CO₂ + 12H₂O ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯→ C₆H₁₂O₆ + 6H₂O + 6O₂ ↑<br>
                <small style="font-size: 0.8rem;">(In the presence of Sunlight & Chlorophyll)</small>
            </div>

            <h2>2. Two Main Phases of Photosynthesis</h2>
            <ol>
                <li>
                    <strong>Light-Dependent Reaction (Photochemical Phase):</strong>
                    <p>Occurs in the <em>Grana / Thylakoids</em> of chloroplasts. Light energy splits water molecules into Hydrogen and Oxygen (Photolysis of water). Generates assimilatory powers: ATP and NADPH.</p>
                </li>
                <li>
                    <strong>Light-Independent Reaction (Dark Reaction / Calvin Cycle):</strong>
                    <p>Occurs in the <em>Stroma</em> of chloroplasts. Does not require direct light. Uses ATP and NADPH to convert CO₂ into glucose carbohydrates.</p>
                </li>
            </ol>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/g78utcLQrJ4",
            watchUrl: "https://www.youtube.com/watch?v=g78utcLQrJ4",
            channel: "CrashCourse Biology & SCERT Telangana"
        },
        examples: [
            {
                title: "Practical Experiment: Proving Oxygen is Produced",
                problem: "How can you experimentally demonstrate that oxygen is evolved during photosynthesis?",
                solution: [
                    "Step 1: Set up a beaker with water, placing Hydrilla twigs under an inverted funnel.",
                    "Step 2: Invert a test tube filled with water over the stem of the funnel.",
                    "Step 3: Expose the setup to bright sunlight for 2-3 hours.",
                    "Observation: Air bubbles collect at the top of the test tube. Testing with a glowing splinter causes it to burst into flame, proving the gas is Oxygen (O₂)."
                ]
            }
        ],
        quiz: [
            {
                question: "In which part of the chloroplast does the light-dependent reaction occur?",
                options: ["Stroma", "Grana / Thylakoids", "Outer Membrane", "Mitochondria"],
                answer: 1,
                explanation: "Light reaction takes place in the grana thylakoids where chlorophyll pigment absorbs photons."
            },
            {
                question: "What is the primary source of oxygen released during photosynthesis?",
                options: ["Carbon dioxide (CO₂)", "Water (H₂O)", "Glucose", "Chlorophyll"],
                answer: 1,
                explanation: "Photolysis (splitting) of water molecules (H₂O) is the exact source of released oxygen gas."
            }
        ]
    },

    "Types of Numbers": {
        summary: "The number system classifies numbers into natural numbers, whole numbers, integers, rational numbers, irrational numbers, and real numbers.",
        keyPoints: [
            "Natural (N): {1, 2, 3, ...}",
            "Whole (W): {0, 1, 2, 3, ...}",
            "Integers (Z): {..., -2, -1, 0, 1, 2, ...}",
            "Rational (Q): p/q where q ≠ 0",
            "Real Numbers (R): All rational and irrational numbers together."
        ],
        explanation: `
            <h2>The Number Hierarchy</h2>
            <p>Every number we use in school mathematics belongs to the Real Number system.</p>
            <div class="formula-box">
                N ⊂ W ⊂ Z ⊂ Q ⊂ R
            </div>
            <ul>
                <li><strong>Natural Numbers (N):</strong> Counting numbers starting from 1.</li>
                <li><strong>Whole Numbers (W):</strong> Includes 0 and all natural numbers.</li>
                <li><strong>Integers (Z):</strong> Positive, zero, and negative whole numbers.</li>
                <li><strong>Rational Numbers (Q):</strong> Numbers representable as fractions p/q (e.g., 1/2, -3/4, 5).</li>
                <li><strong>Irrational Numbers:</strong> Numbers that cannot be written as p/q with non-terminating non-repeating decimals (e.g., √2, √3, π).</li>
            </ul>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/m94WTZP14SA",
            watchUrl: "https://www.youtube.com/watch?v=m94WTZP14SA",
            channel: "Math Antics"
        },
        examples: [
            {
                title: "Example: Identifying Number Types",
                problem: "Classify the numbers: -5, 0, 3/4, √7.",
                solution: [
                    "-5 is an Integer, Rational Number, and Real Number.",
                    "0 is a Whole Number, Integer, Rational Number, and Real Number.",
                    "3/4 is a Rational Number and Real Number.",
                    "√7 is an Irrational Number and Real Number."
                ]
            }
        ],
        quiz: [
            {
                question: "Which of the following is an irrational number?",
                options: ["0.25", "3/5", "√5", "0"],
                answer: 2,
                explanation: "√5 cannot be expressed as a simple fraction p/q; its decimal expansion is non-terminating and non-repeating."
            }
        ]
    }
};

// Fallback topic generator for other chapters
function getTopicDetails(topicName) {
    if (topicKnowledgeBase[topicName]) {
        return topicKnowledgeBase[topicName];
    }
    
    return {
        summary: `${topicName} is an important concept in your syllabus. Understanding this foundation helps you solve exam questions with confidence.`,
        keyPoints: [
            `Core definitions and rules of ${topicName}.`,
            "Step-by-step problem solving methodology.",
            "Common board exam question patterns."
        ],
        explanation: `
            <h2>Understanding ${topicName}</h2>
            <p>This chapter is a key part of your academic syllabus. Mastering this concept will help you score full marks in both conceptual and numerical questions.</p>
            <div class="info-callout">
                <div class="info-callout-title">📖 Core Study Tip</div>
                <p>Read through your official textbook definitions, practice the worked examples step-by-step, and test your understanding using our interactive quiz.</p>
            </div>
            <h2>Key Principles to Remember</h2>
            <ul>
                <li>Pay special attention to standard formulas and units.</li>
                <li>Write clear, step-by-step solutions with appropriate diagrams where required.</li>
            </ul>
        `,
        video: {
            embedUrl: "https://www.youtube-nocookie.com/embed/nUaB2dE5TjY",
            watchUrl: "https://www.youtube.com/results?search_query=" + encodeURIComponent(topicName + " class 10"),
            channel: "Top Recommended State Board Educators"
        },
        examples: [
            {
                title: `Fundamental Application of ${topicName}`,
                problem: `Standard textbook practice problem for ${topicName}.`,
                solution: [
                    "Identify the given parameters from the question.",
                    "Apply the relevant formula or theoretical theorem.",
                    "Calculate the step-by-step derivation to arrive at the final answer."
                ]
            }
        ],
        quiz: [
            {
                question: `Which of the following best describes the core principle of ${topicName}?`,
                options: [
                    "It follows fundamental scientific and mathematical laws.",
                    "It is completely random and unpredictable.",
                    "It applies only to complex numbers.",
                    "None of the above."
                ],
                answer: 0,
                explanation: `${topicName} is grounded in verified scientific and mathematical principles.`
            },
            {
                question: "What is the recommended approach to solving questions on this topic?",
                options: [
                    "Memorizing answers without understanding",
                    "Understanding core principles and practicing worked examples",
                    "Skipping the formula step",
                    "Guessing the final result"
                ],
                answer: 1,
                explanation: "Conceptual clarity combined with step-by-step practice yields the highest exam scores."
            }
        ]
    };
}

/* =====================================================
   3. APP STATE MANAGEMENT
   ===================================================== */

let currentBoardKey = "ts";
let selectedClassObj = null;
let selectedSubjectObj = null;
let selectedChapterObj = null;
let selectedTopicName = null;

// Quiz State
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

// Speech Synthesis State
let synth = window.speechSynthesis;
let isSpeaking = false;

// Local Storage for Bookmarks
let bookmarkedTopics = JSON.parse(localStorage.getItem("learnora_bookmarks") || "[]");

/* =====================================================
   4. DOM ELEMENTS
   ===================================================== */

// Sections
const classSection = document.getElementById("class-section");
const subjectSection = document.getElementById("subject-section");
const chapterSection = document.getElementById("chapter-section");
const topicSection = document.getElementById("topic-section");
const learningSection = document.getElementById("learning-section");
const bookmarksSection = document.getElementById("bookmarks-section");

// Grids
const classGrid = document.getElementById("class-grid");
const subjectGrid = document.getElementById("subject-grid");
const chapterGrid = document.getElementById("chapter-grid");
const topicGrid = document.getElementById("topic-grid");
const bookmarksList = document.getElementById("bookmarks-list");
const emptyBookmarksView = document.getElementById("emptyBookmarksView");

// Headers & Breadcrumb
const breadcrumb = document.getElementById("breadcrumb");
const backBtn = document.getElementById("backBtn");
const boardSelect = document.getElementById("boardSelect");
const currentBoardBadge = document.getElementById("currentBoardBadge");
const bookmarkCount = document.getElementById("bookmarkCount");

// Search
const globalSearchInput = document.getElementById("globalSearchInput");
const searchResultsDropdown = document.getElementById("searchResultsDropdown");
const clearSearchBtn = document.getElementById("clearSearchBtn");

// Learning Page
const lessonTitle = document.getElementById("lessonTitle");
const lessonSubtitle = document.getElementById("lessonSubtitle");
const lessonClassTag = document.getElementById("lessonClassTag");
const lessonSubjectTag = document.getElementById("lessonSubjectTag");
const lessonChapterTag = document.getElementById("lessonChapterTag");
const lessonSummary = document.getElementById("lessonSummary");
const lessonKeyPoints = document.getElementById("lessonKeyPoints");
const lessonExplanation = document.getElementById("lessonExplanation");
const videoIframe = document.getElementById("videoIframe");
const videoChannelInfo = document.getElementById("videoChannelInfo");
const externalVideoLink = document.getElementById("externalVideoLink");
const lessonExamples = document.getElementById("lessonExamples");

// Lesson Controls
const bookmarkTopicBtn = document.getElementById("bookmarkTopicBtn");
const bookmarkBtnText = document.getElementById("bookmarkBtnText");
const bookmarkBtnIcon = document.getElementById("bookmarkBtnIcon");
const readAloudBtn = document.getElementById("readAloudBtn");
const readAloudText = document.getElementById("readAloudText");
const speakerIcon = document.getElementById("speakerIcon");
const printNotesBtn = document.getElementById("printNotesBtn");
const fontSizeToggleBtn = document.getElementById("fontSizeToggleBtn");

// Quiz Elements
const activeQuizBox = document.getElementById("activeQuizBox");
const quizResultBox = document.getElementById("quizResultBox");
const quizHeaderTitle = document.getElementById("quizHeaderTitle");
const quizQuestionNumber = document.getElementById("quizQuestionNumber");
const quizCurrentScore = document.getElementById("quizCurrentScore");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsList = document.getElementById("quizOptionsList");
const quizFeedbackBox = document.getElementById("quizFeedbackBox");
const feedbackIcon = document.getElementById("feedbackIcon");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackExplanation = document.getElementById("feedbackExplanation");
const quizNextBtn = document.getElementById("quizNextBtn");
const retryQuizBtn = document.getElementById("retryQuizBtn");
const resultScoreText = document.getElementById("resultScoreText");
const resultMessageText = document.getElementById("resultMessageText");

// Bottom Nav
const prevTopicBtn = document.getElementById("prevTopicBtn");
const backToTopicListBtn = document.getElementById("backToTopicListBtn");
const nextTopicBtn = document.getElementById("nextTopicBtn");

// Theme Toggle
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");

/* =====================================================
   5. NAVIGATION & VIEW CONTROLLERS
   ===================================================== */

function hideAllSections() {
    classSection.classList.add("hidden");
    subjectSection.classList.add("hidden");
    chapterSection.classList.add("hidden");
    topicSection.classList.add("hidden");
    learningSection.classList.add("hidden");
    bookmarksSection.classList.add("hidden");
    
    // Stop speaking if moving away
    if (synth && synth.speaking) {
        synth.cancel();
        resetSpeechButton();
    }
}

function showSection(section) {
    hideAllSections();
    section.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBreadcrumbs() {
    let crumbs = [{ text: "🏠 Home", action: () => renderClasses() }];
    
    if (selectedClassObj) {
        crumbs.push({ text: selectedClassObj.name, action: () => renderSubjects(selectedClassObj) });
    }
    if (selectedSubjectObj) {
        crumbs.push({ text: selectedSubjectObj.name, action: () => renderChapters(selectedSubjectObj) });
    }
    if (selectedChapterObj) {
        crumbs.push({ text: selectedChapterObj.name, action: () => renderTopics(selectedChapterObj) });
    }
    if (selectedTopicName) {
        crumbs.push({ text: selectedTopicName, action: null });
    }

    breadcrumb.innerHTML = "";
    crumbs.forEach((crumb, idx) => {
        const span = document.createElement("span");
        span.className = idx === crumbs.length - 1 ? "crumb-item crumb-active" : "crumb-item";
        span.textContent = crumb.text;
        if (crumb.action) {
            span.addEventListener("click", crumb.action);
        }
        breadcrumb.appendChild(span);

        if (idx < crumbs.length - 1) {
            const separator = document.createElement("span");
            separator.className = "crumb-separator";
            separator.textContent = "/";
            breadcrumb.appendChild(separator);
        }
    });

    backBtn.classList.toggle("hidden", crumbs.length <= 1);
}

backBtn.addEventListener("click", () => {
    if (selectedTopicName) {
        renderTopics(selectedChapterObj);
    } else if (selectedChapterObj) {
        renderChapters(selectedSubjectObj);
    } else if (selectedSubjectObj) {
        renderSubjects(selectedClassObj);
    } else if (selectedClassObj) {
        renderClasses();
    }
});

/* =====================================================
   6. RENDER CLASSES
   ===================================================== */

function renderClasses(filter = "all") {
    selectedClassObj = null;
    selectedSubjectObj = null;
    selectedChapterObj = null;
    selectedTopicName = null;

    classGrid.innerHTML = "";
    const currentBoard = curriculumDatabase[currentBoardKey] || curriculumDatabase.ts;
    const classes = currentBoard.classes;

    classes.forEach(c => {
        if (filter !== "all" && c.level !== filter) return;

        const card = document.createElement("div");
        card.className = "interactive-card";
        card.innerHTML = `
            <div class="card-top-row">
                <div class="card-icon-box">${c.icon}</div>
                <span class="card-tag">${c.badge || "Curriculum"}</span>
            </div>
            <h3 class="card-title">${c.name}</h3>
            <p class="card-description">${c.description}</p>
            <div class="card-footer">
                <span>Explore ${c.subjects.length} Subjects</span>
                <span class="card-arrow">→</span>
            </div>
        `;
        card.addEventListener("click", () => renderSubjects(c));
        classGrid.appendChild(card);
    });

    showSection(classSection);
    updateBreadcrumbs();
}

// Class Filters (All / High School / Intermediate)
document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
        document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
        e.target.classList.add("active");
        renderClasses(e.target.dataset.filter);
    });
});

/* =====================================================
   7. RENDER SUBJECTS
   ===================================================== */

function renderSubjects(classObj) {
    selectedClassObj = classObj;
    selectedSubjectObj = null;
    selectedChapterObj = null;
    selectedTopicName = null;

    subjectGrid.innerHTML = "";
    document.getElementById("subjectSectionTitle").textContent = `${classObj.name} Subjects`;
    document.getElementById("subjectSectionDesc").textContent = `Choose a subject from ${classObj.name} to continue.`;

    classObj.subjects.forEach(sub => {
        const card = document.createElement("div");
        card.className = "interactive-card";
        card.innerHTML = `
            <div class="card-top-row">
                <div class="card-icon-box">${sub.icon}</div>
                <span class="card-tag">${sub.chapters.length} Units</span>
            </div>
            <h3 class="card-title">${sub.name}</h3>
            <p class="card-description">${sub.description}</p>
            <div class="card-footer">
                <span>View Chapters</span>
                <span class="card-arrow">→</span>
            </div>
        `;
        card.addEventListener("click", () => renderChapters(sub));
        subjectGrid.appendChild(card);
    });

    showSection(subjectSection);
    updateBreadcrumbs();
}

/* =====================================================
   8. RENDER CHAPTERS
   ===================================================== */

function renderChapters(subjectObj) {
    selectedSubjectObj = subjectObj;
    selectedChapterObj = null;
    selectedTopicName = null;

    chapterGrid.innerHTML = "";
    document.getElementById("chapterSectionTitle").textContent = `${subjectObj.name} - Chapters`;
    document.getElementById("chapterSectionDesc").textContent = `Explore official chapters for ${selectedClassObj.name} ${subjectObj.name}.`;

    subjectObj.chapters.forEach(ch => {
        const card = document.createElement("div");
        card.className = "interactive-card";
        card.innerHTML = `
            <div class="card-top-row">
                <div class="card-icon-box">${ch.icon}</div>
                <span class="card-tag">${ch.topics.length} Concepts</span>
            </div>
            <h3 class="card-title">${ch.name}</h3>
            <p class="card-description">${ch.description}</p>
            <div class="card-footer">
                <span>Explore Concepts</span>
                <span class="card-arrow">→</span>
            </div>
        `;
        card.addEventListener("click", () => renderTopics(ch));
        chapterGrid.appendChild(card);
    });

    showSection(chapterSection);
    updateBreadcrumbs();
}

/* =====================================================
   9. RENDER TOPICS
   ===================================================== */

function renderTopics(chapterObj) {
    selectedChapterObj = chapterObj;
    selectedTopicName = null;

    topicGrid.innerHTML = "";
    document.getElementById("topicSectionTitle").textContent = `${chapterObj.name}`;
    document.getElementById("topicSectionDesc").textContent = `Select a topic to view simplified explanations, video tutorials and quizzes.`;

    chapterObj.topics.forEach((topic, idx) => {
        const isSaved = bookmarkedTopics.some(b => b.topic === topic);
        const card = document.createElement("div");
        card.className = "interactive-card";
        card.innerHTML = `
            <div class="card-top-row">
                <div class="card-icon-box">📘</div>
                <span class="card-tag">${isSaved ? "⭐ Saved" : `Concept #${idx + 1}`}</span>
            </div>
            <h3 class="card-title">${topic}</h3>
            <p class="card-description">Master this concept with quick summaries, full breakdowns, videos and practice quizzes.</p>
            <div class="card-footer">
                <span>Start Learning</span>
                <span class="card-arrow">→</span>
            </div>
        `;
        card.addEventListener("click", () => openTopicLesson(topic));
        topicGrid.appendChild(card);
    });

    showSection(topicSection);
    updateBreadcrumbs();
}

/* =====================================================
   10. OPEN TOPIC LESSON
   ===================================================== */

function openTopicLesson(topicName) {
    selectedTopicName = topicName;
    const details = getTopicDetails(topicName);

    // Meta Tags & Title
    lessonClassTag.textContent = selectedClassObj ? selectedClassObj.name : "Class 10";
    lessonSubjectTag.textContent = selectedSubjectObj ? selectedSubjectObj.name : "Core Subject";
    lessonChapterTag.textContent = selectedChapterObj ? selectedChapterObj.name : "Chapter Unit";
    lessonTitle.textContent = topicName;
    lessonSubtitle.textContent = `Comprehensive learning module for ${topicName}`;

    // Summary Tab
    lessonSummary.textContent = details.summary;
    lessonKeyPoints.innerHTML = "";
    details.keyPoints.forEach(pt => {
        const li = document.createElement("li");
        li.textContent = pt;
        lessonKeyPoints.appendChild(li);
    });

    // Explanation Tab
    lessonExplanation.innerHTML = details.explanation;

    // Video Tab
    if (details.video) {
        videoIframe.src = details.video.embedUrl;
        videoChannelInfo.textContent = `Curated from: ${details.video.channel}`;
        externalVideoLink.href = details.video.watchUrl;
    }

    // Worked Examples Tab
    lessonExamples.innerHTML = "";
    if (details.examples && details.examples.length > 0) {
        details.examples.forEach(ex => {
            const exBox = document.createElement("div");
            exBox.className = "example-card-item";
            
            let stepsHtml = "";
            ex.solution.forEach(st => {
                stepsHtml += `<p class="example-solution-step">• ${st}</p>`;
            });

            exBox.innerHTML = `
                <div class="example-card-header">
                    <span>✏️</span> ${ex.title}
                </div>
                <div class="example-problem">
                    <strong>Problem:</strong> ${ex.problem}
                </div>
                <div class="example-solution-title">Step-by-Step Solution:</div>
                ${stepsHtml}
            `;
            lessonExamples.appendChild(exBox);
        });
    }

    // Quiz Tab Setup
    setupQuizForTopic(topicName, details.quiz);

    // Reset Tabs to Summary by default
    switchLearningTab("tab-summary");

    // Bookmark button state
    updateBookmarkButtonState(topicName);

    // Update Bottom Nav Next/Prev buttons
    updateTopicNavButtons();

    showSection(learningSection);
    updateBreadcrumbs();
}

/* =====================================================
   11. TAB SWITCHING SYSTEM
   ===================================================== */

document.querySelectorAll(".learn-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const targetTabId = btn.dataset.tab;
        switchLearningTab(targetTabId);
    });
});

function switchLearningTab(tabId) {
    document.querySelectorAll(".learn-tab-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.tab === tabId);
    });

    document.querySelectorAll(".learn-tab-content").forEach(c => {
        c.classList.toggle("active", c.id === tabId);
    });

    // Pause video if moving away from video tab
    if (tabId !== "tab-video") {
        const currentSrc = videoIframe.src;
        videoIframe.src = currentSrc; // resets iframe state
    }
}

/* =====================================================
   12. INTERACTIVE QUIZ ENGINE
   ===================================================== */

function setupQuizForTopic(topicName, questions) {
    quizQuestions = questions || [];
    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;

    quizHeaderTitle.textContent = `${topicName} Quiz`;
    activeQuizBox.classList.remove("hidden");
    quizResultBox.classList.add("hidden");

    if (quizQuestions.length > 0) {
        renderQuizQuestion();
    }
}

function renderQuizQuestion() {
    quizAnswered = false;
    quizFeedbackBox.classList.add("hidden");
    quizNextBtn.disabled = true;

    const q = quizQuestions[quizIndex];
    quizQuestionNumber.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
    quizCurrentScore.textContent = `${quizScore} / ${quizQuestions.length}`;
    quizProgressBar.style.width = `${((quizIndex) / quizQuestions.length) * 100}%`;

    quizQuestionText.textContent = q.question;
    quizOptionsList.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const optBtn = document.createElement("button");
        optBtn.className = "quiz-option-btn";
        optBtn.innerHTML = `<span>${opt}</span><span class="opt-mark"></span>`;
        optBtn.addEventListener("click", () => handleAnswerSelect(idx, optBtn));
        quizOptionsList.appendChild(optBtn);
    });

    quizNextBtn.textContent = (quizIndex === quizQuestions.length - 1) ? "View Results 🎉" : "Next Question →";
}

function handleAnswerSelect(selectedIndex, selectedBtn) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = quizQuestions[quizIndex];
    const allButtons = quizOptionsList.querySelectorAll(".quiz-option-btn");

    allButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === q.answer) {
            btn.classList.add("selected-correct");
        }
    });

    quizFeedbackBox.classList.remove("hidden", "correct", "wrong");
    if (selectedIndex === q.answer) {
        quizScore++;
        selectedBtn.classList.add("selected-correct");
        quizFeedbackBox.classList.add("correct");
        feedbackIcon.textContent = "🎉";
        feedbackTitle.textContent = "Correct! Outstanding!";
    } else {
        selectedBtn.classList.add("selected-wrong");
        quizFeedbackBox.classList.add("wrong");
        feedbackIcon.textContent = "💡";
        feedbackTitle.textContent = `Not quite. The correct answer was: "${q.options[q.answer]}"`;
    }

    feedbackExplanation.textContent = q.explanation;
    quizCurrentScore.textContent = `${quizScore} / ${quizQuestions.length}`;
    quizNextBtn.disabled = false;
}

quizNextBtn.addEventListener("click", () => {
    if (quizIndex < quizQuestions.length - 1) {
        quizIndex++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
});

function showQuizResults() {
    activeQuizBox.classList.add("hidden");
    quizResultBox.classList.remove("hidden");

    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    resultScoreText.textContent = `You scored ${quizScore} out of ${quizQuestions.length} (${percentage}%)`;

    if (percentage === 100) {
        resultMessageText.textContent = "🌟 Perfect Score! You have completely mastered this concept!";
    } else if (percentage >= 70) {
        resultMessageText.textContent = "👏 Great job! You have a solid grasp of this concept!";
    } else {
        resultMessageText.textContent = "💪 Good effort! Review the detailed explanation and try the quiz again to solidify your knowledge.";
    }
}

retryQuizBtn.addEventListener("click", () => {
    setupQuizForTopic(selectedTopicName, quizQuestions);
});

/* =====================================================
   13. TOPIC BOTTOM NAVIGATION (Next / Prev Topic)
   ===================================================== */

function updateTopicNavButtons() {
    if (!selectedChapterObj) return;
    const topics = selectedChapterObj.topics;
    const currIdx = topics.indexOf(selectedTopicName);

    prevTopicBtn.disabled = (currIdx <= 0);
    nextTopicBtn.disabled = (currIdx >= topics.length - 1);
}

prevTopicBtn.addEventListener("click", () => {
    if (!selectedChapterObj) return;
    const topics = selectedChapterObj.topics;
    const currIdx = topics.indexOf(selectedTopicName);
    if (currIdx > 0) {
        openTopicLesson(topics[currIdx - 1]);
    }
});

nextTopicBtn.addEventListener("click", () => {
    if (!selectedChapterObj) return;
    const topics = selectedChapterObj.topics;
    const currIdx = topics.indexOf(selectedTopicName);
    if (currIdx < topics.length - 1) {
        openTopicLesson(topics[currIdx + 1]);
    }
});

backToTopicListBtn.addEventListener("click", () => {
    if (selectedChapterObj) {
        renderTopics(selectedChapterObj);
    }
});

/* =====================================================
   14. READ ALOUD (Text-to-Speech)
   ===================================================== */

readAloudBtn.addEventListener("click", () => {
    if (!("speechSynthesis" in window)) {
        alert("Text-to-speech is not supported on your current browser.");
        return;
    }

    if (synth.speaking) {
        synth.cancel();
        resetSpeechButton();
        return;
    }

    const cleanText = `${selectedTopicName}. Summary: ${lessonSummary.textContent}. Key points: ${Array.from(lessonKeyPoints.querySelectorAll("li")).map(l => l.textContent).join(". ")}`;
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
        isSpeaking = true;
        speakerIcon.textContent = "⏹️";
        readAloudText.textContent = "Stop Listening";
        readAloudBtn.style.background = "rgba(220, 38, 38, 0.4)";
    };

    utterance.onend = resetSpeechButton;
    utterance.onerror = resetSpeechButton;

    synth.speak(utterance);
});

function resetSpeechButton() {
    isSpeaking = false;
    speakerIcon.textContent = "🔊";
    readAloudText.textContent = "Listen Aloud";
    readAloudBtn.style.background = "";
}

/* =====================================================
   15. PRINT & FONT SIZE CONTROLS
   ===================================================== */

printNotesBtn.addEventListener("click", () => {
    window.print();
});

let isLargeFont = false;
fontSizeToggleBtn.addEventListener("click", () => {
    isLargeFont = !isLargeFont;
    lessonExplanation.style.fontSize = isLargeFont ? "1.25rem" : "1.08rem";
    fontSizeToggleBtn.style.background = isLargeFont ? "var(--primary-light)" : "var(--bg-alt)";
});

/* =====================================================
   16. BOOKMARKS SYSTEM
   ===================================================== */

function updateBookmarkCount() {
    bookmarkCount.textContent = bookmarkedTopics.length;
}

function updateBookmarkButtonState(topicName) {
    const isSaved = bookmarkedTopics.some(b => b.topic === topicName);
    bookmarkBtnIcon.textContent = isSaved ? "⭐" : "🔖";
    bookmarkBtnText.textContent = isSaved ? "Saved" : "Bookmark";
    bookmarkTopicBtn.style.background = isSaved ? "rgba(234, 88, 12, 0.4)" : "";
}

bookmarkTopicBtn.addEventListener("click", () => {
    if (!selectedTopicName) return;

    const existingIndex = bookmarkedTopics.findIndex(b => b.topic === selectedTopicName);
    if (existingIndex >= 0) {
        bookmarkedTopics.splice(existingIndex, 1);
    } else {
        bookmarkedTopics.push({
            topic: selectedTopicName,
            className: selectedClassObj ? selectedClassObj.name : "Class 10",
            subjectName: selectedSubjectObj ? selectedSubjectObj.name : "Subject",
            chapterName: selectedChapterObj ? selectedChapterObj.name : "Chapter",
            board: currentBoardKey
        });
    }

    localStorage.setItem("learnora_bookmarks", JSON.stringify(bookmarkedTopics));
    updateBookmarkCount();
    updateBookmarkButtonState(selectedTopicName);
});

document.getElementById("bookmarksNavBtn").addEventListener("click", renderBookmarksView);

function renderBookmarksView() {
    bookmarksList.innerHTML = "";
    if (bookmarkedTopics.length === 0) {
        emptyBookmarksView.classList.remove("hidden");
    } else {
        emptyBookmarksView.classList.add("hidden");
        bookmarkedTopics.forEach(bm => {
            const card = document.createElement("div");
            card.className = "interactive-card";
            card.innerHTML = `
                <div class="card-top-row">
                    <div class="card-icon-box">⭐</div>
                    <span class="card-tag">${bm.className}</span>
                </div>
                <h3 class="card-title">${bm.topic}</h3>
                <p class="card-description">${bm.subjectName} → ${bm.chapterName}</p>
                <div class="card-footer">
                    <span>Revise Now</span>
                    <span class="card-arrow">→</span>
                </div>
            `;
            card.addEventListener("click", () => {
                openTopicLesson(bm.topic);
            });
            bookmarksList.appendChild(card);
        });
    }

    showSection(bookmarksSection);
}

document.getElementById("exploreFromBookmarksBtn").addEventListener("click", () => renderClasses());

/* =====================================================
   17. GLOBAL SEARCH ENGINE
   ===================================================== */

globalSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
        searchResultsDropdown.classList.add("hidden");
        clearSearchBtn.classList.add("hidden");
        return;
    }

    clearSearchBtn.classList.remove("hidden");
    const results = [];
    const currentBoard = curriculumDatabase[currentBoardKey] || curriculumDatabase.ts;

    currentBoard.classes.forEach(c => {
        c.subjects.forEach(s => {
            s.chapters.forEach(ch => {
                ch.topics.forEach(top => {
                    if (top.toLowerCase().includes(query) || ch.name.toLowerCase().includes(query) || s.name.toLowerCase().includes(query)) {
                        results.push({
                            topic: top,
                            chapter: ch,
                            subject: s,
                            classObj: c
                        });
                    }
                });
            });
        });
    });

    if (results.length === 0) {
        searchResultsDropdown.innerHTML = `<div class="search-result-item" style="cursor: default; opacity: 0.7;">No concepts found matching "${query}".</div>`;
    } else {
        searchResultsDropdown.innerHTML = "";
        results.slice(0, 6).forEach(res => {
            const item = document.createElement("div");
            item.className = "search-result-item";
            item.innerHTML = `
                <span class="search-result-topic">📘 ${res.topic}</span>
                <span class="search-result-path">${res.classObj.name} → ${res.subject.name} → ${res.chapter.name}</span>
            `;
            item.addEventListener("click", () => {
                selectedClassObj = res.classObj;
                selectedSubjectObj = res.subject;
                selectedChapterObj = res.chapter;
                openTopicLesson(res.topic);
                searchResultsDropdown.classList.add("hidden");
                globalSearchInput.value = "";
                clearSearchBtn.classList.add("hidden");
            });
            searchResultsDropdown.appendChild(item);
        });
    }

    searchResultsDropdown.classList.remove("hidden");
});

clearSearchBtn.addEventListener("click", () => {
    globalSearchInput.value = "";
    searchResultsDropdown.classList.add("hidden");
    clearSearchBtn.classList.add("hidden");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
        searchResultsDropdown.classList.add("hidden");
    }
});

/* =====================================================
   18. BOARD SWITCHING
   ===================================================== */

boardSelect.addEventListener("change", (e) => {
    currentBoardKey = e.target.value;
    const badgeText = e.target.options[e.target.selectedIndex].text.split("(")[0].trim();
    currentBoardBadge.textContent = badgeText;
    renderClasses();
});

/* =====================================================
   19. THEME TOGGLE (Light / Dark)
   ===================================================== */

const savedTheme = localStorage.getItem("learnora_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("learnora_theme", nextTheme);
    updateThemeIcon(nextTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

/* =====================================================
   20. INITIALIZATION
   ===================================================== */

document.getElementById("logoBtn").addEventListener("click", (e) => {
    e.preventDefault();
    renderClasses();
});

// Footer class shortcuts
document.querySelectorAll("[data-class-link]").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetClass = e.target.dataset.classLink;
        const currentBoard = curriculumDatabase[currentBoardKey] || curriculumDatabase.ts;
        const found = currentBoard.classes.find(c => c.name.includes(targetClass));
        if (found) {
            renderSubjects(found);
        } else {
            renderClasses();
        }
    });
});

// Start app
updateBookmarkCount();
renderClasses();