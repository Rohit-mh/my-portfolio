// ==========================================
// Rohit Hadagali — Portfolio Chatbot
// ==========================================

const resumeData = {
    name: "Rohit Hadagali",
    title: "AI/ML Engineer | Backend Developer",
    tagline: "I build real-world AI systems including multi-agent frameworks, RAG pipelines, and voice AI solutions.",
    intro: "Passionate about building scalable AI-powered applications combining backend systems, LLMs, and real-time communication.",
    phone: "+918660595631",
    email: "rohithadagali18@gmail.com",
    location: "Belagavi, India",
    experience_title: "AI/ML & Backend Engineer Intern",
    experience_company: "Mahindra AI (Client)",
    experience_location: "Mumbai",
    experience_duration: "Jan 2026 — Present",
    summary: "Information Science undergraduate with hands-on experience in agentic AI systems, multi-agent reasoning frameworks, RAG-based applications, voice AI systems, OCR + LLM pipelines, and DevOps with Docker & Kubernetes.",
    experience_details: [
        "Architected and deployed i4 Ideas Portal, a FastAPI-based system for structured idea management and analytics",
        "Built agentic AI pipelines (Google ADK, MCP) for automated classification of unstructured inputs",
        "Developed LLM Council, a multi-agent system for consensus-based AI outputs",
        "Implemented RAG pipelines for document retrieval and improved response accuracy",
        "Built voice AI systems (WebRTC + multilingual models) for real-time interaction",
        "Deployed systems using Docker & Kubernetes",
        "Implemented authentication, authorization, and session management"
    ],
    education: "Information Science (Undergraduate)",
    projects: [
        { name: "LLM Council — Multi-Agent AI System", description: "Multi-agent system where GPT, Claude, and Gemini collaborate; a judge agent evaluates responses for accuracy and consistency to reduce hallucination using debate-based reasoning." },
        { name: "i4 Ideas Portal", description: "FastAPI-based enterprise system for idea tracking and workflow management; agent-based classification of unstructured input; integrated frontend with backend APIs." },
        { name: "Cheque Recognition System", description: "OCR + LLM pipeline for cheque validation; extracts structured data like account number, signature, bank name; automates document verification." },
        { name: "Voice AI Agents", description: "Real-time speech → AI → response pipeline; supports multilingual input; built using WebRTC." },
        { name: "MLOps — Diabetes Prediction System", description: "ML model deployed using Docker & Kubernetes; API-based prediction system tested via Postman." }
    ],
    skills: {
        languages: ["Python", "C", "JavaScript", "Java"],
        frameworks: ["FastAPI", "Flask", "LangChain", "Google ADK"],
        ai_ml: ["LLMs", "RAG", "Agentic AI", "MCP", "LCEL", "Prompt Engineering"],
        tools: ["Docker", "Kubernetes", "Git", "Postman", "Swagger", "WebRTC"],
        databases: ["MySQL"]
    }
};

