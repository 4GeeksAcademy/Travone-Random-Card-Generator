
 const suits = [
            { name: 'heart', symbol: '♥', class: 'heart' },
            { name: 'diamond', symbol: '♦', class: 'diamond' },
            { name: 'spade', symbol: '♠', class: 'spade' },
            { name: 'club', symbol: '♣', class: 'club' }
        ];

        const cardNumbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let timerInterval;
        let countdownInterval;
        let timeLeft = 10;

        function generateRandomCard() {
            const randomSuit = Math.floor(Math.random() * 4);
            const randomNumber = Math.floor(Math.random() * 13);
            
            return {
                suit: suits[randomSuit],
                number: cardNumbers[randomNumber]
            };
        }

        function displayCard(card) {
            const cardElement = document.getElementById('playingCard');
            const numberElement = cardElement.querySelector('.card-number');
            const suitElements = cardElement.querySelectorAll('.card-suit');
            
            // Remove all suit classes
            cardElement.classList.remove('heart', 'diamond', 'spade', 'club');
            
            // Add the new suit class
            cardElement.classList.add(card.suit.class);
            
            // Update the center number and corner suit symbols
            numberElement.textContent = card.number;
            suitElements.forEach(el => el.textContent = card.suit.symbol);
        }

        function generateNewCard() {
            const newCard = generateRandomCard();
            displayCard(newCard);
            resetTimer();
        }

        function updateCardSize() {
            const width = document.getElementById('width').value;
            const height = document.getElementById('height').value;
            const cardElement = document.getElementById('playingCard');
            
            cardElement.style.width = width + 'px';
            cardElement.style.height = height + 'px';
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                generateNewCard();
            }, 10000);
            
            startCountdown();
        }

        function startCountdown() {
            countdownInterval = setInterval(() => {
                timeLeft--;
                document.getElementById('timer').textContent = `Next card in: ${timeLeft}s`;
                
                if (timeLeft <= 0) {
                    timeLeft = 10;
                }
            }, 1000);
        }

        function resetTimer() {
            timeLeft = 10;
            document.getElementById('timer').textContent = `Next card in: ${timeLeft}s`;
        }

        // Initialize the card generator when the page loads
        window.onload = function() {
            generateNewCard();
            startTimer();
        };