const courseAll = [
  {
    institution: "EPFL",
    courseNumber: "ME-597",
    courseName: "Engineering internship credited with master project",
    grade: "R",
    credits: "30",
    field: "Projects and Humanities",
    department: "Mechanical Engineering",
    term: "Summer 2025"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-401",
    courseName: "Mechanical engineering project I",
    grade: "6",
    credits: "10",
    field: "Projects and Humanities",
    department: "Mechanical Engineering",
    term: "Spring 2025"
  },
  {
    institution: "EPFL",
    courseNumber: "HUM-402",
    courseName: "Experimental history of science I",
    grade: "5.75",
    credits: "3",
    field: "Projects and Humanities",
    department: "Humanities",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "HUM-466",
    courseName: "Experimental history of science II",
    grade: "6",
    credits: "3",
    field: "Projects and Humanities",
    department: "Humanities",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-445",
    courseName: "Aerodynamics",
    grade: "6",
    credits: "4",
    field: "Mechanical Engineering and Physics",
    department: "Mechanical Engineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-435",
    courseName: "Aeroelasticity and fluid-structure interaction",
    grade: "6",
    credits: "3",
    field: "Mechanical Engineering and Physics",
    department: "Mechanical Engineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-466",
    courseName: "Instability",
    grade: "6",
    credits: "3",
    field: "Mechanical Engineering and Physics",
    department: "Mechanical Engineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-413",
    courseName: "Introduction to additive manufacturing",
    grade: "6",
    credits: "3",
    field: "Mechanical Engineering and Physics",
    department: "Mechanical Engineering",
    term: "Spring 2025"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-474",
    courseName: "Numerical flow simulation",
    grade: "5.75",
    credits: "5",
    field: "Mechanical Engineering and Physics",
    department: "Mechanical Engineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "ME-467",
    courseName: "Turbulence",
    grade: "5.75",
    credits: "5",
    field: "Mechanical Engineering and Physics",
    department: "Mechanical Engineering",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "MICRO-455",
    courseName: "Applied machine learning",
    grade: "6",
    credits: "4",
    field: "AI and Data Science",
    department: "Microengineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "MGT-418",
    courseName: "Convex optimization",
    grade: "5.75",
    credits: "5",
    field: "Mathematics and Optimization",
    department: "Management of Technology",
    term: "Spring 2025"
  },
  {
    institution: "EPFL",
    courseNumber: "ENG-420",
    courseName: "Environmental transport phenomena",
    grade: "6",
    credits: "5",
    field: "Mechanical Engineering and Physics",
    department: "Engineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "MICRO-401",
    courseName: "Machine learning programming",
    grade: "6",
    credits: "5",
    field: "AI and Data Science",
    department: "Microengineering",
    term: "Spring 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "MATH-451",
    courseName: "Numerical approximation of PDEs",
    grade: "6",
    credits: "2",
    field: "Mathematics and Optimization",
    department: "Mathematics",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "EE-585",
    courseName: "Space mission design and operations",
    grade: "6",
    credits: "2",
    field: "Mechanical Engineering and Physics",
    department: "Electrical Engineering",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "CS-250",
    courseName: "Algorithms I",
    grade: "6",
    credits: "8",
    field: "AI and Data Science",
    department: "Computer Science",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "CS-450",
    courseName: "Algorithms II",
    grade: "6",
    credits: "8",
    field: "AI and Data Science",
    department: "Computer Science",
    term: "Spring 2025"
  },
  {
    institution: "EPFL",
    courseNumber: "CS-456",
    courseName: "Artificial neural networks / reinforcement learning",
    grade: "6",
    credits: "6",
    field: "AI and Data Science",
    department: "Computer Science",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "EE-559",
    courseName: "Deep learning",
    grade: "5.75",
    credits: "4",
    field: "AI and Data Science",
    department: "Electrical Engineering",
    term: "Summer 2024"
  },
  {
    institution: "EPFL",
    courseNumber: "COM-508",
    courseName: "Optional research project in Data Science",
    grade: "6",
    credits: "8",
    field: "AI and Data Science",
    department: "Communication Systems",
    term: "Spring 2025"
  },
  {
    institution: "Polimi",
    courseNumber: "081360",
    courseName: "Calculus 1",
    grade: "28",
    credits: "10",
    field: "Mathematics and Optimization",
    department: "Polimi Mathematics",
    term: "Polimi Year 1 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "081374",
    courseName: "Chemistry",
    grade: "30",
    credits: "7",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Physics and Chemistry",
    term: "Polimi Year 1 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "081376",
    courseName: "Methods of Technical Representation",
    grade: "30",
    credits: "7",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 1 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "083265",
    courseName: "Fundamentals of Aerospace Engineering",
    grade: "30",
    credits: "8",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 1 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "052431",
    courseName: "Calculus 2",
    grade: "30L",
    credits: "10",
    field: "Mathematics and Optimization",
    department: "Polimi Mathematics",
    term: "Polimi Year 1 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "081389",
    courseName: "Fundamentals of Experimental Physics",
    grade: "30L",
    credits: "12",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Physics and Chemistry",
    term: "Polimi Year 1 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "095042",
    courseName: "Statistics",
    grade: "30L",
    credits: "6",
    field: "Mathematics and Optimization",
    department: "Polimi Mathematics",
    term: "Polimi Year 1 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "054226",
    courseName: "Circuits and Electronics",
    grade: "30L",
    credits: "10",
    field: "Systems and Control",
    department: "Polimi Electrical and Control",
    term: "Polimi Year 2 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "097455",
    courseName: "Aerospace Mechanics",
    grade: "30L",
    credits: "10",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 2 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "083795",
    courseName: "Thermodynamics and Heat Transfer",
    grade: "30L",
    credits: "10",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Physics and Chemistry",
    term: "Polimi Year 2 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "083401",
    courseName: "Fundamentals of Automatic Control",
    grade: "30L",
    credits: "8",
    field: "Systems and Control",
    department: "Polimi Electrical and Control",
    term: "Polimi Year 2 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "083402",
    courseName: "Applied Numerical Analysis",
    grade: "30L",
    credits: "10",
    field: "Mathematics and Optimization",
    department: "Polimi Mathematics",
    term: "Polimi Year 2 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "083404",
    courseName: "Aerospace Systems",
    grade: "30L",
    credits: "8",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 2 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "083406",
    courseName: "Physics of Waves",
    grade: "29",
    credits: "6",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Physics and Chemistry",
    term: "Polimi Year 2 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "086222",
    courseName: "Fundamentals of Structural Mechanics",
    grade: "30L",
    credits: "10",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "052429",
    courseName: "Dynamics of Aerospace Systems",
    grade: "30",
    credits: "8",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "086416",
    courseName: "Aerospace Propulsion",
    grade: "30L",
    credits: "7",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "093454",
    courseName: "Final Degree Test (Aerospace Propulsion)",
    grade: "30",
    credits: "1",
    field: "Projects and Humanities",
    department: "Polimi Final Degree",
    term: "Polimi Year 3 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "093474",
    courseName: "Introduction to Space Mission Analysis",
    grade: "Approved",
    credits: "2",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "093466",
    courseName: "Final Degree Test (Space Mission Analysis)",
    grade: "29",
    credits: "1",
    field: "Projects and Humanities",
    department: "Polimi Final Degree",
    term: "Polimi Year 3 / Sem 1"
  },
  {
    institution: "Polimi",
    courseNumber: "093484",
    courseName: "Fundamentals of Atmospheric Flight Mechanics",
    grade: "30L",
    credits: "5",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "086224",
    courseName: "Fluid Dynamics",
    grade: "28",
    credits: "10",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "054227",
    courseName: "Aerospace Technologies and Materials",
    grade: "30",
    credits: "7",
    field: "Aerospace Engineering",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "093465",
    courseName: "Final Degree Test (Aerospace Technologies and Materials)",
    grade: "30",
    credits: "1",
    field: "Projects and Humanities",
    department: "Polimi Final Degree",
    term: "Polimi Year 3 / Sem 2"
  },
  {
    institution: "Polimi",
    courseNumber: "086225",
    courseName: "Principles of Aerospace Experimentation",
    grade: "30",
    credits: "6",
    field: "Mechanical Engineering and Physics",
    department: "Polimi Aerospace Engineering",
    term: "Polimi Year 3 / Sem 2"
  }
];

