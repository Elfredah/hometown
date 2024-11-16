/* Animation for section transitions */
.animated {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.animated.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Add this for button animations */
form button {
  background-color: #1e3d58;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

form button:hover {
  background-color: #3b6978;
  transform: scale(1.05);
}