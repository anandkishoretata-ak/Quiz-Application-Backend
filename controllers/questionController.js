import Question from "../models/Question.js";

// Get Questions
export const getQuestions = async (req, res) => {
  try {
    const { category } = req.query;

    let questions = [];

    if (category) {
      questions = await Question.find({
        category: {
          $regex: `^${category}$`,
          $options: "i",
        },
      });
    } else {
      questions = await Question.find();
    }

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Seed Questions
export const seedQuestions = async (req, res) => {
  try {
    await Question.deleteMany({});

    const questions = [
      // ================= REACT =================
      {
        category: "React",
        question: "Who developed React?",
        options: ["Google", "Facebook", "Microsoft", "Amazon"],
        answer: "Facebook",
      },
      {
        category: "React",
        question: "React is a?",
        options: ["Framework", "Library", "Language", "Database"],
        answer: "Library",
      },
      {
        category: "React",
        question: "Which hook is used for state management?",
        options: ["useState", "useEffect", "useRef", "useMemo"],
        answer: "useState",
      },
      {
        category: "React",
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java XML", "JSON XML", "Java Syntax"],
        answer: "JavaScript XML",
      },
      {
        category: "React",
        question: "React uses which DOM?",
        options: ["Virtual DOM", "Real DOM", "Shadow DOM", "Simple DOM"],
        answer: "Virtual DOM",
      },
      {
        category: "React",
        question: "Props are used to?",
        options: ["Pass Data", "Store State", "Call APIs", "Style"],
        answer: "Pass Data",
      },
      {
        category: "React",
        question: "Which hook accesses DOM?",
        options: ["useRef", "useState", "useEffect", "useMemo"],
        answer: "useRef",
      },
      {
        category: "React",
        question: "React components return?",
        options: ["HTML", "CSS", "JSX", "JSON"],
        answer: "JSX",
      },
      {
        category: "React",
        question: "Which hook handles side effects?",
        options: ["useState", "useEffect", "useMemo", "useRef"],
        answer: "useEffect",
      },
      {
        category: "React",
        question: "React is maintained by?",
        options: ["Google", "Meta", "Microsoft", "Amazon"],
        answer: "Meta",
      },

      // ================= JAVA =================
      {
        category: "Java",
        question: "Java is a?",
        options: ["Language", "Database", "Browser", "OS"],
        answer: "Language",
      },
      {
        category: "Java",
        question: "Who developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
        answer: "Sun Microsystems",
      },
      {
        category: "Java",
        question: "JVM stands for?",
        options: [
          "Java Virtual Machine",
          "Java Variable Machine",
          "Joint Virtual Machine",
          "Java Vendor Machine",
        ],
        answer: "Java Virtual Machine",
      },
      {
        category: "Java",
        question: "Which keyword is used for inheritance?",
        options: ["extends", "implements", "inherit", "super"],
        answer: "extends",
      },
      {
        category: "Java",
        question: "Java is?",
        options: ["Platform Independent", "Platform Dependent", "OS", "DB"],
        answer: "Platform Independent",
      },
      {
        category: "Java",
        question: "Which package is imported by default?",
        options: ["java.lang", "java.util", "java.io", "java.net"],
        answer: "java.lang",
      },
      {
        category: "Java",
        question: "Which method starts a program?",
        options: ["main()", "start()", "run()", "init()"],
        answer: "main()",
      },
      {
        category: "Java",
        question: "Java supports?",
        options: ["OOP", "POP", "None", "Both"],
        answer: "OOP",
      },
      {
        category: "Java",
        question: "String is?",
        options: ["Class", "Method", "Package", "Variable"],
        answer: "Class",
      },
      {
        category: "Java",
        question: "Which operator compares values?",
        options: ["==", "=", "!=", "<>"],
        answer: "==",
      },

      // ================= MERN =================
      {
        category: "MERN",
        question: "M stands for?",
        options: ["MongoDB", "MySQL", "MariaDB", "Microsoft"],
        answer: "MongoDB",
      },
      {
        category: "MERN",
        question: "E stands for?",
        options: ["Express", "Engine", "Element", "Electron"],
        answer: "Express",
      },
      {
        category: "MERN",
        question: "R stands for?",
        options: ["React", "Redux", "Router", "Render"],
        answer: "React",
      },
      {
        category: "MERN",
        question: "N stands for?",
        options: ["Node.js", "Nest.js", "NPM", "Network"],
        answer: "Node.js",
      },
      {
        category: "MERN",
        question: "MongoDB is a?",
        options: ["NoSQL DB", "SQL DB", "Language", "Framework"],
        answer: "NoSQL DB",
      },
      {
        category: "MERN",
        question: "Express is used for?",
        options: ["Backend", "Frontend", "Database", "Styling"],
        answer: "Backend",
      },
      {
        category: "MERN",
        question: "Node.js runtime uses?",
        options: ["V8 Engine", "SpiderMonkey", "Java VM", "CLR"],
        answer: "V8 Engine",
      },
      {
        category: "MERN",
        question: "React is used for?",
        options: ["UI", "Database", "Backend", "Hosting"],
        answer: "UI",
      },
      {
        category: "MERN",
        question: "npm stands for?",
        options: [
          "Node Package Manager",
          "New Package Manager",
          "Node Project Manager",
          "None",
        ],
        answer: "Node Package Manager",
      },
      {
        category: "MERN",
        question: "Mongoose is used for?",
        options: ["MongoDB", "React", "Express", "CSS"],
        answer: "MongoDB",
      },

      // ================= APTITUDE =================
      {
        category: "Aptitude",
        question: "10 + 20 = ?",
        options: ["20", "30", "40", "50"],
        answer: "30",
      },
      {
        category: "Aptitude",
        question: "15 × 2 = ?",
        options: ["20", "25", "30", "35"],
        answer: "30",
      },
      {
        category: "Aptitude",
        question: "100 ÷ 10 = ?",
        options: ["5", "10", "15", "20"],
        answer: "10",
      },
      {
        category: "Aptitude",
        question: "25 + 25 = ?",
        options: ["40", "45", "50", "55"],
        answer: "50",
      },
      {
        category: "Aptitude",
        question: "50 - 20 = ?",
        options: ["20", "25", "30", "35"],
        answer: "30",
      },
      {
        category: "Aptitude",
        question: "12 × 12 = ?",
        options: ["124", "144", "154", "164"],
        answer: "144",
      },
      {
        category: "Aptitude",
        question: "81 ÷ 9 = ?",
        options: ["7", "8", "9", "10"],
        answer: "9",
      },
      {
        category: "Aptitude",
        question: "Square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: "8",
      },
      {
        category: "Aptitude",
        question: "20% of 100?",
        options: ["10", "20", "30", "40"],
        answer: "20",
      },
      {
        category: "Aptitude",
        question: "5² = ?",
        options: ["10", "15", "20", "25"],
        answer: "25",
      },
    ];

    await Question.insertMany(questions);

    res.status(201).json({
      message: "Questions Seeded Successfully",
      totalQuestions: questions.length,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};