const fieldOrder = [
  "AI and Data Science",
  "Mathematics and Optimization",
  "Mechanical Engineering and Physics",
  "Aerospace Engineering",
  "Systems and Control",
  "Projects and Humanities"
];

const departmentOrder = [
  "Mechanical Engineering",
  "Computer Science",
  "Electrical Engineering",
  "Microengineering",
  "Mathematics",
  "Management of Technology",
  "Engineering",
  "Communication Systems",
  "Humanities",
  "Polimi Mathematics",
  "Polimi Physics and Chemistry",
  "Polimi Aerospace Engineering",
  "Polimi Electrical and Control",
  "Polimi Final Degree"
];

const termOrder = [
  "Summer 2025",
  "Spring 2025",
  "Summer 2024",
  "Spring 2024",
  "Polimi Year 3 / Sem 2",
  "Polimi Year 3 / Sem 1",
  "Polimi Year 2 / Sem 2",
  "Polimi Year 2 / Sem 1",
  "Polimi Year 1 / Sem 2",
  "Polimi Year 1 / Sem 1"
];

const termRank = Object.fromEntries(termOrder.map((term, index) => [term, index]));

const syllabusByCourseNumber = {
  "ME-597": "https://edu.epfl.ch/coursebook/en/engineering-internship-credited-with-master-project-master-in-mechanical-engineering-ME-597",
  "ME-401": "https://edu.epfl.ch/coursebook/en/mechanical-engineering-project-i-ME-401",
  "HUM-402": "https://web.archive.org/web/20240303165826/https://edu.epfl.ch/coursebook/en/experimental-history-of-science-i-HUM-402",
  "HUM-466": "https://web.archive.org/web/20230331182139/https://edu.epfl.ch/coursebook/en/experimental-history-of-science-ii-HUM-466",
  "ME-445": "https://edu.epfl.ch/coursebook/en/aerodynamics-ME-445",
  "ME-435": "https://edu.epfl.ch/coursebook/en/aeroelasticity-and-fluid-structure-interaction-ME-435",
  "ME-466": "https://edu.epfl.ch/coursebook/en/instability-ME-466",
  "ME-413": "https://edu.epfl.ch/coursebook/en/introduction-to-additive-manufacturing-ME-413",
  "ME-474": "https://edu.epfl.ch/coursebook/en/numerical-flow-simulation-ME-474",
  "ME-467": "https://edu.epfl.ch/coursebook/en/turbulence-ME-467",
  "MICRO-455": "https://edu.epfl.ch/coursebook/en/machine-learning-i-MICRO-455",
  "MGT-418": "https://edu.epfl.ch/coursebook/en/convex-optimization-MGT-418",
  "ENG-420": "https://edu.epfl.ch/coursebook/en/environmental-transport-phenomena-ENG-420",
  "MICRO-401": "https://edu.epfl.ch/coursebook/en/machine-learning-programming-MICRO-401",
  "MATH-451": "https://edu.epfl.ch/coursebook/en/numerical-approximation-of-pdes-MATH-451",
  "EE-585": "https://edu.epfl.ch/coursebook/en/space-mission-design-and-operations-EE-585",
  "CS-250": "https://edu.epfl.ch/coursebook/en/algorithms-i-CS-250",
  "CS-450": "https://edu.epfl.ch/coursebook/en/algorithms-ii-CS-450",
  "CS-456": "https://edu.epfl.ch/coursebook/en/deep-reinforcement-learning-CS-456",
  "EE-559": "https://edu.epfl.ch/coursebook/en/deep-learning-EE-559",
  "COM-508": "https://edu.epfl.ch/coursebook/en/optional-research-project-in-data-science-COM-508",
  "081360": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=081360&lang=EN&semestre=1&anno_corso=1&idItemOfferta=155332&idRiga=268813",
  "081374": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=081374&lang=EN&semestre=1&anno_corso=1&idItemOfferta=155333&idRiga=268814",
  "081376": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=081376&lang=EN&semestre=1&anno_corso=1&idItemOfferta=155334&idRiga=268815",
  "083265": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=083265&lang=EN&semestre=1&anno_corso=1&idItemOfferta=155335&idRiga=268816",
  "052431": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=052431&lang=EN&semestre=2&anno_corso=1&idItemOfferta=155336&idRiga=268817",
  "081389": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=081389&lang=EN&semestre=2&anno_corso=1&idItemOfferta=155337&idRiga=268818",
  "095042": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=095042&lang=EN&semestre=2&anno_corso=1&idItemOfferta=155338&idRiga=268822",
  "054226": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=054226&lang=EN&semestre=1&anno_corso=2&idItemOfferta=155339&idRiga=268823",
  "097455": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=097455&lang=EN&semestre=1&anno_corso=2&idItemOfferta=155340&idRiga=268824",
  "083795": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=083795&lang=EN&semestre=1&anno_corso=2&idItemOfferta=155341&idRiga=268825",
  "083401": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=083401&lang=EN&semestre=2&anno_corso=2&idItemOfferta=155342&idRiga=268826",
  "083402": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=083402&lang=EN&semestre=2&anno_corso=2&idItemOfferta=155343&idRiga=268827",
  "083404": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=083404&lang=EN&semestre=2&anno_corso=2&idItemOfferta=155344&idRiga=268828",
  "083406": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=083406&lang=EN&semestre=2&anno_corso=2&idItemOfferta=155345&idRiga=268833",
  "086222": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=086222&lang=EN&semestre=1&anno_corso=3&idItemOfferta=155346&idRiga=268836",
  "052429": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=052429&lang=EN&semestre=1&anno_corso=3&idItemOfferta=155347&idRiga=268837",
  "086416": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=086416&lang=EN&semestre=1&anno_corso=3&idItemOfferta=155348&idRiga=268838",
  "093454": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=093454&lang=EN&semestre=1&anno_corso=3&idItemOfferta=155348&idRiga=268839",
  "093474": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=093474&lang=EN&semestre=1&anno_corso=3&idItemOfferta=155349&idRiga=268840",
  "093466": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=093466&lang=EN&semestre=1&anno_corso=3&idItemOfferta=155349&idRiga=268841",
  "093484": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=093484&lang=EN&semestre=2&anno_corso=3&idItemOfferta=155349&idRiga=268842",
  "086224": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=086224&lang=EN&semestre=2&anno_corso=3&idItemOfferta=155350&idRiga=268843",
  "054227": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=054227&lang=EN&semestre=2&anno_corso=3&idItemOfferta=155351&idRiga=268844",
  "093465": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=093465&lang=EN&semestre=2&anno_corso=3&idItemOfferta=155351&idRiga=268845",
  "086225": "https://onlineservices.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=225&k_corso_la=350&k_indir=AER&codDescr=086225&lang=EN&semestre=2&anno_corso=3&idItemOfferta=155352&idRiga=268846"
};

