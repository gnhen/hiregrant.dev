export function createStars() {
    const spaceBackground = document.querySelector('.space-background');
    const numberOfStars = 200;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Random size between 1-4px
        const size = Math.random() * 3 + 1;

        // Random twinkle duration between 2-5s
        const twinkleDuration = Math.random() * 3 + 2;

        // Random delay between 0-2s
        const twinkleDelay = Math.random() * 2;

        // Random initial opacity between 0.5-1
        const initialOpacity = Math.random() * 0.5 + 0.5;

        // Random glow effect
        const glowRadius = size * 2;
        const glowColor = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;

        Object.assign(star.style, {
            left: `${x}%`,
            top: `${y}%`,
            width: `${size}px`,
            height: `${size}px`,
            '--twinkle-duration': `${twinkleDuration}s`,
            '--twinkle-delay': `${-twinkleDelay}s`,
            '--initial-opacity': initialOpacity,
            '--glow-radius': `${glowRadius}px`,
            '--glow-color': glowColor
        });

        spaceBackground.appendChild(star);
    }
}