* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.quiz-container {
    background: white;
    width: 100%;
    max-width: 600px;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

#question-number {
    color: #667eea;
    font-weight: bold;
    margin-bottom: 15px;
}

#question {
    color: #222;
    margin-bottom: 25px;
    line-height: 1.4;
}

#answers {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.answer-btn {
    width: 100%;
    padding: 14px;
    border: 2px solid #ddd;
    background: white;
    border-radius: 10px;
    text-align: left;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
}

.answer-btn:hover {
    background: #f0f2ff;
    border-color: #667eea;
}

.answer-btn.selected {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.answer-btn.correct {
    background: #28a745;
    color: white;
    border-color: #28a745;
}

.answer-btn.wrong {
    background: #dc3545;
    color: white;
    border-color: #dc3545;
}

#next-btn,
#result button {
    width: 100%;
    margin-top: 25px;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: #667eea;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

#next-btn:hover,
#result button:hover {
    background: #5568d9;
}

.hidden {
    display: none;
}

#result {
    text-align: center;
}

#result h2 {
    color: #667eea;
    margin-bottom: 15px;
}

#score {
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;
}