// ==========================================
// Knowledge base matching
// ==========================================
function getResponse(input) {
    const q = input.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|howdy|greetings|hola|namaste|sup|what'?s up)/i.test(q)) {
        return `Hello! I'm Rohit's AI assistant. Ask me about his **projects**, **skills**, **experience**, or **AI work** (agents, RAG, voice AI).`;
    }

    // Who is / about
    if (/who (is|are)|about (rohit|him|you)|introduce|tell me about (yourself|rohit|him)/i.test(q)) {
        return `**${resumeData.name}** — ${resumeData.title}.\n\n${resumeData.tagline}\n\n${resumeData.summary}`;
    }

    // Name
    if (/what('?s| is) (your |his )?name/i.test(q) || q === 'name') {
        return `His name is **${resumeData.name}**.`;
    }

    // Contact / email / phone
    if (/contact|email|phone|number|reach|call|mail/i.test(q)) {
        return `📧 **Email:** ${resumeData.email}\n📱 **Phone:** ${resumeData.phone}\n📍 **Location:** ${resumeData.location}`;
    }

    // Location
    if (/where|location|city|live|based|from/i.test(q)) {
        return `${resumeData.name} is based in **${resumeData.location}**.`;
    }

    // Agents / multi-agent
    if (/agentic|multi.?agent|multiple.?agent|agent.?system|council|judge|debate/i.test(q)) {
        return `🤖 **Agentic AI & Multi-Agent Systems:**\n\nRohit builds agentic pipelines (Google ADK, MCP) and multi-agent systems like **LLM Council** where multiple models collaborate and a judge agent evaluates outputs to reduce hallucination.`;
    }

    // Experience
    if (/experience|work(ed|ing)?|job|career|role|position|company|bristlecone|employ/i.test(q)) {
        let resp = `💼 **${resumeData.experience_title}** at **${resumeData.experience_company}** (${resumeData.experience_duration})\n📍 ${resumeData.experience_location}\n\n**Key Work:**\n`;
        resumeData.experience_details.forEach(d => {
            resp += `• ${d}\n`;
        });
        return resp;
    }

    // Skills
    if (/skill|tech|tool|stack|language|framework|librar|know|proficien|capable/i.test(q)) {
        let resp = `🛠️ **Skills:**\n\n`;
        resp += `**Languages:** ${resumeData.skills.languages.join(', ')}\n\n`;
        resp += `**Frameworks:** ${resumeData.skills.frameworks.join(', ')}\n\n`;
        resp += `**AI / ML:** ${resumeData.skills.ai_ml.join(', ')}\n\n`;
        resp += `**Tools & Platforms:** ${resumeData.skills.tools.join(', ')}\n\n`;
        resp += `**Databases:** ${resumeData.skills.databases.join(', ')}`;
        return resp;
    }

    // FastAPI / Flask
    if (/fastapi|flask/i.test(q)) {
        return `Rohit builds backend services with **FastAPI** and **Flask**, integrating AI workflows (agents, RAG, OCR, voice) and production concerns like auth and session management.`;
    }

    // AI / ML / GenAI / LLM / NLP / chatbot
    if (/\b(ai|artificial intelligence|machine learning|ml|genai|generative|llm|nlp|natural language|chatbot|openai|langchain|rag|rasa|gpt)\b/i.test(q)) {
        return `🤖 **AI Work:**\n\n• Agentic AI & multi-agent systems\n• RAG pipelines\n• OCR + LLM pipelines\n• Voice AI (WebRTC, multilingual)\n• MCP + LCEL + prompt engineering`;
    }

    // DevOps / deploy
    if (/devops|docker|kubernetes|deploy|deployment|infrastructure/i.test(q)) {
        return `☁️ **DevOps:**\n\nRohit deploys systems using **Docker** and **Kubernetes** and validates APIs using **Swagger** and **Postman**.`;
    }

    // Database
    if (/database|db|sql|mongo|postgres|mysql|oracle|redis|firestore|vector/i.test(q)) {
        return `🗃️ **Databases:** ${resumeData.skills.databases.join(', ')}`;
    }

    // Projects
    if (/project|built|build|develop|portfolio|work.*on/i.test(q)) {
        let resp = `🚀 **Projects:**\n\n`;
        resumeData.projects.forEach((p, i) => {
            resp += `${i + 1}. **${p.name}** — ${p.description}\n\n`;
        });
        return resp;
    }

    // Education
    if (/educat|university|college|degree|study|school|graduat|qualif/i.test(q)) {
        return `🎓 **Education:**\n\n${resumeData.education}`;
    }

    // Resume / CV
    if (/resume|cv|download/i.test(q)) {
        return `📄 You're viewing Rohit's portfolio — ask me about his projects, skills, or experience.`;
    }

    // MCP
    if (/\bmcp\b|model context protocol/i.test(q)) {
        return `🔌 **Model Context Protocol (MCP):**\n\nRohit uses MCP for structured tool communication and agent interoperability in agentic pipelines.`;
    }

    // Thanks / bye
    if (/thank|thanks|bye|goodbye|see you|take care/i.test(q)) {
        return `You're welcome! 😊 Feel free to come back anytime. Have a great day!`;
    }

    // Salary
    if (/salary|compensation|rate|pay|ctc|money/i.test(q)) {
        return `💰 Please contact Rohit directly:\n📧 ${resumeData.email}\n📱 ${resumeData.phone}`;
    }

    // Catch-all
    return `Ask me about Rohit's:\n\n• 🤖 **AI work** (agents, RAG, voice, OCR)\n• 💼 **experience**\n• 🚀 **projects**\n• 🛠️ **skills**\n• 📧 **contact**`;
}

// ==========================================
// Format & UI
// ==========================================
function formatResponse(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}

const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatbotMessages');

chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('open');
    chatbotToggle.style.display = chatbotWindow.classList.contains('open') ? 'none' : 'block';
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('open');
    chatbotToggle.style.display = 'block';
});

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    chatInput.value = '';
    const typingEl = appendTyping();
    setTimeout(() => {
        typingEl.remove();
        appendMessage(getResponse(text), 'bot');
    }, 500 + Math.random() * 700);
}

function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `chat-message ${sender}`;
    msg.innerHTML = `
        <div class="chat-avatar">${sender === 'bot' ? '🤖' : '👤'}</div>
        <div class="chat-bubble">${sender === 'bot' ? formatResponse(text) : text}</div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function appendTyping() {
    const msg = document.createElement('div');
    msg.className = 'chat-message bot';
    msg.innerHTML = `<div class="chat-avatar">🤖</div><div class="chat-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return msg;
}

window.askSuggestion = function(text) {
    chatInput.value = text;
    sendMessage();
};