function courseSort(a, b) {
  const aRank = termRank[a.term] ?? Number.MAX_SAFE_INTEGER;
  const bRank = termRank[b.term] ?? Number.MAX_SAFE_INTEGER;
  const rankDifference = aRank - bRank;
  if (rankDifference !== 0) {
    return rankDifference;
  }
  return a.courseNumber.localeCompare(b.courseNumber);
}

function clearTables() {
  const tableContainer = document.getElementById("course_tables");
  tableContainer.innerHTML = "";
}

function formatGrade(course) {
  if (course.grade === "R" || course.grade === "Approved") {
    return course.grade;
  }

  if (course.institution === "EPFL") {
    return course.grade + "/6.0";
  }

  if (course.institution === "Polimi") {
    if (course.grade === "30L") {
      return "30L*/30";
    }
    return course.grade + "/30";
  }

  return course.grade;
}

function createTable(title, courses) {
  if (courses.length === 0) {
    return;
  }

  const tableContainer = document.getElementById("course_tables");
  const table = document.createElement("table");
  table.setAttribute("width", "100%");
  table.setAttribute("align", "center");
  table.setAttribute("border", "0");
  table.setAttribute("cellspacing", "0");

  const caption = document.createElement("caption");
  caption.innerHTML = "&#9656; " + title;
  table.appendChild(caption);

  const headerRow = document.createElement("tr");
  headerRow.innerHTML =
    "<th width='10%'>Inst.</th>" +
    "<th width='12%'>Course #</th>" +
    "<th width='34%'>Course Name</th>" +
    "<th width='12%'>Syllabus</th>" +
    "<th width='10%'>Grade</th>" +
    "<th width='10%'>Credits</th>" +
    "<th width='12%'>Term</th>";
  table.appendChild(headerRow);

  courses.sort(courseSort).forEach((course) => {
    const row = document.createElement("tr");
    const syllabusUrl = syllabusByCourseNumber[course.courseNumber];
    const syllabusCell = syllabusUrl
      ? "<a target='_blank' href='" + syllabusUrl + "'>[syllabus]</a>"
      : "&mdash;";

    row.className = "course_row";
    row.innerHTML =
      "<td>" + course.institution + "</td>" +
      "<td>" + course.courseNumber + "</td>" +
      "<td>" + course.courseName + "</td>" +
      "<td>" + syllabusCell + "</td>" +
      "<td>" + formatGrade(course) + "</td>" +
      "<td>" + course.credits + "</td>" +
      "<td>" + course.term + "</td>";
    table.appendChild(row);
  });

  tableContainer.appendChild(table);

  const gap = document.createElement("div");
  gap.className = "gap";
  tableContainer.appendChild(gap);
}

function orderfield() {
  clearTables();
  fieldOrder.forEach((field) => {
    createTable(field, courseAll.filter((course) => course.field === field));
  });
}

function orderdept() {
  clearTables();
  departmentOrder.forEach((department) => {
    createTable(department, courseAll.filter((course) => course.department === department));
  });
}

function ordersem() {
  clearTables();
  termOrder.forEach((term) => {
    createTable(term, courseAll.filter((course) => course.term === term));
  });
}

orderfield();
